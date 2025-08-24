import Skeleton from "@/components/shared/Skeleton"
import { ReportAnswerPillSkeleton } from "../ReportAnswerPill"


export const ReportQuestionAnswersSkeleton = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-6 p-6 overflow-hidden bg-white border border-dark-sea-storm/10 rounded-[32px]">
            <div className="flex gap-4 justify-between items-center">
                <div className="flex flex-col gap-4 h-full relative">
                    <div className="flex items-center gap-4">
                        <ReportAnswerPillSkeleton />
                        <Skeleton className="w-[128px] h-[24px] rounded-full" />
                    </div>
                    <div className="flex items-center gap-4">
                        <ReportAnswerPillSkeleton />
                        <Skeleton className="w-[128px] h-[24px] rounded-full" />
                    </div>
                </div>
                <Skeleton className="hidden sm:block h-[128px] w-[128px] md:h-[196px] md:w-[196px] rounded-full" />
            </div>
        </div>
    )
}