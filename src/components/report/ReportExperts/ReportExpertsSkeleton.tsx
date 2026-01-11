import Skeleton from "@/components/shared/Skeleton";

export const ReportExpertsSkeleton = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full h-[96px] rounded-[24px]" />
      <Skeleton className="w-full h-[96px] rounded-[24px]" />
      <Skeleton className="w-full h-[96px] rounded-[24px]" />
      <Skeleton className="w-full h-[96px] rounded-[24px]" />
    </div>
  );
};
