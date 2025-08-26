import ReportPage from "@/components/report/ReportPage";
import { useReportData } from "@/components/service/data-service/useReportData";
import { MLODZI_WYBORCY_REPORT as REPORT } from "@/constants/reports/mlodzi-wyborcy";

const MlodziWyborcyPage = (): JSX.Element => {
  const { data, isLoading } = useReportData({ id: REPORT.id });

  return <ReportPage reportConfig={REPORT} reportData={{ data, isLoading }} />;
};

export default MlodziWyborcyPage;
