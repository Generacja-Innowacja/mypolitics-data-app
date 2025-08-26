/* eslint-disable @next/next/no-img-element */
import { PATHS } from "@/constants/paths";
import { CommonReport } from "@/types/report";

export const MLODZI_WYBORCY_REPORT: CommonReport = {
  id: "mlodzi-wyborcy",
  title: "Młodzi Wyborcy 2025",
  description: (
    <>
      Poglądy młodych Polek i Polaków{" "}
      <u>na&nbsp;najważniejsze sprawy społeczne i polityczne</u>.
    </>
  ),
  logoUrl: "/assets/mlodzi-wyborcy/mlodzi-wyborcy-logo-light.svg",
  date: "Wrzesień 2025",
  partners: [
    {
      name: "Young Think",
      logoUrl: "/assets/mlodzi-wyborcy/young-think.png",
      url: "https://youngthink.pl",
    },
    {
      name: "Young Think",
      logoUrl: "/assets/mlodzi-wyborcy/young-think.png",
      url: "https://youngthink.pl",
    },
    {
      name: "Young Think",
      logoUrl: "/assets/mlodzi-wyborcy/young-think.png",
      url: "https://youngthink.pl",
    },
    {
      name: "Young Think",
      logoUrl: "/assets/mlodzi-wyborcy/young-think.png",
      url: "https://youngthink.pl",
    },
  ],
  footer: [
    {
      icon: (
        <img
          src="/assets/mlodzi-wyborcy/mlodzi-wyborcy-logo-light.svg"
          alt="mlodzi wyborcy logo"
          className="block h-6"
        />
      ),
      description:
        "Sonda przeprowadzona została przez myPolitics metodą CAWI w dniach 26.04-26.05.2025 r., na próbie 100 000 osób w wieku 18-29, z zachowaniem proporcji demograficznych.",
    },
    {
      icon: (
        <img
          src="/assets/common/gi-logo-light.svg"
          alt="mlodzi wyborcy logo"
          className="block h-6"
        />
      ),
      description: (
        <>
          Projekt został zrealizowany w całości przez{" "}
          <a href={PATHS.GI_ORG_PL}>Fundację Generacja Innowacja</a>, operatora
          portalu myPolitics.
        </>
      ),
    },
  ],
  authors: [
    {
      name: "Adrian Orłów",
      position: "Założyciel myPolitics",
      photoUrl: "/assets/people/adrian-orlow.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.",
      socials: {
        linkedIn: "https://www.linkedin.com/in/adrianorlow/",
        twitterX: "https://x.com/adrianorlow",
      },
    },
    {
      name: "Adrian Orłów",
      position: "Założyciel myPolitics",
      photoUrl: "/assets/people/adrian-orlow.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.",
      socials: {},
    },
    {
      name: "Adrian Orłów",
      position: "Założyciel myPolitics",
      photoUrl: "/assets/people/adrian-orlow.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.",
      socials: {},
    },
  ],
  dataLinks: [
    {
      title: "Charakterystyka próby",
      description: "Opis metody badawczej i rozkładu cech respondentów.",
      file: {
        extension: "pdf",
        sizeMB: 1,
        downloadUrl:
          "https://drive.google.com/file/d/1Vsl-4Gg2Id--BE8qhWpdXph2LmNCnBCZ/view?usp=sharing",
      },
    },
    {
      title: "Dane przeanalizowane",
      description: (
        <>
          Zbiór wszystkich <b className="font-bold">76</b> pytań i stosunku
          odpowiedzi respondentów.
        </>
      ),
      file: {
        extension: "xlsx",
        sizeMB: 1,
        downloadUrl:
          "https://docs.google.com/spreadsheets/d/1eMOmkCnj4sKmtM1vvVCiWswsOqD-9R8odbhk9ZSYCpQ/edit?usp=sharing",
      },
    },
    {
      title: "Próbka danych",
      description: (
        <>
          Zbiór losowo dobranych <b className="font-bold">5 000</b>{" "}
          kwestionariuszy uwzględniających odpowiedzi respondentów na wszystkie
          pytania, a także metryczkę.
        </>
      ),
      file: {
        extension: "csv",
        sizeMB: 8,
        downloadUrl:
          "https://drive.google.com/file/d/1cntF3uabnsVAQu2AthlyWVIGueap6RsO/view?usp=sharing",
      },
    },
    {
      title: "Pełny zbiór",
      description: (
        <>
          Zbiór wszystkich <b className="font-bold">350 000</b> kwestionariuszy
          z metryczką. Dostęp do tych danych jest możliwy wyłącznie po uprzednim
          skontaktowaniu się z nami i właściwym uzasadnieniu prośby.
          <br />
          <br />
          Udostępniamy pełny zbiór danych jedynie w przypadku gdy cel
          pozyskującego jest zgodny z wartościami portalu myPolitics.
        </>
      ),
    },
  ],
};
