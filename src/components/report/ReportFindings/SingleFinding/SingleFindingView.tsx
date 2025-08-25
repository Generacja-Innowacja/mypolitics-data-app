import AnimateChangeInHeight from "@/components/shared/AnimateChangeInHeight";
import { ReportQuestion } from "@/types/models/reportData";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tw-merge";
import ReportAnswerPill from "../../ReportAnswerPill";
import { scrollQuestionIntoView } from "../../ReportQuestionSelector/utils/scrollQuestionIntoView";
import { getQuestionTopAnswer } from "../../utils/getQuestionTopAnswer";

interface Props {
    question: ReportQuestion;
    className: string;
}

const SingleFinding = ({ question, className }: Props): JSX.Element | null => {
    const topAnswer = getQuestionTopAnswer(question);

    const onClick = () => {
        scrollQuestionIntoView(question.id);
    }

    return (
        <AnimateChangeInHeight duration={0.3} className="overflow-hidden w-full rounded-[32px] border border-dark-sea-storm/10">
            <div
                className={twMerge(`flex flex-col gap-4 justify-between bg-white hover:bg-gray transition-colors p-6 w-full cursor-pointer ${className}`)}
                onClick={onClick}
            >
                <div className="flex items-center gap-3">
                    <div className="text-center py-2 px-4 rounded-full border border-dark-sea text-dark-sea font-bold flex-shrink-0 w-[80px] md:w-[128px]">
                        <span className="hidden md:inline">Pytanie&nbsp;</span>#{question?.number}
                    </div>
                    <ReportAnswerPill answer={topAnswer} />
                </div>
                <AnimatePresence mode="popLayout">
                    <motion.span
                        className="font-bold text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        key={question?.finding}
                    >
                        {question?.finding}
                    </motion.span>
                </AnimatePresence>
            </div>
        </AnimateChangeInHeight>
    )
}

export default SingleFinding;
