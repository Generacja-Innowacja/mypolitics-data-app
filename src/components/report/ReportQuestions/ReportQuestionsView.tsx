import AnimateChangeInHeight from "@/components/shared/AnimateChangeInHeight";
import { ReportData } from "@/types/models/reportData";
import { useState } from "react";
import ReportQuestionAnswers, {
  ReportQuestionAnswersSkeleton,
} from "../ReportQuestionAnswers";
import ReportQuestionSelector, {
  ReportQuestionSelectorSkeleton,
} from "../ReportQuestionSelector";
import { QuestionsFilter } from "./ReportQuestionsTypes";
import ButtonSelect from "@/components/shared/ButtonSelect";
import { FILTER_OPTIONS } from "./ReportQuestionsConstants";
import { useFilteredQuestions } from "./utils/useFilteredQuestions";

interface Props {
  reportData?: ReportData;
  isLoading: boolean;
}

const ReportQuestions = ({ reportData, isLoading }: Props): JSX.Element => {
  const [questionsFilter, setQuestionsFilter] =
    useState<QuestionsFilter>("all");
  const questions = useFilteredQuestions({ reportData, questionsFilter });
  const [selectedQuestionId, setSelectedQuestionId] = useState("");
  const currentQuestion =
    questions && questions.find((q) => q.id === selectedQuestionId);

  return (
    <AnimateChangeInHeight duration={0.15}>
      <div className="flex flex-col gap-6">
        {questions.length > 0 && !isLoading && (
          <>
            <ButtonSelect
              options={FILTER_OPTIONS}
              selectedOptionId={questionsFilter}
              onOptionSelect={(id: string) =>
                setQuestionsFilter(id as QuestionsFilter)
              }
            />
            <ReportQuestionSelector
              questions={questions}
              selectedQuestionId={selectedQuestionId}
              setSelectedQuestionId={setSelectedQuestionId}
            />
          </>
        )}
        {isLoading && <ReportQuestionSelectorSkeleton />}
        {!isLoading && currentQuestion && (
          <ReportQuestionAnswers
            question={currentQuestion}
            experts={reportData?.experts}
          />
        )}
        {isLoading && <ReportQuestionAnswersSkeleton />}
      </div>
    </AnimateChangeInHeight>
  );
};

export default ReportQuestions;
