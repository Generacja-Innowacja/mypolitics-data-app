import ReportAuthor from "@/components/report/ReportAuthor";
import ReportDataLink from "@/components/report/ReportDataLink";
import ReportFooter from "@/components/report/ReportFooter";
import ReportHeader from "@/components/report/ReportHeader";
import ReportQuestions from "@/components/report/ReportQuestions";
import ReportQuestionSelector from "@/components/report/ReportQuestionSelector";
import ReportSection from "@/components/report/ReportSection";
import { __MOCK__reportData } from "@/data/mlodzi-wyborcy/__MOCK__reportData";
import { MLODZI_WYBORCY_REPORT as REPORT } from "@/data/mlodzi-wyborcy/report";

const MlodziWyborcyPage = (): JSX.Element => {
    return (
        <article className="flex flex-col items-center gap-8 md:gap-16 pb-8 md:pb-16">
            <ReportHeader report={REPORT} />
            <div className="flex flex-col gap-8 md:gap-12 max-w-screen-lg items-center w-full">
                <ReportSection title="Analiza pytań">
                    <ReportQuestions reportData={__MOCK__reportData} />
                </ReportSection>
                <ReportSection title="Autorzy">
                    <div className="flex flex-col gap-4">
                        {REPORT.authors.map((author, index) => (
                            <ReportAuthor key={index} author={author} />
                        ))}
                    </div>
                </ReportSection>
                <ReportSection title="Dane źródłowe">
                    <div className="flex flex-col gap-4">
                        {REPORT.dataLinks.map((dataLink, index) => (
                            <ReportDataLink key={index} dataLink={dataLink} />
                        ))}
                    </div>
                </ReportSection>
                <ReportFooter report={REPORT} />
            </div>
        </article>
    )
}

export default MlodziWyborcyPage;
