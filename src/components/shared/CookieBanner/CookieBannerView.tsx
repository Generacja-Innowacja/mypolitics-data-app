"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "./cookie-banner.css";

import "vanilla-cookieconsent/dist/cookieconsent.css";

export const CookieBanner: React.FC = () => {
  const updateGTMConsent = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      const statisticsAccepted = CookieConsent.acceptedCategory("statistics");
      const marketingAccepted = CookieConsent.acceptedCategory("marketing");
      const preferencesAccepted = CookieConsent.acceptedCategory("preferences");

      window.dataLayer.push([
        "consent",
        "update",
        {
          ad_storage: marketingAccepted ? "granted" : "denied",
          ad_user_data: marketingAccepted ? "granted" : "denied",
          ad_personalization: marketingAccepted ? "granted" : "denied",
          analytics_storage: statisticsAccepted ? "granted" : "denied",
          functionality_storage: preferencesAccepted ? "granted" : "denied",
          personalization_storage: preferencesAccepted ? "granted" : "denied",
          security_storage: "granted",
        },
      ]);
    }
  };

  useEffect(() => {
    CookieConsent.run({
      disablePageInteraction: true,

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        preferences: {
          enabled: true,
          readOnly: false,
        },
        statistics: {
          enabled: true,
          readOnly: false,

          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
              {
                name: "_gid",
              },
            ],
          },
        },
        marketing: {
          enabled: true,
          readOnly: false,
        },
      },

      language: {
        default: "pl",

        translations: {
          pl: {
            consentModal: {
              title: "Pliki cookie",
              description:
                'Używamy plików cookie, aby poprawić Twoje doświadczenia na stronie. Do zbierania danych statystycznych wykorzystujemy Google Analytics 4 (GA4) przez Google Tag Manager (GTM). Przeczytaj więcej w naszej <a href="https://mypolitics.pl/privacy.pdf">Polityce plików cookie</a>.',
              acceptAllBtn: "Zaakceptuj wszystkie",
              acceptNecessaryBtn: "Odrzuć wszystkie",
              showPreferencesBtn: "Zarządzaj preferencjami",
            },
            preferencesModal: {
              title: "Twoje preferencje dotyczące plików cookie",
              acceptAllBtn: "Zaakceptuj wszystkie",
              acceptNecessaryBtn: "Odrzuć wszystkie",
              savePreferencesBtn: "Zaakceptuj bieżący wybór",
              closeIconLabel: "Zamknij",
              sections: [
                {
                  description:
                    'Pliki cookie to pliki tekstowe umieszczane na Twoim urządzeniu przez odwiedzane strony internetowe lub poprzez kliknięcie linku do strony w wiadomości e-mail. Służą do zapewnienia funkcjonalności strony oraz dostarczania informacji właścicielom witryn. Więcej informacji oraz możliwość zmiany preferencji dotyczących plików cookie znajdziesz w naszej <a href="https://mypolitics.pl/privacy.pdf">Polityce plików cookie</a>.',
                },
                {
                  title: "Niezbędne",
                  description:
                    "Te pliki cookie są niezbędne do prawidłowego funkcjonowania i bezpieczeństwa strony i nie można ich wyłączyć.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Preferencje",
                  description:
                    "Pliki cookie preferencji służą do zapamiętywania wyborów użytkownika, które wpływają na wygląd lub zachowanie strony.",
                  linkedCategory: "preferences",
                },
                {
                  title: "Statystyki",
                  description:
                    "Pliki cookie statystyczne pomagają nam zrozumieć, w jaki sposób odwiedzający korzystają z naszej strony, zbierając i raportując informacje w sposób anonimowy. Używamy Google Analytics 4 (GA4) i Google Tag Manager (GTM) do zbierania tych danych.",
                  linkedCategory: "statistics",
                },
                {
                  title: "Marketing",
                  description:
                    "Pliki cookie marketingowe służą do śledzenia odwiedzających na różnych stronach internetowych. Ich celem jest wyświetlanie reklam, które są trafne i angażujące dla konkretnego użytkownika.",
                  linkedCategory: "marketing",
                },
              ],
            },
          },
        },
      },

      guiOptions: {
        consentModal: {
          layout: "box wide",
          position: "middle center",
          flipButtons: true,
          equalWeightButtons: false,
        },
        preferencesModal: {
          layout: "box",
          flipButtons: false,
          equalWeightButtons: true,
        },
      },

      onConsent: function () {
        updateGTMConsent();
      },

      onChange: function () {
        updateGTMConsent();
      },
    });

    setTimeout(() => {
      if (
        CookieConsent.acceptedCategory("statistics") ||
        CookieConsent.acceptedCategory("marketing") ||
        CookieConsent.acceptedCategory("preferences")
      ) {
        updateGTMConsent();
      }
    }, 100);
  }, []);

  return null;
};
