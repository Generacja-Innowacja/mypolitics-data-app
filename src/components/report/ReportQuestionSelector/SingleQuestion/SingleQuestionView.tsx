import { ReportQuestion } from "@/types/models/reportData";
import { CSSProperties } from "react";
import { twMerge } from "tw-merge";
import { QUESTION_ELEMENT_DATA_ID } from "../ReportQuestionSelectorConstants";

interface Props {
    question: ReportQuestion;
    number: number;
    className?: string;
    isSelected?: boolean;
    style?: CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const SingleQuestion = ({ question, number, className, isSelected, style, onClick }: Props): JSX.Element => {
    const params = {
        [`data-${QUESTION_ELEMENT_DATA_ID}`]: question.id,
    }

    return (
        <div
            className={twMerge(`flex gap-8 opacity-${isSelected ? 100 : 50} items-center justify-between bg-white rounded-[32px] p-6 border border-dark-sea-storm/10 transition-opacity ${className}`)}
            style={style}
            onClick={onClick}
            {...params}
        >
            <div className="font-bold text-xl">
                <span className="opacity-50">#{number}</span>&nbsp;{question.title}
            </div>
            <div className="px-4 py-1 rounded-full bg-sea-storm text-white font-bold">
                {question.answers[0].value.toFixed(0)}%
            </div>
        </div>
    )
}

export default SingleQuestion;