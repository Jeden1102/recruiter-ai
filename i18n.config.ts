export default defineI18nConfig(() => ({
  messages: {
    en: {
      common: {
        getStarted: "Get started",
        logIn: "Log in",
        generateNew: "Generate new questions",
        generate: "Generate",
        copy: "Copy",
        copied: "Copied",
        share: "Share",
        close: "Close",
        settings: "Settings",
      },
      navigation: {
        home: "Home",
        product: "Product",
        recruiter: "Candidate Tools",
        login: "Login",
        logout: "Logout",
        profile: "Profile",
        account: "Account",
        myAccount: "My account",
        logOut: "Logout",
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
          label: "Upload CV (JPG, PNG)",
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
            label: "Include practice task",
            description: "Include a task to showcase your skills.",
          },
          private: {
            label: "Set as private",
            description:
              "Set this question set as private. Only you can access it, or the users you invite.",
          },
        },
        difficultLevel: {
          title: "Difficult level",
        },
      },
      home: {
        hero: {
          title: "Discover the power of AI for your job search",
          subtitle:
            "Get personalized questions to prepare for interviews effortlessly",
        },
        features: {
          title: "Features",
          description:
            "Explore the unique features that make this tool perfect for candidates.",
          details: "More details about the features",
          feature1: {
            title: "CV based questions",
            description:
              "Generate tailored questions based on your CV to help you prepare effectively.",
          },
          feature2: {
            title: "Job offer URL based questions",
            description:
              "Input a job offer URL and get questions aligned with the role's requirements.",
          },
          feature3: {
            title: "Custom details based questions",
            description:
              "Add custom details to generate personalized questions that suit your needs.",
          },
          feature4: {
            title: "Save your questions",
            description:
              "Save your generated questions for future preparation and easy access.",
          },
        },
        callToAction: {
          startWith: "Start with",
          poweredTool: "Powered by AI Tool",
          assistantDescription:
            "Make your interview preparation efficient and focused with our AI assistant.",
          decorativeImageAlt: "Decorative background image",
          installApp: "Install app",
        },
      },
      features: {
        cv_questions_title: "CV Questions",
        cv_questions_description:
          "Prepare effectively with insights tailored to your resume.",
        url_questions_title: "URL Questions",
        url_questions_description:
          "Get questions based on the provided job description URL.",
        custom_questions_title: "Custom Questions",
        custom_questions_description:
          "Generate questions tailored to your specific preparation needs.",
      },
      jobAnalysis: "Analyzing the job offer",
      jobAnalysisNew: "Generating new questions",
      recruitmentTask: "Practice Task",
      questions: {
        method: {
          title: "Select Question Method",
          label: "Choose how to generate questions",
          types: {
            url: {
              title: "URL Method",
              description: "Generate questions from a job offer URL",
            },
            cv: {
              title: "CV Method",
              description: "Generate questions based on your CV",
            },
            custom: {
              title: "Custom Method",
              description: "Generate personalized questions from custom inputs",
            },
          },
        },
      },
      product: {
        title: "Product",
        description:
          "Explore features that make preparing for job interviews easy and effective.",
      },
      recruiter: {
        title: "Candidate Tools",
        description:
          "Discover how AI can assist you in preparing for your dream job.",
      },
      noAnswer: "No answer",
      auth: {
        login: "Login",
        password: "Password",
        passwordRepeat: "Password repeat",
        register: "Register",
      },
      share: {
        title: "Share or save your results",
        subtitle: "Save a link to your results or share them online",
      },
    },
    pl: {
      common: {
        getStarted: "Rozpocznij",
        logIn: "Zaloguj się",
        generateNew: "Generuj nowe pytania",
        generate: "Generuj",
        copy: "Kopiuj",
        copied: "Skopiowano",
        share: "Udostępnij",
        close: "Zamknij",
        settings: "Ustawienia",
      },
      navigation: {
        home: "Strona główna",
        product: "Produkt",
        recruiter: "Rekruter",
        login: "Zaloguj",
        logout: "Wyloguj",
        profile: "Profil",
        account: "Konto",
        myAccount: "Moje konto",
        logOut: "Wyloguj",
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
          private: {
            label: "Ustaw jako prywatne",
            description:
              "Ustaw jako prywatne, jeśli chcesz, by dostęp do utworzonych pytań byl tylko dla Ciebie i dla opcjonalnie dodanych emailow",
          },
        },
        difficultLevel: {
          title: "Poziom trudności",
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
          installApp: "Zainstaluj aplikacje",
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
      auth: {
        login: "Zaloguj się",
        password: "Hasło",
        passwordRepeat: "Powtórz hasło",
        register: "Zarejestruj się",
      },
      share: {
        title: "Udostępnij lub zapisz wyniki",
        subtitle:
          "Zapisz link do wyniku lub udostępnij w mediach społecznościowych",
      },
    },
  },
}));
