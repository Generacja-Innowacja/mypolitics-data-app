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
      className="flex items-center gap-4"
      exit={{ opacity: 0 }}
    >
      <ReportAnswerPill answer={answer} index={index} />
      <span className="font-bold">{answer.text}</span>
    </motion.div>
  );
};

export default SingleAnswer;
