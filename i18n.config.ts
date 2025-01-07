export default defineI18nConfig(() => ({
  messages: {
    en: {
      common: {
        getStarted: "Get started",
        logIn: "Log in",
        generateNew: "Generate new questions",
        generate: "Generate",
      },
      navigation: {
        home: "Home",
        product: "Product",
        recruiter: "Recruiter",
        login: "Login",
        logout: "Logout",
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
      jobAnalysis: "Job offer is being analyzed",
      jobAnalysisNew: "New questions are being generated",
      recruitmentTask: "Recruitment Task",
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
      noAnswer: "No answer",
    },
    pl: {
      common: {
        getStarted: "Rozpocznij",
        logIn: "Zaloguj się",
        generateNew: "Generuj nowe pytania",
        generate: "Generuj",
      },
      navigation: {
        home: "Strona główna",
        product: "Produkt",
        recruiter: "Rekruter",
        login: "Zaloguj",
        logout: "Wyloguj",
      },
      jobAnalysis: "Trwa analiza oferty pracy",
      jobAnalysisNew: "Generowane są nowe pytania",
      noAnswer: "Brak odpowiedzi",
      footer: {
        navigationTitle: "Nawigacja",
        aboutTitle: "O nas",
        terms: "Regulamin",
        privacy: "Polityka prywatności",
      },
      recruitmentTask: "Zadanie rekrutacyjne",
      form: {
        url: {
          title: "Podaj adres URL",
          label: "URL oferty pracy",
          placeholder: "Wklej tutaj adres URL oferty pracy",
        },
        cv: {
          title: "Prześlij swoje CV",
          label: "Dodaj CV",
        },
        custom: {
          title: "Dodaj szczegóły",
          position: {
            label: "Stanowisko",
            placeholder: "Opisz stanowisko pracy",
          },
          requirements: {
            label: "Wymagania",
            placeholder: "Wymień wymagania na to stanowisko",
          },
          niceToHave: {
            label: "Mile widziane",
            placeholder:
              "Wymień umiejętności lub doświadczenie, które będą dodatkowym atutem",
          },
          responsibilities: {
            label: "Obowiązki",
            placeholder: "Opisz obowiązki na tym stanowisku",
          },
        },
        buttons: {
          previous: "Cofnij",
          next: "Dalej",
        },
      },
      settings: {
        general: {
          title: "Ustawienia ogólne",
          questionsDifficulty: {
            label: "Wybierz poziom trudności pytań",
            options: {
              easy: {
                title: "Łatwy",
                description:
                  "Podstawowe pytania odpowiednie dla początkujących kandydatów",
              },
              intermediate: {
                title: "Średni",
                description:
                  "Pytania odpowiednie dla kandydatów z pewnym doświadczeniem",
              },
              advanced: {
                title: "Zaawansowany",
                description: "Trudne pytania dla doświadczonych kandydatów",
              },
            },
          },
          prepareAnswers: {
            label: "Przygotuj odpowiedzi wcześniej",
            description:
              "Włącz tę opcję, aby wygenerować odpowiedzi z wyprzedzeniem.",
          },
          recruitmentTask: {
            label: "Dodaj zadanie rekrutacyjne",
            description:
              "Dołącz zadanie, które pozwoli ocenić umiejętności kandydata.",
          },
        },
      },
      home: {
        hero: {
          title: "Poznaj możliwości rekrutacji z AI",
          subtitle: "Zautomatyzuj proces rekrutacji i znajdź wymarzoną pracę",
        },
        features: {
          title: "Funkcje",
          description:
            "Sprawdź, co wyróżnia Recruiter AI na tle innych rozwiązań rekrutacyjnych.",
          details: "Szczegóły funkcji",
          feature1: {
            title: "Pytania na podstawie CV",
            description:
              "Wykorzystaj zawartość CV do tworzenia spersonalizowanych pytań, dostosowanych do Twojego profilu.",
          },
          feature2: {
            title: "Pytania na podstawie URL oferty pracy",
            description:
              "Podaj URL ogłoszenia, a system automatycznie wygeneruje pytania dopasowane do wymagań stanowiska.",
          },
          feature3: {
            title: "Pytania na podstawie własnych danych",
            description:
              "Skonfiguruj własne ustawienia i generuj pytania idealnie dopasowane do potrzeb rekrutacyjnych.",
          },
          feature4: {
            title: "Zapisuj pytania",
            description:
              "Zapisz wygenerowane pytania, aby móc do nich wrócić w dowolnym momencie.",
          },
        },
        callToAction: {
          startWith: "Rozpocznij z",
          poweredTool: "Narzędzie wspierane przez AI",
          assistantDescription:
            "Usprawnij i przyspiesz proces rekrutacyjny dzięki naszemu asystentowi AI.",
          decorativeImageAlt: "Dekoracyjna grafika w tle",
        },
      },
      features: {
        cv_questions_title: "Pytania oparte na CV",
        cv_questions_description:
          "Przeanalizuj CV kandydatów i ich doświadczenie zawodowe.",
        url_questions_title: "Pytania na podstawie URL",
        url_questions_description:
          "Oceń kandydatów na podstawie wymagań w ogłoszeniu o pracę.",
        custom_questions_title: "Pytania niestandardowe",
        custom_questions_description:
          "Twórz pytania dopasowane do specyficznych wymagań rekrutacji.",
      },
      questions: {
        method: {
          title: "Wybierz sposób zadawania pytań",
          label: "Wybierz metodę pytań",
          types: {
            url: {
              title: "Na podstawie URL",
              description:
                "Generuj pytania na podstawie podanego URL ogłoszenia o pracę",
            },
            cv: {
              title: "Na podstawie CV",
              description: "Generuj pytania na podstawie Twojego CV",
            },
            custom: {
              title: "Własne pytania",
              description: "Twórz pytania na podstawie własnych danych",
            },
          },
        },
      },
      product: {
        title: "Produkt",
        description:
          "Poznaj funkcje, które usprawniają proces rekrutacji z pomocą AI.",
      },
      recruiter: {
        title: "Rekruter",
        description:
          "Odkryj nowoczesne rozwiązania rekrutacyjne wspierane przez AI.",
      },
    },
  },
}));
