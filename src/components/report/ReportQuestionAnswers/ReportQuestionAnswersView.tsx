import AnimateChangeInHeight from "@/components/shared/AnimateChangeInHeight";
import { ReportExpert, ReportQuestion } from "@/types/models/reportData";
import { getOrderedAnswers } from "../utils/getOrderedAnswers";
import AnswersChart from "./AnswersChart";
import SingleAnswer from "./SingleAnswer";
import ReportComment from "./Comment";

interface Props {
  question?: ReportQuestion;
  experts?: ReportExpert[];
}

const ReportQuestionAnswers = ({ question, experts }: Props): JSX.Element => {
  const answers = getOrderedAnswers(question?.answers || []);

  return (
    <AnimateChangeInHeight
      duration={0.3}
      className="overflow-hidden bg-white border border-dark-sea-storm/10 rounded-[32px]"
    >
      <div className="flex flex-col gap-6 p-6">
        <div className="flex gap-6 justify-between items-center">
          <div
            key={question?.id}
            className="flex flex-col gap-4 h-full relative"
          >
            {answers.map((answer, index) => (
              <SingleAnswer key={answer.id} answer={answer} index={index} />
            ))}
          </div>
          <AnswersChart answers={answers} />
        </div>
        {question?.explanation && (
          <div className="border border-gray whitespace-pre-line p-6 rounded-3xl">
            {question.explanation}
          </div>
        )}
        {(question?.comments || []).map((comment) => (
          <ReportComment
            key={comment.id}
            comment={comment}
            experts={experts || []}
          />
        ))}
      </div>
    </AnimateChangeInHeight>
  );
};

export default ReportQuestionAnswers;
