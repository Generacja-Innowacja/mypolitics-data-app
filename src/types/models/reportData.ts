import { z } from "zod";

export const reportCommentModel = z.object({
  id: z.string(),
  expertId: z.string(),
  value: z.string(),
});

export const reportAnswerModel = z.object({
  id: z.string(),
  text: z.string(),
  value: z.number(),
});

export const reportQuestionModel = z.object({
  id: z.string(),
  number: z.number(),
  text: z.string(),
  finding: z.string().optional(),
  highlighted: z.boolean().optional(),
  explanation: z.string().optional(),
  answers: z.array(reportAnswerModel),
  comments: z.array(reportCommentModel),
});

export const reportExpertInfoModel = z.object({
  name: z.string(),
  imageUrl: z.string(),
  description: z.string().optional(),
  role: z.string().optional(),
  websiteUrl: z.string().optional(),
});

export const reportExpertModel = z.object({
  id: z.string(),
  person: reportExpertInfoModel,
  organisation: reportExpertInfoModel,
  review: z.string().optional(),
});

export const reportDataModel = z.object({
  questions: z.array(reportQuestionModel),
  experts: z.array(reportExpertModel),
});

export type ReportData = z.infer<typeof reportDataModel>;
export type ReportQuestion = z.infer<typeof reportQuestionModel>;
export type ReportAnswer = z.infer<typeof reportAnswerModel>;
export type ReportExpert = z.infer<typeof reportExpertModel>;
export type ReportExpertInfo = z.infer<typeof reportExpertInfoModel>;
export type ReportComment = z.infer<typeof reportCommentModel>;
