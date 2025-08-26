import ReportAuthor from "@/components/report/ReportAuthor";
import ReportDataLink from "@/components/report/ReportDataLink";
import ReportFooter from "@/components/report/ReportFooter";
import ReportHeader from "@/components/report/ReportHeader";
import ReportQuestions from "@/components/report/ReportQuestions";
import ReportSection from "@/components/report/ReportSection";
import { ReportData } from "@/types/models/reportData";
import { CommonReport } from "@/types/report";
import ReportFindings from "../ReportFindings";

interface Props {
  reportConfig: CommonReport;
  reportData: {
    data?: ReportData;
    isLoading: boolean;
  };
}

const ReportPage = ({ reportData, reportConfig }: Props): JSX.Element => {
  return (
    <article className="flex flex-col items-center gap-8 md:gap-16 pb-8 md:pb-16">
      <ReportHeader report={reportConfig} />
      <div className="flex flex-col gap-8 md:gap-12 max-w-screen-lg items-center w-full">
        <ReportFindings
          reportData={reportData.data}
          isLoading={reportData.isLoading}
        />
        <ReportSection title="Analiza pytań">
          <ReportQuestions
            reportData={reportData.data}
            isLoading={reportData.isLoading}
          />
        </ReportSection>
        <ReportSection title="Dane źródłowe">
          <div className="flex flex-col gap-4">
            {reportConfig.dataLinks.map((dataLink, index) => (
              <ReportDataLink key={index} dataLink={dataLink} />
            ))}
          </div>
        </ReportSection>
        <ReportSection title="Autorzy">
          <div className="flex flex-col gap-4">
            {reportConfig.authors.map((author, index) => (
              <ReportAuthor key={index} author={author} />
            ))}
          </div>
        </ReportSection>
        <ReportFooter report={reportConfig} />
      </div>
    </article>
  );
};

export default ReportPage;
