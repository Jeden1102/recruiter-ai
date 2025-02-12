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
        additional: "Additional",
        action: "Action",
        preview: "Preview",
        title: "Title",
        created: "Created",
        type: "Type",
        searchByTitle: "Search by title",
        noResults: "No results",
        previous: "Previous",
        next: "Next",
        author: "Author",
        level: "Level",
        status: "Status",
        profile: "Profile",
        dateCreated: "Date created",
        saveChanges: "Save changes",
        tryAgain: "Try again",
        newChat: "New chat",
        selectLanguage: "Select language...",
        nothingFound: "Nothing found",
      },
      status: {
        public: {
          title: "Public",
          description: "Anyone can access this question set.",
        },
        restricted: {
          title: "Restricted",
          description: "Only the author and authorized users can access it.",
        },
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
        createdBy: "Recruiter AI created by",
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
          authorizedEmails: {
            label: "Authorized emails",
            description: "Type the email and press enter",
          },
        },
        difficultLevel: {
          title: "Difficult level",
        },
      },
      home: {
        meta: {
          title: "Home",
          description:
            "Get personalized questions to prepare for interviews effortlessly",
        },
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
      login: {
        meta: {
          title: "Login",
          description:
            "Log in to access your account and start preparing for interviews.",
        },
        providers: "Use one of the following providers",
        noAccount: "Don't have an account? Create new one",
      },
      register: {
        meta: {
          title: "Register",
          description:
            "Create a new account and start preparing for interviews.",
        },
        haveAccount: "Have an account? Log in",
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
      confirmEmail: {
        title: "Confirm your email",
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
        differentSettings: "Try different settings and generate new questions",
        saveChats: "Save your chats",
        logInToSave: "Login or create an account to save your chats",
        meta: {
          title: "Recruiter",
          description:
            "Discover how AI can assist you in preparing for your dream job.",
        },
      },
      recruiter: {
        title: "Candidate Tools",
        description:
          "Discover how AI can assist you in preparing for your dream job.",
        meta: {
          title: "Recruiter",
          description:
            "Discover how AI can assist you in preparing for your dream job.",
        },
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
      validations: {
        fileRequired: "File is required",
        fileSize: "Max file size is {{size}}MB.",
        fileTypes: "Files of type .jpg, .jpeg, .png are accepted only",
      },
      profile: {
        meta: {
          title: "Profile",
          description:
            "Get personalized questions to prepare for interviews effortlessly",
        },
        title: "Profile",
        recentActivity: "Your recent recruiter AI activity",
        noChats: {
          title: "No Chats has been found",
          description:
            "Nothing to worry about... you can start a new chat and find the job of your dreams",
          startNew: "Start a new chat",
        },
        deleteAccount: {
          title: "Delete Account",
          description:
            "Warning! All of the data will be permanently deleted. Also all the chats created by you will be deleted.",
          beCareful: "Be careful!",
          irreversible: "This action is irreversable",
        },
      },
      profileSettings: {
        title: "Profile settings",
        dangerZone: "Danger Zone",
        recentActivity: "Your recent recruiter AI activity",
        noChats: {
          title: "No Chats has been found",
          description:
            "Nothing to worry about... you can start a new chat and find the job of your dreams",
          startNew: "Start a new chat",
        },
        deleteAccount: {
          title: "Delete Account",
          description:
            "Warning! All of the data will be permanently deleted. Also all the chats created by you will be deleted.",
          beCareful: "Be careful!",
          irreversible: "This action is irreversable",
        },
      },
      chat: {
        restrictionsSuccess: {
          title: "Chat restrictions updated",
          description: "Chat restrictions updated successfully.",
        },
        restrictionsFailed: {
          title: "Chat restrictions update failed",
        },
        restrictionsEdit: {
          title: "Edit restrictions",
          description:
            "Make changes to the chat restrictions. Click save when you're done.",
        },
      },
      privacy: {
        meta: {
          title: "Privacy",
          description: "Recruiter AI privacy policy",
        },
      },
      terms: {
        meta: {
          title: "Terms",
          description: "Recruiter AI terms",
        },
      },
      apiResponses: {
        emailNotVerified: "Email not verified",
        invalidCredentials: "Invalid credentials",
        chatNotFound: "Chat not found",
        chatNowAllowed: "You are not allowed to access this chat",
        somethingWentWrong: "Something went wrong",
        missingCode: "Missing code",
        emailConfirmed:
          "Email confirmed succesfully. Now you can login to your account!",
        failedToConfirmEmail: "Failed to confirm email",
        invalidChatId: "Invalid chat id",
        failedToSaveChat: "Failed to save chat",
        chatIdRequired: "Chat id is required",
        updateChatFailed: "Update chat failed",
        userNotAuthenticated: "User is not authenticated",
        failedToFetchUserChats: "Failed to fetch user chats",
        incorrectPassword: "Incorrect password",
        missingUri: "Missing uri",
        issueFetchingPage: "Issue fetching page",
        emailTaken: "Email is already taken",
        accountCreated:
          "Account created successfully. To confirm your account, please check your email.",
        failedToCreateAccount: "Failed to create account",
        failedToSendVerificationEmail: "Failed to send verification email",
      },
    },
    pl: {
      common: {
        getStarted: "Rozpocznij",
        logIn: "Zaloguj się",
        generateNew: "Wygeneruj nowe pytania",
        generate: "Generuj",
        copy: "Kopiuj",
        copied: "Skopiowano",
        share: "Udostępnij",
        close: "Zamknij",
        settings: "Ustawienia",
        additional: "Dodatkowe",
        action: "Akcja",
        preview: "Podgląd",
        title: "Tytuł",
        created: "Utworzono",
        type: "Typ",
        searchByTitle: "Szukaj po tytule",
        noResults: "Brak wyników",
        previous: "Poprzedni",
        next: "Następny",
        author: "Autor",
        level: "Poziom",
        status: "Status",
        profile: "Profil",
        dateCreated: "Data utworzenia",
        saveChanges: "Zapisz zmiany",
        tryAgain: "Spróbuj ponownie",
        newChat: "Nowy czat",
        selectLanguage: "Wybierz język...",
        nothingFound: "Nic nie znaleziono",
      },
      status: {
        public: {
          title: "Publiczny",
          description: "Każdy może uzyskać dostęp do tego zestawu pytań.",
        },
        restricted: {
          title: "Ograniczony",
          description: "Dostęp mają tylko autor i upoważnieni użytkownicy.",
        },
      },
      navigation: {
        home: "Strona główna",
        product: "Produkt",
        recruiter: "Narzędzia dla kandydatów",
        login: "Logowanie",
        logout: "Wyloguj",
        profile: "Profil",
        account: "Konto",
        myAccount: "Moje konto",
        logOut: "Wyloguj",
      },
      footer: {
        navigationTitle: "Nawigacja",
        aboutTitle: "O nas",
        terms: "Regulamin",
        privacy: "Polityka prywatności",
        createdBy: "Recruiter AI stworzony przez",
      },
      form: {
        url: {
          title: "Wprowadź URL",
          label: "URL oferty pracy",
          placeholder: "Wklej tutaj URL oferty pracy",
        },
        cv: {
          title: "Prześlij swoje CV",
          label: "Prześlij CV (JPG, PNG)",
        },
        custom: {
          title: "Wprowadź własne szczegóły",
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
              "Wymień umiejętności lub doświadczenie, które są mile widziane",
          },
          responsibilities: {
            label: "Obowiązki",
            placeholder: "Opisz obowiązki na tym stanowisku",
          },
        },
        buttons: {
          previous: "Poprzedni",
          next: "Następny",
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
                  "Podstawowe pytania odpowiednie dla początkujących",
              },
              intermediate: {
                title: "Średni",
                description:
                  "Pytania odpowiednie dla kandydatów z pewnym doświadczeniem",
              },
              advanced: {
                title: "Zaawansowany",
                description: "Wymagające pytania dla doświadczonych kandydatów",
              },
            },
          },
          prepareAnswers: {
            label: "Przygotuj odpowiedzi z wyprzedzeniem",
            description:
              "Włącz tę opcję, aby generować odpowiedzi z wyprzedzeniem.",
          },
          recruitmentTask: {
            label: "Dodaj zadanie rekrutacyjne",
            description: "Dodaj zadanie, aby zaprezentować swoje umiejętności.",
          },
          private: {
            label: "Ustaw jako prywatne",
            description:
              "Ustaw ten zestaw pytań jako prywatny. Dostęp masz tylko Ty lub zaproszeni użytkownicy.",
          },
          authorizedEmails: {
            label: "Autoryzowane e-maile",
            description: "Wpisz e-mail i naciśnij enter",
          },
        },
        difficultLevel: {
          title: "Poziom trudności",
        },
      },
      home: {
        meta: {
          title: "Strona główna",
          description:
            "Uzyskaj spersonalizowane pytania, aby łatwo przygotować się do rozmów kwalifikacyjnych",
        },
        hero: {
          title: "Odkryj moc AI w poszukiwaniu pracy",
          subtitle:
            "Uzyskaj spersonalizowane pytania, aby łatwo przygotować się do rozmów kwalifikacyjnych",
        },
        features: {
          title: "Funkcje",
          description:
            "Poznaj unikalne funkcje, które sprawiają, że to narzędzie jest idealne dla kandydatów.",
          details: "Więcej szczegółów o funkcjach",
          feature1: {
            title: "Pytania na podstawie CV",
            description:
              "Generuj dopasowane pytania na podstawie Twojego CV, aby skutecznie się przygotować.",
          },
          feature2: {
            title: "Pytania na podstawie URL oferty pracy",
            description:
              "Podaj URL oferty pracy i uzyskaj pytania zgodne z wymaganiami stanowiska.",
          },
          feature3: {
            title: "Pytania na podstawie własnych szczegółów",
            description:
              "Dodaj własne szczegóły, aby wygenerować spersonalizowane pytania dopasowane do Twoich potrzeb.",
          },
          feature4: {
            title: "Zapisz swoje pytania",
            description:
              "Zapisuj wygenerowane pytania, aby móc wrócić do nich później i przygotować się efektywnie.",
          },
        },
        callToAction: {
          startWith: "Rozpocznij od",
          poweredTool: "Napędzane przez AI Tool",
          assistantDescription:
            "Spraw, by Twoje przygotowania do rozmowy były skuteczne i skoncentrowane dzięki naszemu asystentowi AI.",
          decorativeImageAlt: "Dekoracyjne tło",
          installApp: "Zainstaluj aplikację",
        },
      },
      login: {
        meta: {
          title: "Logowanie",
          description:
            "Zaloguj się, aby uzyskać dostęp do swojego konta i rozpocząć przygotowania do rozmów kwalifikacyjnych.",
        },
        providers: "Użyj jednej z poniższych metod logowania",
        noAccount: "Nie masz konta? Utwórz nowe",
      },
      register: {
        meta: {
          title: "Rejestracja",
          description:
            "Utwórz nowe konto i rozpocznij przygotowania do rozmów kwalifikacyjnych.",
        },
        haveAccount: "Masz już konto? Zaloguj się",
      },
      features: {
        cv_questions_title: "Pytania na podstawie CV",
        cv_questions_description:
          "Przygotuj się skutecznie dzięki pytaniom dopasowanym do Twojego CV.",
        url_questions_title: "Pytania na podstawie URL",
        url_questions_description:
          "Otrzymaj pytania na podstawie podanego URL oferty pracy.",
        custom_questions_title: "Pytania niestandardowe",
        custom_questions_description:
          "Generuj pytania dopasowane do Twoich indywidualnych potrzeb przygotowawczych.",
      },
      confirmEmail: {
        title: "Potwierdź swój adres e-mail",
      },
      jobAnalysis: "Analiza oferty pracy",
      jobAnalysisNew: "Generowanie nowych pytań",
      recruitmentTask: "Zadanie praktyczne",
      questions: {
        method: {
          title: "Wybierz metodę generowania pytań",
          label: "Wybierz sposób generowania pytań",
          types: {
            url: {
              title: "Metoda URL",
              description: "Generuj pytania na podstawie URL oferty pracy",
            },
            cv: {
              title: "Metoda CV",
              description: "Generuj pytania na podstawie Twojego CV",
            },
            custom: {
              title: "Metoda niestandardowa",
              description:
                "Generuj spersonalizowane pytania na podstawie własnych danych",
            },
          },
        },
      },
      product: {
        title: "Produkt",
        description:
          "Poznaj funkcje, które sprawiają, że przygotowanie do rozmów kwalifikacyjnych jest łatwe i efektywne.",
        differentSettings: "Spróbuj różnych ustawień i generuj nowe pytania",
        saveChats: "Zapisz swoje czaty",
        logInToSave: "Zaloguj się lub utwórz konto, aby zapisać swoje czaty",
        meta: {
          title: "Rekruter",
          description:
            "Odkryj, jak AI może pomóc Ci w przygotowaniach do pracy marzeń.",
        },
      },
      recruiter: {
        title: "Narzędzia dla kandydatów",
        description:
          "Odkryj, jak AI może pomóc Ci w przygotowaniach do pracy marzeń.",
        meta: {
          title: "Rekruter",
          description:
            "Odkryj, jak AI może pomóc Ci w przygotowaniach do pracy marzeń.",
        },
      },
      noAnswer: "Brak odpowiedzi",
      auth: {
        login: "Logowanie",
        password: "Hasło",
        passwordRepeat: "Powtórz hasło",
        register: "Rejestracja",
      },
      share: {
        title: "Udostępnij lub zapisz swoje wyniki",
        subtitle: "Zapisz link do swoich wyników lub udostępnij je online",
      },
      validations: {
        fileRequired: "Plik jest wymagany",
        fileSize: "Maksymalny rozmiar pliku to {{size}}MB.",
        fileTypes: "Akceptowane są tylko pliki typu .jpg, .jpeg, .png",
      },
      profile: {
        meta: {
          title: "Profil",
          description:
            "Uzyskaj spersonalizowane pytania, aby łatwo przygotować się do rozmów kwalifikacyjnych",
        },
        title: "Profil",
        recentActivity: "Twoja ostatnia aktywność w Recruiter AI",
        noChats: {
          title: "Brak znalezionych czatów",
          description:
            "Nie martw się... możesz rozpocząć nowy czat i znaleźć pracę swoich marzeń",
          startNew: "Rozpocznij nowy czat",
        },
        deleteAccount: {
          title: "Usuń konto",
          description:
            "Uwaga! Wszystkie dane zostaną trwale usunięte. Zostaną również usunięte wszystkie czaty utworzone przez Ciebie.",
          beCareful: "Uważaj!",
          irreversible: "Ta akcja jest nieodwracalna",
        },
      },
      profileSettings: {
        title: "Ustawienia profilu",
        dangerZone: "Strefa ryzyka",
        recentActivity: "Twoja ostatnia aktywność w Recruiter AI",
        noChats: {
          title: "Brak znalezionych czatów",
          description:
            "Nie martw się... możesz rozpocząć nowy czat i znaleźć pracę swoich marzeń",
          startNew: "Rozpocznij nowy czat",
        },
        deleteAccount: {
          title: "Usuń konto",
          description:
            "Uwaga! Wszystkie dane zostaną trwale usunięte. Zostaną również usunięte wszystkie czaty utworzone przez Ciebie.",
          beCareful: "Uważaj!",
          irreversible: "Ta akcja jest nieodwracalna",
        },
      },
      chat: {
        restrictionsSuccess: {
          title: "Ograniczenia czatu zaktualizowane",
          description: "Ograniczenia czatu zostały pomyślnie zaktualizowane.",
        },
        restrictionsFailed: {
          title: "Aktualizacja ograniczeń czatu nie powiodła się",
        },
        restrictionsEdit: {
          title: "Edytuj ograniczenia",
          description:
            "Wprowadź zmiany w ograniczeniach czatu. Kliknij Zapisz, gdy skończysz.",
        },
      },
      privacy: {
        meta: {
          title: "Prywatność",
          description: "Polityka prywatności Recruiter AI",
        },
      },
      terms: {
        meta: {
          title: "Warunki",
          description: "Warunki użytkowania Recruiter AI",
        },
      },
      apiResponses: {
        emailNotVerified: "E-mail niezweryfikowany",
        invalidCredentials: "Nieprawidłowe dane logowania",
        chatNotFound: "Czat nie znaleziony",
        chatNowAllowed: "Nie masz uprawnień do dostępu do tego czatu",
        somethingWentWrong: "Coś poszło nie tak",
        missingCode: "Brak kodu",
        emailConfirmed:
          "E-mail został pomyślnie potwierdzony. Teraz możesz zalogować się do swojego konta!",
        failedToConfirmEmail: "Nie udało się potwierdzić e-maila",
        invalidChatId: "Nieprawidłowe ID czatu",
        failedToSaveChat: "Nie udało się zapisać czatu",
        chatIdRequired: "ID czatu jest wymagane",
        updateChatFailed: "Aktualizacja czatu nie powiodła się",
        userNotAuthenticated: "Użytkownik nie jest uwierzytelniony",
        failedToFetchUserChats: "Nie udało się pobrać czatów użytkownika",
        incorrectPassword: "Nieprawidłowe hasło",
        missingUri: "Brak URI",
        issueFetchingPage: "Problem z pobraniem strony",
        emailTaken: "E-mail jest już zajęty",
        accountCreated:
          "Konto zostało pomyślnie utworzone. Aby potwierdzić konto, sprawdź swój e-mail.",
        failedToCreateAccount: "Nie udało się utworzyć konta",
        failedToSendVerificationEmail:
          "Nie udało się wysłać e-maila weryfikacyjnego",
      },
    },
  },
}));
