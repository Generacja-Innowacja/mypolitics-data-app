import { ReportData } from "@/types/models/reportData";
import { useState } from "react";
import ReportQuestionSelector from "../ReportQuestionSelector";

interface Props {
    reportData: ReportData;
}

const ReportQuestions = ({ reportData }: Props): JSX.Element => {
    const [selectedQuestionId, setSelectedQuestionId] = useState(reportData.questions?.[0].id || "");

    return (
        <div>
            <ReportQuestionSelector
                reportData={reportData}
                selectedQuestionId={selectedQuestionId}
                setSelectedQuestionId={setSelectedQuestionId}
            />
        </div>
    )
}

export default ReportQuestions;
