/* eslint-disable @next/next/no-img-element */
import { CommonReport } from "@/types/report";
import Link from "next/link";

interface Props {
    report: CommonReport;
}

const ReportHeader = ({ report }: Props): JSX.Element => {
    return (
        <div className="flex justify-center border-b border-bluish-gray w-full">
            <header className="w-full max-w-screen-xl mx-6 flex flex-col items-start gap-4 md:gap-8 py-4 md:py-16 text-sea font-bold">
                <img src={report.logoUrl} alt={report.title} title={report.title} className="block h-8 md:h-12" />
                <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                    <div className="max-w-[22rem] leading-[1.5]">
                        {report.description}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="leading-[1.33]">Partnerzy raportu:</h3>
                        <div className="flex gap-4 flex-wrap">
                            {report.partners.map((partner) => (
                                <Link href={partner.url} key={partner.name} target="_blank" rel="noopener noreferrer">
                                    <img className="block h-4" src={partner.logoUrl} alt={partner.name} title={partner.name} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-bluish-gray">
                    {report.date}
                </div>
            </header>
        </div>
    )
}

export default ReportHeader;
