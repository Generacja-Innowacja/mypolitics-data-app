import { z } from "zod";

export const reportAnswerModel = z.object({
    id: z.string(),
    text: z.string(),
    value: z.number()
})

export const reportQuestionModel = z.object({
    id: z.string(),
    number: z.number(),
    text: z.string(),
    highlighted: z.boolean().optional(),
    explanation: z.string().optional(),
    answers: z.array(reportAnswerModel)
});

export const reportDataModel = z.object({
    questions: z.array(reportQuestionModel)
})

export type ReportData = z.infer<typeof reportDataModel>;
export type ReportQuestion = z.infer<typeof reportQuestionModel>;
export type ReportAnswer = z.infer<typeof reportAnswerModel>;
