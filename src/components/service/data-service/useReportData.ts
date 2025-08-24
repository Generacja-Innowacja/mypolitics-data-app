import { REPORT_DATA_URL } from "@/constants/data";
import { ReportData, reportDataModel } from "@/types/models/reportData";
import { useCallback, useEffect, useState } from "react";

interface Args {
  id: string;
}

interface Output {
  isLoading: boolean;
  data?: ReportData;
}

export const useReportData = ({ id }: Args): Output => {
  const [data, setData] = useState<ReportData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(REPORT_DATA_URL(id)).finally(() => setIsLoading(false));
    if (!response.ok) {
      throw new Error(`Error fetching report data: ${response.statusText}`);
    }

    const reportDataJson = await response.json();
    const reportData = reportDataModel.parse(reportDataJson);

    setData(reportData);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading
  }
}