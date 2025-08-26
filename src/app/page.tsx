"use client";

import ReportPage from "@/components/report/ReportPage";
import { MLODZI_WYBORCY_REPORT as REPORT } from "@/constants/reports/mlodzi-wyborcy";
import { useReportData } from "@/service/data-service/useReportData";

const MlodziWyborcyPage = (): JSX.Element => {
  const { data, isLoading } = useReportData({ id: REPORT.id });

  return <ReportPage reportConfig={REPORT} reportData={{ data, isLoading }} />;
};

export default MlodziWyborcyPage;
