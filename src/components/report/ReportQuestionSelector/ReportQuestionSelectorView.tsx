import AnimateChangeInHeight from "@/components/shared/AnimateChangeInHeight";
import { ReportData } from "@/types/models/reportData";
import { useRef } from "react";
import { twMerge } from "tw-merge";
import SingleQuestion from "./SingleQuestion";
import { scrollQuestionIntoView } from "./utils/scrollQuestionIntoView";
import { useQuestionsExpectedHeight } from "./utils/useQuestionsExpectedHeight";
import { useObserveQuestions } from "./utils/useObserveQuestions";

interface Props {
  reportData: ReportData;
  selectedQuestionId: string;
  setSelectedQuestionId(id: string): void;
}

const ReportQuestionSelector = ({
  reportData,
  selectedQuestionId,
  setSelectedQuestionId,
}: Props): JSX.Element => {
  const questionsWrapperRef = useRef<HTMLDivElement>(null);
  const { expectedHeight } = useQuestionsExpectedHeight({
    questionsWrapperRef,
  });

  useObserveQuestions({
    questions: reportData?.questions,
    setSelectedQuestionId,
  });

  const handleQuestionClick = (questionId: string) => {
    scrollQuestionIntoView(questionId);
    setSelectedQuestionId(questionId);
  };

  return (
    <AnimateChangeInHeight duration={0.3} className="overflow-hidden">
      <div
        ref={questionsWrapperRef}
        className="overflow-y-auto snap-y snap-mandatory flex flex-col gap-4 rounded-[32px]"
        style={{ height: expectedHeight === 0 ? "212px" : expectedHeight * 2 }}
      >
        {reportData.questions.map((question) => {
          const isSelected = question.id === selectedQuestionId;

          return (
            <SingleQuestion
              key={question.id}
              onClick={() => handleQuestionClick(question.id)}
              className={twMerge(
                `snap-center cursor-pointer ${isSelected ? "" : "hover:opacity-75"}`,
              )}
              question={question}
              number={question.number}
              isSelected={isSelected}
              style={{
                minHeight: expectedHeight === 0 ? undefined : expectedHeight,
                ...(expectedHeight === 0 ? { opacity: 0 } : {}),
              }}
            />
          );
        })}
      </div>
    </AnimateChangeInHeight>
  );
};

export default ReportQuestionSelector;
