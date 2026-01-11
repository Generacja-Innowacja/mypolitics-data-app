import { Metadata } from "next";

export const SITE_METADATA: Metadata = {
  title: "Młodzi Wyborcy 2025 | myPolitics Data",
  description:
    "Poglądy młodych Polek i Polaków na najważniejsze sprawy społeczne i polityczne.",
  keywords: ["badanie", "raport", "mlodzi", "wyborcy"],
  creator: "Generacja Innowacja",
  openGraph: {
    type: "website",
    url: "https://data.mypolitics.pl/",
    title: "Młodzi Wyborcy 2025 | myPolitics Data",
    description:
      "Poglądy młodych Polek i Polaków na najważniejsze sprawy społeczne i polityczne.",
    siteName: "myPolitics Data",
    images: [
      {
        url: "https://data.mypolitics.pl/thumbnail.png",
      },
    ],
  },
};
