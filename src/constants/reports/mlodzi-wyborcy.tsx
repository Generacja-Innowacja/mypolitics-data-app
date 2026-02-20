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
  date: "Styczeń 2026",
  partners: [
    {
      name: "Ad Personam",
      logoUrl: "/assets/mlodzi-wyborcy/ad-personam.png",
      url: "https://ad.personam.pl/",
    },
    {
      name: "Fundacja IBRiS",
      logoUrl: "/assets/mlodzi-wyborcy/ibris.png",
      url: "https://ibris.pl/",
    },
    {
      name: "Fundacja Venator",
      logoUrl: "/assets/mlodzi-wyborcy/fundacja-venator.png",
      url: "https://fundacjavenator.pl/",
    },
    {
      name: "Stowarzyszenie Pravda",
      logoUrl: "/assets/mlodzi-wyborcy/stowarzyszenie-pravda.png",
      url: "https://pravda.org.pl/",
    },
    {
      name: "ORB",
      logoUrl: "/assets/mlodzi-wyborcy/orb.png",
      url: "https://www.youtube.com/@ORB_NEWS",
    },
    {
      name: "PRZEkanał",
      logoUrl: "/assets/mlodzi-wyborcy/PRZEkanal.png",
      url: "https://www.youtube.com/@przekanal",
    },
    {
      name: "politologia.org",
      logoUrl: "/assets/mlodzi-wyborcy/politologia-org.png",
      url: "https://politologia.org",
    },
    {
      name: "Stowarzyszenie Racja",
      logoUrl: "/assets/mlodzi-wyborcy/stowarzyszenie-racja.png",
      url: "https://stowarzyszenieracja.pl/",
    },
    {
      name: "Mlode Kresy",
      logoUrl: "/assets/mlodzi-wyborcy/mlode-kresy.png",
      url: "https://mlodekresy.pl/",
    },
    {
      name: "Kadeci RP",
      logoUrl: "/assets/mlodzi-wyborcy/kadeci-rp.png",
      url: "https://kadecirp.pl/",
    },
    {
      name: "Young Think",
      logoUrl: "/assets/mlodzi-wyborcy/young-think.png",
      url: "https://youngthink.pl",
    },
    {
      name: "android.com.pl",
      logoUrl: "/assets/mlodzi-wyborcy/android-com-pl.png",
      url: "https://android.com.pl/",
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
      title: "Liderzy",
      isMainGroup: true,
      authors: [
        {
          name: "Adrian Orłów",
          position: "Koordynator projektu",
          photoUrl: "/assets/people/adrian-orlow.png",
          description:
            "Założyciel portalu myPolitics i Fundacji Generacja Innowacja. Główny koordynator raportu #MłodziWyborcy2025, odpowiedzialny za kształt badania i analizę danych.",
          socials: {
            linkedIn: "https://www.linkedin.com/in/adrianorlow/",
            twitterX: "https://x.com/adrianorlow",
          },
        },
      ],
    },
    {
      title: "Merytoryka",
      authors: [
        {
          name: "Maciej Jankowski",
          position: "Head of Knowledge, analityk ds. politycznych",
          photoUrl: "/assets/people/maciej-jankowski.png",
          description:
            "Head of Knowledge w Generacja Innowacja. Programista, specjalista ds. AI/ML. Analityk wykorzystujący narzędzia sztucznej inteligencji do analizy politycznej.",
          socials: {
            twitterX: "https://x.com/m_jankowski___",
          },
        },
        {
          name: "Rafał Kozłowski",
          position: "Head of Marketing, analityk ds. politycznych",
          photoUrl: "/assets/people/rafal-kozlowski.png",
          description:
            "Politolog, Head of Marketing w fundacji Generacja Innowacja. Ekspert ds. budowania wizerunku organizacji i marketingu politycznego. Społecznik realizujący misję budowania świadomości politycznej w przestrzeni medialnej. Członek licznych organizacji społecznych i NGO'sów.",
          socials: {
            linkedIn: "www.linkedin.com/in/rafał-kozłowski-a56a54209",
            twitterX: "https://x.com/r_w_kozlowski?s=21",
          },
        },
        {
          name: "Damian Chmielewski",
          position: "Analityk ds. politycznych i projektant grafiki",
          photoUrl: "/assets/people/damian-chmielewski.png",
          description:
            "Projektant grafiki w trakcie studiów magisterskich z prawa podatkowego, świeżo po licencjacie z prawa europejskiego. Zaangażowany w liczne projekty społeczne, w tym jako współzałożyciel stowarzyszenia polskich studentów w holenderskim Maastricht. Miłośnik Warszawy, literatury kryminalnej i pizzy neapolitańskiej.",
          socials: {
            linkedIn: "https://nl.linkedin.com/in/chhdamian",
          },
        },
        {
          name: "Maksymilian Mirecki",
          position: "Analityk ds. politycznych",
          photoUrl: "/assets/people/maksymilian-mirecki.png",
          description:
            "Dyrektor Programowy w Our Future Foundation oraz członek inicjatywy Young Think. W myPolitics odpowiadał za kwestie merytoryczne przy przygotowywaniu quizu wyborczego. Absolwent stosunków międzynarodowych na Uniwersytecie Warszawskim, obecnie student prawa i międzynarodowych stosunków gospodarczych.",
          socials: {
            linkedIn:
              "https://www.linkedin.com/in/maksymilian-mirecki-ab8126274",
          },
        },
        {
          name: "Aleksander Hycnar",
          position: "Analityk ds. politycznych",
          photoUrl: "/assets/people/aleksander-hycnar.png",
          description:
            "Student trzeciego roku ekonomii i socjologii na Sciences Po Paris oraz University of Chicago. Stypendysta Fundacji Rafała Brzoski i współzałożyciel think tanku Young Think. Specjalizuje się w makroekonomii i handlu międzynarodowym. Zdobył doświadczenie zawodowe w Departamencie Polityki Pieniężnej Banku Centralnego Armenii oraz Graduate Institute of International and Development Studies w Genewie.",
          socials: {
            linkedIn: "https://www.linkedin.com/in/aleksander-hycnar/",
          },
        },
        {
          name: "Katarzyna Kucharzyk",
          position: "Analityczka ds. politycznych",
          photoUrl: "/assets/people/katarzyna-kucharczyk.png",
          description:
            "Pasjonatka polityki. Entuzjastka działań na rzecz rozwoju świadomego społeczeństwa obywatelskiego i otwartego dialogu publicznego. Prywatnie UX/UI designerka.",
          socials: {
            linkedIn: "https://www.linkedin.com/in/k-kucharzyk",
          },
        },
      ],
    },
    {
      title: "Technologia",
      authors: [
        {
          name: "Oskar Barcz",
          position: "Head of Engineering",
          photoUrl: "/assets/people/oskar-barcz.png",
          description:
            "Wiceprezes Zarządu Fundacji, lider zespołów technicznych i architekt oprogramowania, który z pasją łączy świat komercyjnych innowacji z technologią w służbie społeczeństwu. Podczas tworzenia nowej platformy przetwarzania danych myPolitics zarządzał i mentorował 60-osobowy zespół wolontariuszy. Wykreował strategię technologiczną produktu i nadzorował realizację rozwiązań serwerowych.",
          socials: {
            github: "https://github.com/oskarbarcz",
            linkedIn: "https://www.linkedin.com/in/oskarbarcz/",
          },
        },
        {
          name: "Adam Derkacz",
          position: "Front-End Developer",
          photoUrl: "/assets/people/adam-derkacz.png",
          description:
            "Front-end developer. Jest wolontariuszem od kwietnia 2025. Jego zainteresowania to kompozycja/produkcja muzyki oraz montaż wideo.",
          socials: {},
        },
        {
          name: "Daniel Kłoda",
          position: "Back-End Developer",
          photoUrl: "/assets/people/daniel-kloda.png",
          description:
            "Back-end developer i koordynator praktyk, który kocha muzykę oraz z pasją zanurza się w filmy, seriale i gry. Łączy techniczną precyzję z kreatywnymi inspiracjami.",
          socials: {
            linkedIn: "https://www.linkedin.com/in/daniel-k%C5%82oda-683423258",
          },
        },

        {
          name: "Kamil Naskręt",
          position: "Front-End Developer",
          photoUrl: "/assets/people/kamil-naskret.png",
          description: "",
          socials: {},
        },
        {
          name: "Łukasz Głaz",
          position: "Front-End Developer",
          photoUrl: "/assets/people/lukasz-glaz.png",
          description:
            "Front-end developer z doświadczeniem w tworzeniu responsywnych stron i aplikacji internetowych. Tworzy nowoczesne interfejsy, łącząc estetykę z funkcjonalnością. Skupia się na dostarczaniu rozwiązań, które realnie wspierają użytkowników i rozwój projektów.",
          socials: {},
        },
        {
          name: "Patryk Prewendowski",
          position: "Head of Delivery",
          photoUrl: "/assets/people/patryk-prewendowski.png",
          description:
            "Matematyk, inżynier oprogramowania, Head of Delivery w Fundacji Generacja Innowacja. Odpowiada za koordynację prac: zarządza zadaniami, wspiera wolontariuszy w ich wykonywaniu, opiekuje się praktykantami i nadzoruje ich działania, stanowi łącznik pomiędzy zespołami technicznymi, designerami i właścicielami produktów.",
          socials: {
            github: "https://github.com/prewendowski",
            linkedIn: "https://www.linkedin.com/in/prewendowski",
          },
        },
      ],
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
      title: "Materiały prasowe",
      description: (
        <>
          Zbiór materiałów graficznych gotowych do użycia w ramach publikacji
          prasowych.
        </>
      ),
      file: {
        downloadText: "Folder",
        downloadUrl:
          "https://drive.google.com/drive/folders/15nl4_UH4GXKp1V3V8hEO1reNM35e91dG",
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
  publications: [
    {
      organisation: "Nie wiem ale się dowiem",
      title: "Dlaczego nikt już nie rozumie młodych Polaków?",
      url: "https://youtu.be/o1SX9mIXVk4",
      logo: "/assets/reports/media-logo/logo_nwasd.png",
    },
    {
      organisation: "Szymon Mówi",
      title: "Politycy mają młodych Polaków w ԁ...",
      url: "https://youtu.be/TeeJK9znnqc",
      logo: "/assets/reports/media-logo/logo_szymon-mowi.png",
    },
    {
      organisation: "myPolitics",
      title: "Kod do demokracji: Co mówią nam dane myPolitics?",
      url: "https://www.youtube.com/watch?v=Cs5ah9WAhC8",
      logo: "/assets/reports/media-logo/logo_mypolitics.png",
    },
    {
      organisation: "Android.com.pl",
      title: "„Zetki” sprawiają sprawę jasno. Nowy raport pokazuje, że wcale nie chodzi o bunt",
      url: "https://android.com.pl/finanse/1009483-raport-mlodzi-wyborcy-25-raport/",
      logo: "/assets/reports/media-logo/logo_android-com.png",
      background: "/assets/reports/media-bg/bg_zetki-sprawiaja-sprawe-jasno-nowy-raport-pokazuje-ze-wcale-nie-chodzi-o-bunt.png"
    },
    {
      organisation: "XYZ",
      title: "Triumf kandydata „nie wiem”. Jak głosują młodzi?",
      url: "https://xyz.pl/triumf-kandydata-nie-wiem-jak-glosuja-mlodzi/",
      logo: "/assets/reports/media-logo/logo_xyz.png",
      background: "/assets/reports/media-bg/bg_triumf-kandydata-nie-wiem-jak-glosuja-mlodzi.png"
    },
    {
      organisation: "myPolitics",
      title: "Wojna o prawdę: co realnie zagraża młodemu pokoleniu?",
      url: "https://www.youtube.com/watch?v=ujW0aS0TCp4",
      logo: "/assets/reports/media-logo/logo_mypolitics.png",
    },
    {
      organisation: "Do Rzeczy",
      title: "Analiza myPolitics ujawnia zaskakujące rozjazdy wyborcze",
      url: "https://dorzeczy.pl/strefa-partnerow/727470/analiza-mypolitics-ujawnia-zaskakujace-rozjazdy-wyborcze.html",
      logo: "/assets/reports/media-logo/logo_do-rzeczy.png",
    },
    {
      organisation: "Obserwator Gospodarczy",
      title: "Przyjęcie euro przez Polskę? Młodzi są stanowczo na nie!",
      url: "https://obserwatorgospodarczy.pl/2025/05/31/przyjecie-euro-przez-polske-mlodzi-sa-stanowczo-na-nie/",
      logo: "/assets/reports/media-logo/logo_obserwator-gospodarczy.png",
      background: "assets/reports/media-bg/bg_przyjecie-euro-przez-polske-mlodzi-sa-stanowczo-na-nie.png"
    },
    {
      organisation: "myPolitics",
      title: "Ewolucja wartości i kierunki zmian poglądów młodych wyborców",
      url: "https://www.youtube.com/watch?v=Fkq1XyGjH3E",
      logo: "/assets/reports/media-logo/logo_mypolitics.png",
    },
    {
      organisation: "Gazeta Kongresy",
      title: "Czym kierowali się młodzi wyborcy w 2025 roku?",
      url: "https://www.gazetakongresy.pl/czym-kierowali-sie-mlodzi-wyborcy-w-2025-roku-raport/",
      logo: "/assets/reports/media-logo/logo_gazeta-kongresy.png",
      background: "/assets/reports/media-bg/bg_czym-kierowali-sie-mlodzi-wyborcy-w-2025-roku.png"
    },
    {
      organisation: "Radio Warszawa",
      title: "Raport „Młodzi Wyborcy 2025”: pragmatyzm, bezpieczeństwo i zaskakujące podziały",
      url: "https://mcdn.podbean.com/mf/web/7eezqapc8f88xaqu/goscrw_2026_01_13.mp3",
      logo: "/assets/reports/media-logo/logo_radio-warszawa.png",
    },
  ],

};
