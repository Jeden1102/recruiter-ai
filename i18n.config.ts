export default defineI18nConfig(() => ({
  messages: {
    en: {
      common: {
        getStarted: "Get started",
        logIn: "Log in",
      },
      navigation: {
        home: "Home",
        product: "Product",
        recruiter: "Recruiter",
      },
      footer: {
        navigationTitle: "Navigation",
        aboutTitle: "About",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
      },
      form: {
        url: {
          title: "Enter a URL",
          label: "Job Offer URL",
          placeholder: "Paste job offer URL here",
        },
        cv: {
          title: "Upload your CV",
          label: "Upload CV",
        },
        custom: {
          title: "Enter Custom Details",
          position: {
            label: "Job Position",
            placeholder: "Describe the job position",
          },
          requirements: {
            label: "Requirements",
            placeholder: "List the requirements for the role",
          },
          niceToHave: {
            label: "Nice to Have",
            placeholder: "List skills or experience that are nice to have",
          },
          responsibilities: {
            label: "Responsibilities",
            placeholder: "Describe the responsibilities for this role",
          },
        },
        buttons: {
          previous: "Previous",
          next: "Next",
        },
      },
      settings: {
        general: {
          title: "General Settings",
          questionsDifficulty: {
            label: "Select question difficulty",
            options: {
              easy: {
                title: "Easy",
                description: "Basic questions suitable for beginners",
              },
              intermediate: {
                title: "Intermediate",
                description:
                  "Questions suitable for candidates with some experience",
              },
              advanced: {
                title: "Advanced",
                description: "Challenging questions for experienced candidates",
              },
            },
          },
          prepareAnswers: {
            label: "Prepare answers in advance",
            description: "Enable this option to generate answers in advance.",
          },
          recruitmentTask: {
            label: "Include recruitment task",
            description: "Include a task that assesses the candidate’s skills.",
          },
        },
      },
      home: {
        hero: {
          title: "Discover the power of AI recruitment",
          subtitle:
            "Automate your hiring process and find the best candidates effortlessly",
        },
        features: {
          title: "Features",
          description:
            "Explore the unique features that make Recruiter AI the best solution for your hiring process.",
          details: "More details about the features",
          feature1: {
            title: "CV based questions",
            description:
              "Harness the power of your CV to generate tailored questions. This feature analyzes the contents of your CV to create relevant and personalized queries.",
          },
          feature2: {
            title: "Job offer URL based questions",
            description:
              "Provide a job offer URL and let our system craft questions specific to the role. This ensures that the questions are aligned with the requirements of the job listing.",
          },
          feature3: {
            title: "Custom details based questions",
            description:
              "Input your own settings to generate customized questions. This option allows for flexibility and personalization to meet specific recruitment needs.",
          },
          feature4: {
            title: "Save your questions",
            description:
              "Easily save your generated questions for future reference. This feature ensures you have access to your curated list whenever needed.",
          },
        },
        callToAction: {
          startWith: "Start with",
          poweredTool: "Powered by AI Tool",
          assistantDescription:
            "Make the hiring process more efficient and effective with our AI assistant.",
          decorativeImageAlt: "Decorative background image",
        },
      },
      features: {
        cv_questions_title: "CV Questions",
        cv_questions_description:
          "Get insights into candidates' resumes and experience.",
        url_questions_title: "URL Questions",
        url_questions_description:
          "Assess candidates based on the provided job URL.",
        custom_questions_title: "Custom Questions",
        custom_questions_description:
          "Create personalized questions tailored to your specific hiring needs.",
      },

      questions: {
        method: {
          title: "Select Question Method",
          label: "Choose the method of asking questions",
          types: {
            url: {
              title: "URL Method",
              description: "Ask questions based on a URL you provide",
            },
            cv: {
              title: "CV Method",
              description: "Ask questions based on the candidate's CV",
            },
            custom: {
              title: "Custom Method",
              description: "Ask questions you customize yourself",
            },
          },
        },
      },
      product: {
        title: "Product",
        description:
          "Explore the unique features that make Recruiter AI the best solution for your hiring process.",
      },
      recruiter: {
        title: "Recruiter",
        description:
          "Discover the power of AI recruitment and streamline your hiring process.",
      },
    },
    pl: {
      common: {
        getStarted: "Rozpocznij",
        logIn: "Zaloguj się",
      },
      navigation: {
        home: "Strona główna",
        product: "Produkt",
        recruiter: "Rekruter",
      },
      footer: {
        navigationTitle: "Nawigacja",
        aboutTitle: "O nas",
        terms: "Warunki korzystania",
        privacy: "Polityka prywatności",
      },
      form: {
        url: {
          title: "Wprowadź URL",
          label: "URL oferty pracy",
          placeholder: "Wklej tutaj URL oferty pracy",
        },
        cv: {
          title: "Prześlij swoje CV",
          label: "Prześlij CV",
        },
        custom: {
          title: "Wprowadź szczegóły",
          position: {
            label: "Stanowisko",
            placeholder: "Opisz stanowisko pracy",
          },
          requirements: {
            label: "Wymagania",
            placeholder: "Wymień wymagania na stanowisko",
          },
          niceToHave: {
            label: "Dodatkowe atuty",
            placeholder:
              "Wymień umiejętności lub doświadczenie, które będą dodatkowym atutem",
          },
          responsibilities: {
            label: "Obowiązki",
            placeholder: "Opisz obowiązki na tym stanowisku",
          },
        },
        buttons: {
          previous: "Wstecz",
          next: "Dalej",
        },
      },
      settings: {
        general: {
          title: "Ustawienia ogólne",
          questionsDifficulty: {
            label: "Wybierz trudność pytań",
            options: {
              easy: {
                title: "Łatwe",
                description:
                  "Podstawowe pytania odpowiednie dla początkujących",
              },
              intermediate: {
                title: "Średnie",
                description:
                  "Pytania odpowiednie dla kandydatów z pewnym doświadczeniem",
              },
              advanced: {
                title: "Zaawansowane",
                description: "Trudne pytania dla doświadczonych kandydatów",
              },
            },
          },
          prepareAnswers: {
            label: "Przygotuj odpowiedzi z wyprzedzeniem",
            description:
              "Włącz tę opcję, aby generować odpowiedzi z wyprzedzeniem.",
          },
          recruitmentTask: {
            label: "Dołącz zadanie rekrutacyjne",
            description: "Dołącz zadanie, które oceni umiejętności kandydata.",
          },
        },
      },
      home: {
        hero: {
          title: "Odkryj moc rekrutacji AI",
          subtitle:
            "Zautomatyzuj swój proces rekrutacyjny i znajdź najlepszych kandydatów w łatwy sposób",
        },
        features: {
          title: "Funkcje",
          description:
            "Poznaj unikalne funkcje, które sprawiają, że Recruiter AI jest najlepszym rozwiązaniem w procesie rekrutacyjnym.",
          details: "Więcej szczegółów na temat funkcji",
          feature1: {
            title: "Pytania oparte na CV",
            description:
              "Wykorzystaj moc swojego CV do generowania dopasowanych pytań. Ta funkcja analizuje zawartość Twojego CV, aby tworzyć odpowiednie i spersonalizowane zapytania.",
          },
          feature2: {
            title: "Pytania oparte na URL oferty pracy",
            description:
              "Podaj URL oferty pracy, a nasz system stworzy pytania specyficzne dla danej roli. Dzięki temu pytania będą zgodne z wymaganiami ogłoszenia o pracy.",
          },
          feature3: {
            title: "Pytania oparte na własnych danych",
            description:
              "Wprowadź własne ustawienia, aby generować spersonalizowane pytania. Ta opcja pozwala na elastyczność i personalizację w celu dostosowania do specyficznych potrzeb rekrutacyjnych.",
          },
          feature4: {
            title: "Zapisz swoje pytania",
            description:
              "Łatwo zapisuj wygenerowane pytania do późniejszego wykorzystania. Ta funkcja zapewnia dostęp do zapisanej listy pytań, kiedy tylko będziesz jej potrzebować.",
          },
        },
        callToAction: {
          startWith: "Zacznij z",
          poweredTool: "Zasilane przez narzędzie AI",
          assistantDescription:
            "Uczyń proces rekrutacji bardziej efektywnym i skutecznym dzięki naszemu asystentowi AI.",
          decorativeImageAlt: "Dekoracyjny obrazek tła",
        },
      },
      features: {
        cv_questions_title: "Pytania do CV",
        cv_questions_description:
          "Uzyskaj wgląd w CV kandydatów oraz ich doświadczenie.",
        url_questions_title: "Pytania do URL",
        url_questions_description:
          "Oceń kandydatów na podstawie dostarczonego URL oferty pracy.",
        custom_questions_title: "Pytania niestandardowe",
        custom_questions_description:
          "Twórz spersonalizowane pytania dostosowane do Twoich specyficznych potrzeb rekrutacyjnych.",
      },
      questions: {
        method: {
          title: "Wybierz metodę pytania",
          label: "Wybierz metodę zadawania pytań",
          types: {
            url: {
              title: "Metoda URL",
              description: "Zadaj pytania na podstawie dostarczonego URL",
            },
            cv: {
              title: "Metoda CV",
              description: "Zadaj pytania na podstawie CV kandydata",
            },
            custom: {
              title: "Metoda niestandardowa",
              description: "Zadaj pytania, które dostosujesz samodzielnie",
            },
          },
        },
      },
      product: {
        title: "Produkt",
        description:
          "Odkryj moc rekrutacji AI i zautomatyzuj swoję proces rekrutacyjny.",
      },
      recruiter: {
        title: "Rekruter",
        description:
          "Odkryj moc rekrutacji AI i zautomatyzuj swoją rekrutacje.",
      },
    },
  },
}));
