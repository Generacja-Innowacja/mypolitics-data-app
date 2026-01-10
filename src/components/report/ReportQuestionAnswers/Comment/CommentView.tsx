import { ReportComment, ReportExpert } from "@/types/models/reportData";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  comment: ReportComment;
  experts: ReportExpert[];
}

const Comment = ({ comment, experts }: Props): JSX.Element => {
  const expert = useMemo(
    () => experts.find((expert) => expert.id === comment.expertId),
    [experts, comment.expertId],
  );

  return (
    <div className="bg-gray p-6 rounded-3xl flex flex-col gap-4">
      <div className="whitespace-pre-line">{comment.value}</div>
      {expert && (
        <div className="flex justify-between gap-4 flex-col sm:flex-row sm:items-center">
          <div className="flex gap-3 items-center">
            <div className="flex rounded-full object-cover border border-dark-gray overflow-hidden flex-shrink-0 h-[48px] w-[48px]">
              <Image
                className="block h-12 w-12"
                src={expert.person.imageUrl}
                alt={expert.person.name}
                title={expert.person.name}
                height={48}
                width={48}
                onError={(e) => {
                  e.currentTarget.src = "/assets/common/default-author.png";
                }}
              />
            </div>
            <div className="font-bold">{expert.person.name}</div>
          </div>
          <div>
            <Link href={expert.organisation.websiteUrl || ""} target="_blank">
              {/* disabled due to non-deterministic sizings */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="block h-6"
                src={expert.organisation.imageUrl}
                alt={expert.organisation.name}
                title={expert.organisation.name}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
