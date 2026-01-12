"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "./cookie-banner.css";

import "vanilla-cookieconsent/dist/cookieconsent.css";

export const CookieBanner: React.FC = () => {
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
                'Używamy plików cookie, aby poprawić Twoje doświadczenia na stronie. Przeczytaj więcej w naszej <a href="/legal/cookie-policy">Polityce plików cookie</a>.',
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
                    'Pliki cookie to pliki tekstowe umieszczane na Twoim urządzeniu przez odwiedzane strony internetowe lub poprzez kliknięcie linku do strony w wiadomości e-mail. Służą do zapewnienia funkcjonalności strony oraz dostarczania informacji właścicielom witryn. Więcej informacji oraz możliwość zmiany preferencji dotyczących plików cookie znajdziesz w naszej <a href="/legal/cookie-policy">Polityce plików cookie</a>.',
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
                    "Pliki cookie statystyczne pomagają nam zrozumieć, w jaki sposób odwiedzający korzystają z naszej strony, zbierając i raportując informacje w sposób anonimowy.",
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

      onConsent: function () {},
    });
  }, []);

  return null;
};
