import { ReportAnswer } from "@/types/models/reportData";
import { motion } from "motion/react";
import ReportAnswerPill from "../../ReportAnswerPill";

interface Props {
  answer: ReportAnswer;
  index: number;
}

const SingleAnswer = ({ answer, index }: Props): JSX.Element => {
  return (
    <motion.div
      layout
      className="flex gap-2 flex-col sm:gap-4 sm:flex-row sm:items-center"
      exit={{ opacity: 0 }}
    >
      <ReportAnswerPill answer={answer} index={index} />
      <span className="font-bold">{answer.text}</span>
    </motion.div>
  );
};

export default SingleAnswer;
