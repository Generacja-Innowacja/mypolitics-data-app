import { ReportAnswer, ReportQuestion } from "@/types/models/reportData";
import { getGroupedAnswers } from "./getGroupedAnswers";
import { getOrderedAnswersByValue } from "./getOrderedAnswers";

export const getQuestionTopAnswer = (question: ReportQuestion): ReportAnswer => {
    const groupedAnswers = getGroupedAnswers(question.answers);
    const sortedAnswers = getOrderedAnswersByValue(groupedAnswers);
    return sortedAnswers[0];
}