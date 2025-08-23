import { z } from "zod";

export const reportAnswerModel = z.object({
    id: z.string(),
    text: z.string(),
    value: z.number()
})

export const reportQuestionModel = z.object({
    id: z.string(),
    title: z.string(),
    answers: z.array(reportAnswerModel)
});

export const reportData = z.object({
    questions: z.array(reportQuestionModel)
})

export type ReportData = z.infer<typeof reportData>;
export type ReportQuestion = z.infer<typeof reportQuestionModel>;
export type ReportAnswer = z.infer<typeof reportAnswerModel>;
