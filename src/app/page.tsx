"use client";

import ReportHeader from "@/components/report/ReportHeader";
import { PATHS } from "@/constants/paths";
import { MLODZI_WYBORCY_REPORT as REPORT } from "@/constants/reports/mlodzi-wyborcy";
import { useRouter } from "next-nprogress-bar";
import { useEffect } from "react";

const HomePage = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.push(PATHS.MLODZI_WYBORCY);
  }, [router]);

  return <ReportHeader report={REPORT} />;
};

export default HomePage;
