export interface ReportPartner {
    name: string;
    logoUrl: string;
    url: string;
}

export interface ReportFooterSection {
    icon?: JSX.Element;
    description: string | JSX.Element;
}

export interface CommonReport {
    id: string;
    title: string;
    description: string | JSX.Element;
    logoUrl: string;
    date: string;
    partners: ReportPartner[];
    footer: ReportFooterSection[];
}