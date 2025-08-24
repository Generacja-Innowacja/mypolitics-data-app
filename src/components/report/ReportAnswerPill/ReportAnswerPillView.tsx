import { ReportAnswer } from "@/types/models/reportData";
import { getAnswerColor } from "../utils/getAnswerColor";

interface Props {
    answer: ReportAnswer;
    index: number;
}

const ReportAnswerPill = ({ answer, index }: Props): JSX.Element => {
    const valueFormatted = `${answer.value.toFixed(0)}%`;
    const color = getAnswerColor(answer, index);

    return (
        <div className="w-[80px] text-center py-2 rounded-full bg-sea-storm text-white font-bold flex-shrink-0" style={{ backgroundColor: color }}>
            {valueFormatted}
        </div>
    )
}

export default ReportAnswerPill;
