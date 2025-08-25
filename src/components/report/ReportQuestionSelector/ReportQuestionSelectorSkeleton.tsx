import Skeleton from "@/components/shared/Skeleton"

export const ReportQuestionSelectorSkeleton = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-4 rounded-[32px] md:rounded-[32px] overflow-hidden">
            <Skeleton className="w-full h-[64px] md:h-[32px] rounded-t-[32px]" />
            <Skeleton className="w-full h-[256px] md:h-[128px] rounded-[32px]" />
            <Skeleton className="w-full h-[64px] md:h-[32px] rounded-b-[32px]" />
        </div>
    )
}