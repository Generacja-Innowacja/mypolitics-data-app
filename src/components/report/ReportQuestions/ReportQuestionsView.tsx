import AnimateChangeInHeight from "@/components/shared/AnimateChangeInHeight";
import { ReportData } from "@/types/models/reportData";
import { useEffect, useState } from "react";
import ReportQuestionAnswers, { ReportQuestionAnswersSkeleton } from "../ReportQuestionAnswers";
import ReportQuestionSelector, { ReportQuestionSelectorSkeleton } from "../ReportQuestionSelector";

interface Props {
    reportData?: ReportData;
    isLoading: boolean;
}

const ReportQuestions = ({ reportData, isLoading }: Props): JSX.Element => {
    const [selectedQuestionId, setSelectedQuestionId] = useState("");
    const currentQuestion = reportData && reportData.questions.find(q => q.id === selectedQuestionId);

    useEffect(() => {
        const firstQuestionId = reportData?.questions[0]?.id;
        if (!firstQuestionId) {
            return;
        }

        setSelectedQuestionId(firstQuestionId);
    }, [reportData])

    return (
        <AnimateChangeInHeight duration={0.15}>
            <div className="flex flex-col gap-6">
                {reportData && !isLoading && (
                    <ReportQuestionSelector
                        reportData={reportData}
                        selectedQuestionId={selectedQuestionId}
                        setSelectedQuestionId={setSelectedQuestionId}
                    />
                )}
                {isLoading && (
                    <ReportQuestionSelectorSkeleton />
                )}
                {!isLoading && (
                    <ReportQuestionAnswers question={currentQuestion} />
                )}
                {isLoading && (
                    <ReportQuestionAnswersSkeleton />
                )}
            </div>
        </AnimateChangeInHeight>
    )
}

export default ReportQuestions;
