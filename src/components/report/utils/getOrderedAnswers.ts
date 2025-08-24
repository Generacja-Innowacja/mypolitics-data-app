import { REPORT_ANSWERS_ORDER } from "@/constants/report";
import { ReportAnswer } from "@/types/models/reportData";

const getAnswerOrder = (answer: ReportAnswer): number => {
    return REPORT_ANSWERS_ORDER[answer.text as keyof typeof REPORT_ANSWERS_ORDER] || REPORT_ANSWERS_ORDER.default;
}

const sortByValue = (aAnswer: ReportAnswer, bAnswer: ReportAnswer): number => {
    return bAnswer.value - aAnswer.value;
}

const sortByName = (aAnswer: ReportAnswer, bAnswer: ReportAnswer): number => {
    const aOrder = getAnswerOrder(aAnswer);
    const bOrder = getAnswerOrder(bAnswer);

    return aOrder - bOrder;
}

export const getOrderedAnswersByValue = (answers: ReportAnswer[]): ReportAnswer[] => {
    return answers.sort(sortByValue);
}

export const getOrderedAnswers = (answers: ReportAnswer[]): ReportAnswer[] => {
    return answers.sort((a, b) => sortByValue(a, b) + sortByName(a, b));
}