import { ChevronDownIcon } from "@/assets/icons/ChevronDownIcon";
import Button from "@/components/shared/Button";
import { ReportData } from "@/types/models/reportData";
import { useCallback, useState } from "react";
import SingleFinding from "./SingleFinding";
import { SingleFindingSkeleton } from "./SingleFinding/SingleFindingSkeleton";

interface Props {
  reportData?: ReportData;
  isLoading: boolean;
}

const ReportFindings = ({
  reportData,
  isLoading,
}: Props): JSX.Element | null => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const questionsWithFindings = (reportData?.questions || []).filter(
    (q) => q.finding,
  );
  const numberOfQuestions = questionsWithFindings.length;
  const currentQuestion = questionsWithFindings[questionIndex];

  const handleChangeQuestion = useCallback(
    (delta: number) => {
      const newIndex = questionIndex + delta;

      if (newIndex > numberOfQuestions - 1) {
        setQuestionIndex(0);
        return;
      }

      if (newIndex < 0) {
        setQuestionIndex(numberOfQuestions - 1);
        return;
      }

      setQuestionIndex(newIndex);
    },
    [questionIndex, numberOfQuestions, setQuestionIndex],
  );

  return (
    <div className="flex gap-4 w-full items-center px-4">
      <Button
        styleType="outlined"
        isIconButton
        onClick={() => handleChangeQuestion(-1)}
        className="hidden md:flex"
      >
        <ChevronDownIcon className="-rotate-90" />
      </Button>
      <div onClick={() => handleChangeQuestion(-1)} className="md:hidden">
        <ChevronDownIcon className="-rotate-90" />
      </div>
      {currentQuestion && !isLoading && (
        <SingleFinding question={currentQuestion} />
      )}
      {(!currentQuestion || isLoading) && <SingleFindingSkeleton />}
      <Button
        styleType="outlined"
        isIconButton
        onClick={() => handleChangeQuestion(1)}
        className="hidden md:flex"
      >
        <ChevronDownIcon className="rotate-90" />
      </Button>
      <div onClick={() => handleChangeQuestion(1)} className="md:hidden">
        <ChevronDownIcon className="rotate-90" />
      </div>
    </div>
  );
};

export default ReportFindings;
