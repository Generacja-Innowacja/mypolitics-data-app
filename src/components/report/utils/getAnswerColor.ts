import { REPORT_ANSWER_COLORS, REPORT_COLORS, REPORT_NON_STANDARD_ANSWER_COLORS_ORDER } from "@/constants/report";
import { ReportAnswer } from "@/types/models/reportData";

export const getAnswerColor = (answer: ReportAnswer, index: number): string => {
    const predefinedColor = REPORT_ANSWER_COLORS[answer.text as keyof typeof REPORT_ANSWER_COLORS];
    if (predefinedColor) {
        return predefinedColor;
    }

    return REPORT_NON_STANDARD_ANSWER_COLORS_ORDER?.[index.toString()] || REPORT_COLORS.MUTED_AZURE;
}