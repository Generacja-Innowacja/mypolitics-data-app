import { ReportQuestion } from "@/types/models/reportData";
import { useEffect, useRef } from "react";
import { QUESTION_ELEMENT_DATA_ID } from "../ReportQuestionSelectorConstants";
import { useDebouncedCallback } from "use-debounce";

interface Args {
  questions: ReportQuestion[];
  setSelectedQuestionId(id: string): void;
}

const INTERSECTION_HANDLER_DELAY = 100; // 0.1 s

export const useObserveQuestions = ({
  questions,
  setSelectedQuestionId,
}: Args) => {
  const handleIntersectedEntries: IntersectionObserverCallback = (entries) => {
    const fullyIntersectedEntry = entries.find(
      (entry) => entry.intersectionRatio === 1,
    );

    const questionId = fullyIntersectedEntry?.target.getAttribute(
      `data-${QUESTION_ELEMENT_DATA_ID}`,
    );

    if (questionId) {
      setSelectedQuestionId(questionId);
    }
  };

  const debouncedHandleIntersectedEntries = useDebouncedCallback(
    handleIntersectedEntries,
    INTERSECTION_HANDLER_DELAY,
  );

  const observer = useRef(
    new IntersectionObserver(debouncedHandleIntersectedEntries, {
      threshold: 1.0,
    }),
  );

  useEffect(() => {
    questions.forEach((question) => {
      const questionElement = document.querySelector(
        `[data-${QUESTION_ELEMENT_DATA_ID}='${question.id}']`,
      );

      if (questionElement) {
        observer.current.observe(questionElement);
      }
    });
  }, [questions]);
};
