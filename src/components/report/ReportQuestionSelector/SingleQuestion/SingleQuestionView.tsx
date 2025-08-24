import { ReportQuestion } from "@/types/models/reportData";
import { CSSProperties } from "react";
import { twMerge } from "tw-merge";
import ReportAnswerPill from "../../ReportAnswerPill";
import { getOrderedAnswers, getOrderedAnswersByValue } from "../../utils/getOrderedAnswers";
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
    const answers = getOrderedAnswersByValue(question.answers);
    const topAnswer = answers[0];
    const params = {
        [`data-${QUESTION_ELEMENT_DATA_ID}`]: question.id,
    }

    return (
        <div
            className={twMerge(`flex flex-col md:flex-row gap-4 justify-between md:gap-8 md:items-center bg-white rounded-[32px] p-6 border border-dark-sea-storm/10 transition-opacity opacity-${isSelected ? 100 : 50} ${className}`)}
            style={style}
            onClick={onClick}
            {...params}
        >
            <div className="font-bold text-xl">
                <span className="opacity-50">#{number}</span>&nbsp;{question.title}
            </div>
            <div className="inline-flex gap-4 items-center">
                <ReportAnswerPill answer={topAnswer} index={0} />
                <span className="font-bold md:hidden">{topAnswer.text}</span>
            </div>
        </div>
    )
}

export default SingleQuestion;