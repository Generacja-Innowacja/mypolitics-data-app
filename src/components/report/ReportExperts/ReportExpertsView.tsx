import AnimateChangeInHeight from "@/components/shared/AnimateChangeInHeight";
import { ReportData } from "@/types/models/reportData";
import { useMemo } from "react";
import ReportAuthor from "../ReportAuthor";
import { parseExpertToAuthor } from "@/shared/utils/parseExpertToAuthor";
import { ReportExpertsSkeleton } from "./ReportExpertsSkeleton";

interface Props {
  reportData?: ReportData;
  isLoading: boolean;
}

const ReportExpertsView = ({ reportData, isLoading }: Props): JSX.Element => {
  const expertAuthors = useMemo(
    () =>
      (reportData?.experts || []).map((expert) => ({
        id: expert.id,
        review: expert.review,
        ...parseExpertToAuthor(expert),
      })),
    [reportData?.experts],
  );

  return (
    <AnimateChangeInHeight duration={0.15}>
      <div className="flex flex-col gap-4">
        {!isLoading &&
          expertAuthors.map(({ id, review, ...author }) => (
            <ReportAuthor key={id} author={author}>
              {review && (
                <>
                  <div className="w-full h-[1px] bg-gray" />
                  <div>
                    <b>Komentarz do badania:</b>
                    <p className="whitespace-pre-line">{review}</p>
                  </div>
                </>
              )}
            </ReportAuthor>
          ))}
        {isLoading && <ReportExpertsSkeleton />}
      </div>
    </AnimateChangeInHeight>
  );
};

export default ReportExpertsView;
