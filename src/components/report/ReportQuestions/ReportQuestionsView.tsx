import AnimateChangeInHeight from "@/components/shared/AnimateChangeInHeight";
import { ReportData } from "@/types/models/reportData";
import { useState } from "react";
import ReportQuestionAnswers from "../ReportQuestionAnswers";
import ReportQuestionSelector from "../ReportQuestionSelector";

interface Props {
    reportData: ReportData;
}

const ReportQuestions = ({ reportData }: Props): JSX.Element => {
    const [selectedQuestionId, setSelectedQuestionId] = useState(reportData.questions?.[0].id || "");
    const currentQuestion = reportData.questions.find(q => q.id === selectedQuestionId);

    return (
        <AnimateChangeInHeight duration={0.15}>
            <div className="flex flex-col gap-6">
                <ReportQuestionSelector
                    reportData={reportData}
                    selectedQuestionId={selectedQuestionId}
                    setSelectedQuestionId={setSelectedQuestionId}
                />
                <ReportQuestionAnswers
                    question={currentQuestion}
                />
            </div>
        </AnimateChangeInHeight>
    )
}

export default ReportQuestions;
