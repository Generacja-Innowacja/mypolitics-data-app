import Skeleton from "@/components/shared/Skeleton";
import { ReportAnswerPillSkeleton } from "../../ReportAnswerPill";

export const SingleFindingSkeleton = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-4 justify-between bg-white hover:bg-gray transition-colors p-6 w-full overflow-hidden rounded-[32px] border border-dark-sea-storm/10">
            <div className="flex items-center gap-3">
                <Skeleton className="rounded-full w-[80px] md:w-[128px] h-[40px]" />
                <ReportAnswerPillSkeleton />
            </div>
            <Skeleton className="w-full h-[28px]" />
        </div>
    )
}