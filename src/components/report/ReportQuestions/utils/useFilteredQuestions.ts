import { ReportData, ReportQuestion } from "@/types/models/reportData";
import { QuestionsFilter } from "../ReportQuestionsTypes";
import { useMemo } from "react";

interface Args {
  reportData?: ReportData;
  questionsFilter: QuestionsFilter;
}

export const useFilteredQuestions = ({
  reportData,
  questionsFilter,
}: Args): ReportQuestion[] => {
  const filteredQuestions = useMemo(() => {
    const baseQuestions = reportData?.questions || [];

    switch (questionsFilter) {
      case "commented":
        return baseQuestions.filter((q) => q.comments.length > 0);
      case "highlighted":
        return baseQuestions.filter((q) => q.highlighted);
      default:
        return baseQuestions;
    }
  }, [reportData, questionsFilter]);

  return filteredQuestions;
};
