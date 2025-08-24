import Skeleton from "@/components/shared/Skeleton";

export const ReportAnswerPillSkeleton = (): JSX.Element => {
    return (
        <Skeleton className="w-[80px] h-[40px] text-center py-2 rounded-full bg-sea-storm text-white font-bold flex-shrink-0" />
    );
}