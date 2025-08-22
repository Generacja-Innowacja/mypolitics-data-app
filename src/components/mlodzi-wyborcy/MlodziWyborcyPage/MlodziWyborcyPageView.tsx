import { MLODZI_WYBORCY_REPORT } from "@/components/data/mlodzi-wyborcy/report";
import ReportFooter from "@/components/shared/ReportFooter";
import ReportHeader from "@/components/shared/ReportHeader";
import ReportSection from "@/components/shared/ReportSection";

const MlodziWyborcyPage = (): JSX.Element => {
    return (
        <article className="flex flex-col items-center gap-8 md:gap-16 pb-8 md:pb-16">
            <ReportHeader report={MLODZI_WYBORCY_REPORT} />
            <div className="flex flex-col gap-8 md:gap-12 max-w-screen-lg items-center w-full">
                <ReportSection title="Analiza pytań">
                    analiza-pytan
                </ReportSection>
                <ReportSection title="Autorzy">
                    autorzy
                </ReportSection>
                <ReportSection title="Dane źródłowe">
                    dane-zrodlowe
                </ReportSection>
                <ReportFooter report={MLODZI_WYBORCY_REPORT} />
            </div>
        </article>
    )
}

export default MlodziWyborcyPage;
