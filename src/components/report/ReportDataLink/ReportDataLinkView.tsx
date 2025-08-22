import { DownloadIcon } from "@/assets/icons/DownloadIcon";
import { PhoneIcon } from "@/assets/icons/PhoneIcon";
import Button from "@/components/shared/Button";
import { PATHS } from "@/constants/paths";
import { ReportDataLink as ReportDataLinkType } from "@/types/report";
import Link from "next/link";

interface Props {
    dataLink: ReportDataLinkType;
}

const ReportDataLink = ({ dataLink }: Props): JSX.Element => {
    const fileButton = dataLink.file && (
        <Link href={dataLink.file.downloadUrl} className="flex flex-shrink-0" target="_blank" rel="noopener noreferrer" passHref>
            <Button tag="anchor">
                <DownloadIcon />
                <span>{dataLink.file.extension.toUpperCase()} <span className="opacity-75 font-light">({dataLink.file.sizeMB}MB)</span></span>
            </Button>
        </Link>
    )

    const fallbackButton = (
        <Link href={PATHS.GI_ORG_PL} className="flex flex-shrink-0" target="_blank" rel="noopener noreferrer" passHref>
            <Button tag="anchor">
                <PhoneIcon />
                <span>gi.org.pl</span>
            </Button>
        </Link>
    )

    return (
        <div className="flex gap-8 flex-col md:flex-row md:justify-between bg-white rounded-[32px] p-6 border border-dark-sea-storm/10">
            <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold">{dataLink.title}</h2>
                <p className="font-light leading-6">{dataLink.description}</p>
            </div>
            {fileButton || fallbackButton}
        </div>
    )
}

export default ReportDataLink;
