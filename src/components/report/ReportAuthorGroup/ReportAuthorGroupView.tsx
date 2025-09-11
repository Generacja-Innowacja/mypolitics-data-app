import { ReportAuthorGroup as ReportAuthorGroupType } from "@/types/report";
import ReportAuthor from "../ReportAuthor/ReportAuthorView";

interface Props {
  authorGroup: ReportAuthorGroupType;
}

const ReportAuthorGroup = ({ authorGroup }: Props): JSX.Element => {
  const authorsList = authorGroup.authors.map((author, index) => (
    <ReportAuthor key={index} author={author} />
  ));

  if (authorGroup.isMainGroup) {
    return <>{authorsList}</>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="font-bold">{authorGroup.title}</span>
        <div className="h-[1px] w-full bg-dark-sea-storm/10" />
      </div>
      {authorsList}
    </div>
  );
};

export default ReportAuthorGroup;
