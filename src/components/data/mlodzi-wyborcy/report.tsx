/* eslint-disable @next/next/no-img-element */
import { PATHS } from "@/constants/paths";
import { CommonReport } from "@/types/report";

export const MLODZI_WYBORCY_REPORT: CommonReport = {
    id: 'mlodzi-wyborcy',
    title: 'Młodzi Wyborcy 2025',
    description: (<>Poglądy młodych Polek i Polaków <u>na&nbsp;najważniejsze sprawy społeczne i polityczne</u>.</>),
    logoUrl: '/assets/mlodzi-wyborcy/mlodzi-wyborcy-logo-light.svg',
    date: "Wrzesień 2025",
    partners: [
        {
            name: 'Young Think',
            logoUrl: '/assets/mlodzi-wyborcy/young-think.png',
            url: 'https://youngthink.pl'
        },
        {
            name: 'Young Think',
            logoUrl: '/assets/mlodzi-wyborcy/young-think.png',
            url: 'https://youngthink.pl'
        },
        {
            name: 'Young Think',
            logoUrl: '/assets/mlodzi-wyborcy/young-think.png',
            url: 'https://youngthink.pl'
        },
        {
            name: 'Young Think',
            logoUrl: '/assets/mlodzi-wyborcy/young-think.png',
            url: 'https://youngthink.pl'
        },
    ],
    footer: [
        {
            icon: <img src="/assets/mlodzi-wyborcy/mlodzi-wyborcy-logo-light.svg" alt="mlodzi wyborcy logo" className="block h-6" />,
            description: "Sonda przeprowadzona została przez myPolitics metodą CAWI w dniach 26.04-26.05.2025 r., na próbie 100 000 osób w wieku 18-29, z zachowaniem proporcji demograficznych."
        },
        {
            icon: <img src="/assets/common/gi-logo-light.svg" alt="mlodzi wyborcy logo" className="block h-6" />,
            description: <>Projekt został zrealizowany w całości przez <a href={PATHS.GI_ORG_PL}>Fundację Generacja Innowacja</a>, operatora portalu myPolitics.</>
        }
    ]
}