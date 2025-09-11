export interface ReportPartner {
  name: string;
  logoUrl: string;
  url: string;
}

export interface ReportFooterSection {
  icon?: JSX.Element;
  description: string | JSX.Element;
}

export interface ReportAuthor {
  name: string;
  position: string;
  photoUrl: string;
  description?: string | JSX.Element;
  socials: {
    linkedIn?: string;
    twitterX?: string;
    github?: string;
  };
}

export interface ReportAuthorGroup {
  title: string;
  authors: ReportAuthor[];
  isMainGroup?: boolean;
}

export interface ReportDataLink {
  title: string;
  description: string | JSX.Element;
  file?: {
    extension: string;
    sizeMB: number;
    downloadUrl: string;
  };
}

export interface CommonReport {
  id: string;
  title: string;
  description: string | JSX.Element;
  logoUrl: string;
  date: string;
  partners: ReportPartner[];
  footer: ReportFooterSection[];
  authors: ReportAuthorGroup[];
  dataLinks: ReportDataLink[];
}
