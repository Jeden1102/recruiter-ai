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
        language: "Language",
      },
      footer: {
        navigationTitle: "Navigation",
        aboutTitle: "About",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        createdBy: "Aipplied created by",
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
        fileSize: "Max file size is {size}MB.",
        fileTypes: "Files of type .jpg, .jpeg, .png are accepted only",
      },
      profile: {
        meta: {
          title: "Profile",
          description:
            "Get personalized questions to prepare for interviews effortlessly",
        },
        title: "Profile",
        recentActivity: "Your recent Aipplied activity",
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
        recentActivity: "Your recent Aipplied activity",
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
          description: "Aipplied privacy policy",
        },
        sections: {
          intro: {
            title: "Introduction",
            content:
              "We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.",
          },
          dataCollection: {
            title: "Data Collection",
            content:
              "We collect information such as your name, email, and chat history when you register and use our service.",
          },
          dataUsage: {
            title: "How We Use Your Data",
            content:
              "Your data is used to provide personalized experiences, improve our services, and ensure account security.",
          },
          dataSharing: {
            title: "Data Sharing",
            content:
              "We do not share your personal data with third parties, except as required by law.",
          },
          security: {
            title: "Security Measures",
            content:
              "We take appropriate measures to protect your data from unauthorized access, alteration, or destruction.",
          },
        },
      },
      terms: {
        meta: {
          title: "Terms",
          description: "Aipplied terms",
        },
        sections: {
          acceptance: {
            title: "Acceptance of Terms",
            content:
              "By using our service, you agree to comply with these terms.",
          },
          userResponsibilities: {
            title: "User Responsibilities",
            content:
              "Users must provide accurate information and comply with applicable laws.",
          },
          account: {
            title: "Account Registration and Security",
            content:
              "Users are responsible for maintaining the security of their accounts.",
          },
          termination: {
            title: "Termination of Service",
            content:
              "We reserve the right to suspend or terminate accounts violating our terms.",
          },
          limitation: {
            title: "Limitation of Liability",
            content:
              "We are not responsible for any damages arising from the use of our service.",
          },
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
        language: "Język",
      },
      footer: {
        navigationTitle: "Nawigacja",
        aboutTitle: "O nas",
        terms: "Regulamin",
        privacy: "Polityka prywatności",
        createdBy: "Aipplied stworzony przez",
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
        fileSize: "Maksymalny rozmiar pliku to {size}MB.",
        fileTypes: "Akceptowane są tylko pliki typu .jpg, .jpeg, .png",
      },
      profile: {
        meta: {
          title: "Profil",
          description:
            "Uzyskaj spersonalizowane pytania, aby łatwo przygotować się do rozmów kwalifikacyjnych",
        },
        title: "Profil",
        recentActivity: "Twoja ostatnia aktywność w Aipplied",
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
        recentActivity: "Twoja ostatnia aktywność w Aipplied",
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
          description: "Polityka prywatności Aipplied",
        },
        sections: {
          intro: {
            title: "Wstęp",
            content:
              "Szanujemy Twoją prywatność i zobowiązujemy się do ochrony Twoich danych osobowych. Niniejsza polityka prywatności wyjaśnia, jak zbieramy, wykorzystujemy i zabezpieczamy Twoje informacje.",
          },
          dataCollection: {
            title: "Zbieranie Danych",
            content:
              "Zbieramy informacje, takie jak imię, adres e-mail i historię czatów, gdy rejestrujesz się i korzystasz z naszego serwisu.",
          },
          dataUsage: {
            title: "Jak Wykorzystujemy Twoje Dane",
            content:
              "Twoje dane są wykorzystywane do personalizacji doświadczeń, ulepszania naszych usług oraz zapewnienia bezpieczeństwa konta.",
          },
          dataSharing: {
            title: "Udostępnianie Danych",
            content:
              "Nie udostępniamy Twoich danych osobowych stronom trzecim, z wyjątkiem sytuacji wymaganych przez prawo.",
          },
          security: {
            title: "Środki Bezpieczeństwa",
            content:
              "Podejmujemy odpowiednie środki w celu ochrony Twoich danych przed nieautoryzowanym dostępem, modyfikacją lub zniszczeniem.",
          },
        },
      },
      terms: {
        meta: {
          title: "Warunki",
          description: "Warunki użytkowania Aipplied",
        },
        sections: {
          acceptance: {
            title: "Akceptacja Warunków",
            content:
              "Korzystając z naszego serwisu, zgadzasz się na przestrzeganie niniejszych warunków.",
          },
          userResponsibilities: {
            title: "Obowiązki Użytkownika",
            content:
              "Użytkownicy muszą podawać dokładne informacje i przestrzegać obowiązujących przepisów.",
          },
          account: {
            title: "Rejestracja i Bezpieczeństwo Konta",
            content:
              "Użytkownicy są odpowiedzialni za bezpieczeństwo swoich kont.",
          },
          termination: {
            title: "Zakończenie Świadczenia Usług",
            content:
              "Zastrzegamy sobie prawo do zawieszenia lub usunięcia kont naruszających regulamin.",
          },
          limitation: {
            title: "Ograniczenie Odpowiedzialności",
            content:
              "Nie ponosimy odpowiedzialności za jakiekolwiek szkody wynikające z korzystania z naszej usługi.",
          },
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
    de: {
      common: {
        getStarted: "Loslegen",
        logIn: "Anmelden",
        generateNew: "Neue Fragen generieren",
        generate: "Generieren",
        copy: "Kopieren",
        copied: "Kopiert",
        share: "Teilen",
        close: "Schließen",
        settings: "Einstellungen",
        additional: "Zusätzlich",
        action: "Aktion",
        preview: "Vorschau",
        title: "Titel",
        created: "Erstellt",
        type: "Typ",
        searchByTitle: "Nach Titel suchen",
        noResults: "Keine Ergebnisse",
        previous: "Zurück",
        next: "Weiter",
        author: "Autor",
        level: "Level",
        status: "Status",
        profile: "Profil",
        dateCreated: "Erstellungsdatum",
        saveChanges: "Änderungen speichern",
        tryAgain: "Erneut versuchen",
        newChat: "Neuer Chat",
        selectLanguage: "Sprache auswählen...",
        nothingFound: "Nichts gefunden",
      },
      status: {
        public: {
          title: "Öffentlich",
          description: "Jeder kann auf diesen Fragenkatalog zugreifen.",
        },
        restricted: {
          title: "Eingeschränkt",
          description:
            "Nur der Autor und autorisierte Benutzer können darauf zugreifen.",
        },
      },
      navigation: {
        home: "Startseite",
        product: "Produkt",
        recruiter: "Kandidatentools",
        login: "Anmelden",
        logout: "Abmelden",
        profile: "Profil",
        account: "Konto",
        myAccount: "Mein Konto",
        logOut: "Abmelden",
        language: "Sprache",
      },
      footer: {
        navigationTitle: "Navigation",
        aboutTitle: "Über uns",
        terms: "Nutzungsbedingungen",
        privacy: "Datenschutzrichtlinie",
        createdBy: "Aipplied erstellt von",
      },
      form: {
        url: {
          title: "URL eingeben",
          label: "Stellenangebot-URL",
          placeholder: "Fügen Sie hier die URL des Stellenangebots ein",
        },
        cv: {
          title: "Lebenslauf hochladen",
          label: "Lebenslauf hochladen (JPG, PNG)",
        },
        custom: {
          title: "Benutzerdefinierte Details eingeben",
          position: {
            label: "Stellenbezeichnung",
            placeholder: "Beschreiben Sie die Stellenbezeichnung",
          },
          requirements: {
            label: "Anforderungen",
            placeholder: "Listen Sie die Anforderungen für die Rolle auf",
          },
          niceToHave: {
            label: "Nice-to-Have",
            placeholder:
              "Listen Sie Fähigkeiten oder Erfahrungen auf, die von Vorteil sind",
          },
          responsibilities: {
            label: "Verantwortlichkeiten",
            placeholder:
              "Beschreiben Sie die Verantwortlichkeiten für diese Rolle",
          },
        },
        buttons: {
          previous: "Zurück",
          next: "Weiter",
        },
      },
      settings: {
        general: {
          title: "Allgemeine Einstellungen",
          questionsDifficulty: {
            label: "Fragenschwierigkeit auswählen",
            options: {
              easy: {
                title: "Einfach",
                description:
                  "Grundlegende Fragen, die für Anfänger geeignet sind",
              },
              intermediate: {
                title: "Mittel",
                description:
                  "Fragen, die für Kandidaten mit etwas Erfahrung geeignet sind",
              },
              advanced: {
                title: "Fortgeschritten",
                description: "Herausfordernde Fragen für erfahrene Kandidaten",
              },
            },
          },
          prepareAnswers: {
            label: "Antworten im Voraus vorbereiten",
            description:
              "Aktivieren Sie diese Option, um Antworten im Voraus zu generieren.",
          },
          recruitmentTask: {
            label: "Übungsaufgabe einbeziehen",
            description:
              "Beziehen Sie eine Aufgabe ein, um Ihre Fähigkeiten zu zeigen.",
          },
          private: {
            label: "Als privat festlegen",
            description:
              "Legen Sie diesen Fragenkatalog als privat fest. Nur Sie oder die von Ihnen eingeladenen Benutzer können darauf zugreifen.",
          },
          authorizedEmails: {
            label: "Autorisierte E-Mails",
            description:
              "Geben Sie die E-Mail-Adresse ein und drücken Sie die Eingabetaste",
          },
        },
        difficultLevel: {
          title: "Schwierigkeitsgrad",
        },
      },
      home: {
        meta: {
          title: "Startseite",
          description:
            "Erhalten Sie personalisierte Fragen, um sich mühelos auf Vorstellungsgespräche vorzubereiten",
        },
        hero: {
          title: "Entdecken Sie die Kraft der KI für Ihre Jobsuche",
          subtitle:
            "Erhalten Sie personalisierte Fragen, um sich mühelos auf Vorstellungsgespräche vorzubereiten",
        },
        features: {
          title: "Funktionen",
          description:
            "Entdecken Sie die einzigartigen Funktionen, die dieses Tool perfekt für Kandidaten machen.",
          details: "Weitere Details zu den Funktionen",
          feature1: {
            title: "Fragen basierend auf dem Lebenslauf",
            description:
              "Generieren Sie maßgeschneiderte Fragen basierend auf Ihrem Lebenslauf, um sich effektiv vorzubereiten.",
          },
          feature2: {
            title: "Fragen basierend auf der Stellenangebot-URL",
            description:
              "Geben Sie eine Stellenangebot-URL ein und erhalten Sie Fragen, die auf die Anforderungen der Rolle abgestimmt sind.",
          },
          feature3: {
            title: "Fragen basierend auf benutzerdefinierten Details",
            description:
              "Fügen Sie benutzerdefinierte Details hinzu, um personalisierte Fragen zu generieren, die Ihren Bedürfnissen entsprechen.",
          },
          feature4: {
            title: "Speichern Sie Ihre Fragen",
            description:
              "Speichern Sie Ihre generierten Fragen für die zukünftige Vorbereitung und den einfachen Zugriff.",
          },
        },
        callToAction: {
          startWith: "Beginnen Sie mit",
          poweredTool: "Unterstützt durch KI-Tool",
          assistantDescription:
            "Machen Sie Ihre Vorbereitung auf Vorstellungsgespräche effizient und fokussiert mit unserem KI-Assistenten.",
          decorativeImageAlt: "Dekoratives Hintergrundbild",
          installApp: "App installieren",
        },
      },
      login: {
        meta: {
          title: "Anmelden",
          description:
            "Melden Sie sich an, um auf Ihr Konto zuzugreifen und mit der Vorbereitung auf Vorstellungsgespräche zu beginnen.",
        },
        providers: "Verwenden Sie einen der folgenden Anbieter",
        noAccount: "Kein Konto? Erstellen Sie ein neues",
      },
      register: {
        meta: {
          title: "Registrieren",
          description:
            "Erstellen Sie ein neues Konto und beginnen Sie mit der Vorbereitung auf Vorstellungsgespräche.",
        },
        haveAccount: "Haben Sie ein Konto? Melden Sie sich an",
      },
      features: {
        cv_questions_title: "Lebenslauf-Fragen",
        cv_questions_description:
          "Bereiten Sie sich effektiv mit auf Ihren Lebenslauf zugeschnittenen Einblicken vor.",
        url_questions_title: "URL-Fragen",
        url_questions_description:
          "Erhalten Sie Fragen basierend auf der bereitgestellten Stellenbeschreibungs-URL.",
        custom_questions_title: "Benutzerdefinierte Fragen",
        custom_questions_description:
          "Generieren Sie Fragen, die auf Ihre spezifischen Vorbereitungsbedürfnisse zugeschnitten sind.",
      },
      confirmEmail: {
        title: "Bestätigen Sie Ihre E-Mail",
      },
      jobAnalysis: "Analyse des Stellenangebots",
      jobAnalysisNew: "Neue Fragen generieren",
      recruitmentTask: "Übungsaufgabe",
      questions: {
        method: {
          title: "Fragenmethode auswählen",
          label: "Wählen Sie, wie Fragen generiert werden sollen",
          types: {
            url: {
              title: "URL-Methode",
              description: "Generieren Sie Fragen aus einer Stellenangebot-URL",
            },
            cv: {
              title: "Lebenslauf-Methode",
              description:
                "Generieren Sie Fragen basierend auf Ihrem Lebenslauf",
            },
            custom: {
              title: "Benutzerdefinierte Methode",
              description:
                "Generieren Sie personalisierte Fragen aus benutzerdefinierten Eingaben",
            },
          },
        },
      },
      product: {
        title: "Produkt",
        description:
          "Entdecken Sie Funktionen, die die Vorbereitung auf Vorstellungsgespräche einfach und effektiv machen.",
        differentSettings:
          "Probieren Sie verschiedene Einstellungen aus und generieren Sie neue Fragen",
        saveChats: "Speichern Sie Ihre Chats",
        logInToSave:
          "Melden Sie sich an oder erstellen Sie ein Konto, um Ihre Chats zu speichern",
        meta: {
          title: "Recruiter",
          description:
            "Entdecken Sie, wie KI Ihnen bei der Vorbereitung auf Ihren Traumjob helfen kann.",
        },
      },
      recruiter: {
        title: "Kandidatentools",
        description:
          "Entdecken Sie, wie KI Ihnen bei der Vorbereitung auf Ihren Traumjob helfen kann.",
        meta: {
          title: "Recruiter",
          description:
            "Entdecken Sie, wie KI Ihnen bei der Vorbereitung auf Ihren Traumjob helfen kann.",
        },
      },
      noAnswer: "Keine Antwort",
      auth: {
        login: "Anmelden",
        password: "Passwort",
        passwordRepeat: "Passwort wiederholen",
        register: "Registrieren",
      },
      share: {
        title: "Teilen oder speichern Sie Ihre Ergebnisse",
        subtitle:
          "Speichern Sie einen Link zu Ihren Ergebnissen oder teilen Sie sie online",
      },
      validations: {
        fileRequired: "Datei ist erforderlich",
        fileSize: "Die maximale Dateigröße beträgt {size}MB.",
        fileTypes: "Es werden nur Dateien vom Typ .jpg, .jpeg, .png akzeptiert",
      },
      profile: {
        meta: {
          title: "Profil",
          description:
            "Erhalten Sie personalisierte Fragen, um sich mühelos auf Vorstellungsgespräche vorzubereiten",
        },
        title: "Profil",
        recentActivity: "Ihre letzten Aktivitäten mit Aipplied",
        noChats: {
          title: "Keine Chats gefunden",
          description:
            "Kein Grund zur Sorge... Sie können einen neuen Chat starten und den Job Ihrer Träume finden",
          startNew: "Starten Sie einen neuen Chat",
        },
        deleteAccount: {
          title: "Konto löschen",
          description:
            "Warnung! Alle Daten werden dauerhaft gelöscht. Auch alle von Ihnen erstellten Chats werden gelöscht.",
          beCareful: "Seien Sie vorsichtig!",
          irreversible: "Diese Aktion ist unwiderruflich",
        },
      },
      profileSettings: {
        title: "Profileinstellungen",
        dangerZone: "Gefahrenzone",
        recentActivity: "Ihre letzten Aktivitäten mit Aipplied",
        noChats: {
          title: "Keine Chats gefunden",
          description:
            "Kein Grund zur Sorge... Sie können einen neuen Chat starten und den Job Ihrer Träume finden",
          startNew: "Starten Sie einen neuen Chat",
        },
        deleteAccount: {
          title: "Konto löschen",
          description:
            "Warnung! Alle Daten werden dauerhaft gelöscht. Auch alle von Ihnen erstellten Chats werden gelöscht.",
          beCareful: "Seien Sie vorsichtig!",
          irreversible: "Diese Aktion ist unwiderruflich",
        },
      },
      chat: {
        restrictionsSuccess: {
          title: "Chat-Einschränkungen aktualisiert",
          description: "Chat-Einschränkungen erfolgreich aktualisiert.",
        },
        restrictionsFailed: {
          title: "Aktualisierung der Chat-Einschränkungen fehlgeschlagen",
        },
        restrictionsEdit: {
          title: "Einschränkungen bearbeiten",
          description:
            "Nehmen Sie Änderungen an den Chat-Einschränkungen vor. Klicken Sie auf Speichern, wenn Sie fertig sind.",
        },
      },
      privacy: {
        meta: {
          title: "Datenschutz",
          description: "Datenschutzrichtlinie von Aipplied",
        },
        sections: {
          intro: {
            title: "Einführung",
            content:
              "Wir respektieren Ihre Privatsphäre und sind bestrebt, Ihre persönlichen Daten zu schützen. Diese Datenschutzrichtlinie erklärt, wie wir Ihre Informationen sammeln, verwenden und schützen.",
          },
          dataCollection: {
            title: "Datensammlung",
            content:
              "Wir sammeln Informationen wie Ihren Namen, Ihre E-Mail-Adresse und Ihren Chat-Verlauf, wenn Sie sich registrieren und unseren Dienst nutzen.",
          },
          dataUsage: {
            title: "Wie wir Ihre Daten verwenden",
            content:
              "Ihre Daten werden verwendet, um personalisierte Erfahrungen zu bieten, unsere Dienste zu verbessern und die Kontosicherheit zu gewährleisten.",
          },
          dataSharing: {
            title: "Weitergabe von Daten",
            content:
              "Wir geben Ihre persönlichen Daten nicht an Dritte weiter, es sei denn, dies ist gesetzlich vorgeschrieben.",
          },
          security: {
            title: "Sicherheitsmaßnahmen",
            content:
              "Wir ergreifen angemessene Maßnahmen, um Ihre Daten vor unbefugtem Zugriff, Änderung oder Zerstörung zu schützen.",
          },
        },
      },
      terms: {
        meta: {
          title: "Nutzungsbedingungen",
          description: "Nutzungsbedingungen von Aipplied",
        },
        sections: {
          acceptance: {
            title: "Annahme der Bedingungen",
            content:
              "Durch die Nutzung unseres Dienstes erklären Sie sich mit diesen Bedingungen einverstanden.",
          },
          userResponsibilities: {
            title: "Benutzerverantwortlichkeiten",
            content:
              "Benutzer müssen genaue Informationen bereitstellen und die geltenden Gesetze einhalten.",
          },
          account: {
            title: "Kontoregistrierung und Sicherheit",
            content:
              "Benutzer sind für die Sicherheit ihrer Konten verantwortlich.",
          },
          termination: {
            title: "Beendigung des Dienstes",
            content:
              "Wir behalten uns das Recht vor, Konten zu sperren oder zu kündigen, die gegen unsere Bedingungen verstoßen.",
          },
          limitation: {
            title: "Haftungsbeschränkung",
            content:
              "Wir sind nicht verantwortlich für Schäden, die durch die Nutzung unseres Dienstes entstehen.",
          },
        },
      },
      apiResponses: {
        emailNotVerified: "E-Mail nicht verifiziert",
        invalidCredentials: "Ungültige Anmeldedaten",
        chatNotFound: "Chat nicht gefunden",
        chatNowAllowed: "Sie haben keinen Zugriff auf diesen Chat",
        somethingWentWrong: "Etwas ist schiefgelaufen",
        missingCode: "Fehlender Code",
        emailConfirmed:
          "E-Mail erfolgreich bestätigt. Sie können sich jetzt in Ihr Konto einloggen!",
        failedToConfirmEmail: "Bestätigung der E-Mail fehlgeschlagen",
        invalidChatId: "Ungültige Chat-ID",
        failedToSaveChat: "Speichern des Chats fehlgeschlagen",
        chatIdRequired: "Chat-ID ist erforderlich",
        updateChatFailed: "Aktualisierung des Chats fehlgeschlagen",
        userNotAuthenticated: "Benutzer ist nicht authentifiziert",
        failedToFetchUserChats: "Abrufen der Benutzerchats fehlgeschlagen",
        incorrectPassword: "Falsches Passwort",
        missingUri: "Fehlende URI",
        issueFetchingPage: "Problem beim Abrufen der Seite",
        emailTaken: "E-Mail ist bereits vergeben",
        accountCreated:
          "Konto erfolgreich erstellt. Um Ihr Konto zu bestätigen, überprüfen Sie bitte Ihre E-Mail.",
        failedToCreateAccount: "Erstellung des Kontos fehlgeschlagen",
        failedToSendVerificationEmail:
          "Senden der Bestätigungs-E-Mail fehlgeschlagen",
      },
    },
    fr: {
      common: {
        getStarted: "Commencer",
        logIn: "Se connecter",
        generateNew: "Générer de nouvelles questions",
        generate: "Générer",
        copy: "Copier",
        copied: "Copié",
        share: "Partager",
        close: "Fermer",
        settings: "Paramètres",
        additional: "Supplémentaire",
        action: "Action",
        preview: "Aperçu",
        title: "Titre",
        created: "Créé",
        type: "Type",
        searchByTitle: "Rechercher par titre",
        noResults: "Aucun résultat",
        previous: "Précédent",
        next: "Suivant",
        author: "Auteur",
        level: "Niveau",
        status: "Statut",
        profile: "Profil",
        dateCreated: "Date de création",
        saveChanges: "Enregistrer les modifications",
        tryAgain: "Réessayer",
        newChat: "Nouveau chat",
        selectLanguage: "Sélectionner la langue...",
        nothingFound: "Rien trouvé",
      },
      status: {
        public: {
          title: "Public",
          description: "Tout le monde peut accéder à ce jeu de questions.",
        },
        restricted: {
          title: "Restreint",
          description:
            "Seul l'auteur et les utilisateurs autorisés peuvent y accéder.",
        },
      },
      navigation: {
        home: "Accueil",
        product: "Produit",
        recruiter: "Outils pour candidats",
        login: "Connexion",
        logout: "Déconnexion",
        profile: "Profil",
        account: "Compte",
        myAccount: "Mon compte",
        logOut: "Déconnexion",
        language: "Langue",
      },
      footer: {
        navigationTitle: "Navigation",
        aboutTitle: "À propos",
        terms: "Conditions d'utilisation",
        privacy: "Politique de confidentialité",
        createdBy: "Aipplied créé par",
      },
      form: {
        url: {
          title: "Entrer une URL",
          label: "URL de l'offre d'emploi",
          placeholder: "Collez l'URL de l'offre d'emploi ici",
        },
        cv: {
          title: "Télécharger votre CV",
          label: "Télécharger le CV (JPG, PNG)",
        },
        custom: {
          title: "Entrer des détails personnalisés",
          position: {
            label: "Poste",
            placeholder: "Décrivez le poste",
          },
          requirements: {
            label: "Exigences",
            placeholder: "Listez les exigences pour le rôle",
          },
          niceToHave: {
            label: "Nice-to-Have",
            placeholder:
              "Listez les compétences ou expériences qui sont un plus",
          },
          responsibilities: {
            label: "Responsabilités",
            placeholder: "Décrivez les responsabilités pour ce rôle",
          },
        },
        buttons: {
          previous: "Précédent",
          next: "Suivant",
        },
      },
      settings: {
        general: {
          title: "Paramètres généraux",
          questionsDifficulty: {
            label: "Sélectionner la difficulté des questions",
            options: {
              easy: {
                title: "Facile",
                description: "Questions de base adaptées aux débutants",
              },
              intermediate: {
                title: "Intermédiaire",
                description:
                  "Questions adaptées aux candidats ayant une certaine expérience",
              },
              advanced: {
                title: "Avancé",
                description:
                  "Questions difficiles pour les candidats expérimentés",
              },
            },
          },
          prepareAnswers: {
            label: "Préparer les réponses à l'avance",
            description:
              "Activez cette option pour générer les réponses à l'avance.",
          },
          recruitmentTask: {
            label: "Inclure une tâche pratique",
            description: "Incluez une tâche pour montrer vos compétences.",
          },
          private: {
            label: "Définir comme privé",
            description:
              "Définissez ce jeu de questions comme privé. Seul vous ou les utilisateurs que vous invitez pouvez y accéder.",
          },
          authorizedEmails: {
            label: "Emails autorisés",
            description: "Tapez l'email et appuyez sur Entrée",
          },
        },
        difficultLevel: {
          title: "Niveau de difficulté",
        },
      },
      home: {
        meta: {
          title: "Accueil",
          description:
            "Obtenez des questions personnalisées pour vous préparer aux entretiens sans effort",
        },
        hero: {
          title: "Découvrez la puissance de l'IA pour votre recherche d'emploi",
          subtitle:
            "Obtenez des questions personnalisées pour vous préparer aux entretiens sans effort",
        },
        features: {
          title: "Fonctionnalités",
          description:
            "Découvrez les fonctionnalités uniques qui rendent cet outil parfait pour les candidats.",
          details: "Plus de détails sur les fonctionnalités",
          feature1: {
            title: "Questions basées sur le CV",
            description:
              "Générez des questions sur mesure basées sur votre CV pour vous aider à vous préparer efficacement.",
          },
          feature2: {
            title: "Questions basées sur l'URL de l'offre d'emploi",
            description:
              "Entrez une URL d'offre d'emploi et obtenez des questions alignées sur les exigences du rôle.",
          },
          feature3: {
            title: "Questions basées sur des détails personnalisés",
            description:
              "Ajoutez des détails personnalisés pour générer des questions adaptées à vos besoins.",
          },
          feature4: {
            title: "Enregistrez vos questions",
            description:
              "Enregistrez vos questions générées pour une préparation future et un accès facile.",
          },
        },
        callToAction: {
          startWith: "Commencez avec",
          poweredTool: "Propulsé par l'outil IA",
          assistantDescription:
            "Rendez votre préparation aux entretiens efficace et ciblée avec notre assistant IA.",
          decorativeImageAlt: "Image de fond décorative",
          installApp: "Installer l'application",
        },
      },
      login: {
        meta: {
          title: "Connexion",
          description:
            "Connectez-vous pour accéder à votre compte et commencer à vous préparer aux entretiens.",
        },
        providers: "Utilisez l'un des fournisseurs suivants",
        noAccount: "Vous n'avez pas de compte ? Créez-en un",
      },
      register: {
        meta: {
          title: "S'inscrire",
          description:
            "Créez un nouveau compte et commencez à vous préparer aux entretiens.",
        },
        haveAccount: "Vous avez un compte ? Connectez-vous",
      },
      features: {
        cv_questions_title: "Questions basées sur le CV",
        cv_questions_description:
          "Préparez-vous efficacement avec des insights adaptés à votre CV.",
        url_questions_title: "Questions basées sur l'URL",
        url_questions_description:
          "Obtenez des questions basées sur l'URL de la description de poste fournie.",
        custom_questions_title: "Questions personnalisées",
        custom_questions_description:
          "Générez des questions adaptées à vos besoins spécifiques de préparation.",
      },
      confirmEmail: {
        title: "Confirmez votre email",
      },
      jobAnalysis: "Analyse de l'offre d'emploi",
      jobAnalysisNew: "Génération de nouvelles questions",
      recruitmentTask: "Tâche pratique",
      questions: {
        method: {
          title: "Sélectionner la méthode de question",
          label: "Choisissez comment générer les questions",
          types: {
            url: {
              title: "Méthode URL",
              description:
                "Générez des questions à partir d'une URL d'offre d'emploi",
            },
            cv: {
              title: "Méthode CV",
              description: "Générez des questions basées sur votre CV",
            },
            custom: {
              title: "Méthode personnalisée",
              description:
                "Générez des questions personnalisées à partir d'entrées personnalisées",
            },
          },
        },
      },
      product: {
        title: "Produit",
        description:
          "Découvrez les fonctionnalités qui rendent la préparation aux entretiens d'embauche facile et efficace.",
        differentSettings:
          "Essayez différents paramètres et générez de nouvelles questions",
        saveChats: "Enregistrez vos chats",
        logInToSave:
          "Connectez-vous ou créez un compte pour enregistrer vos chats",
        meta: {
          title: "Recruiter",
          description:
            "Découvrez comment l'IA peut vous aider à préparer votre emploi de rêve.",
        },
      },
      recruiter: {
        title: "Outils pour candidats",
        description:
          "Découvrez comment l'IA peut vous aider à préparer votre emploi de rêve.",
        meta: {
          title: "Recruiter",
          description:
            "Découvrez comment l'IA peut vous aider à préparer votre emploi de rêve.",
        },
      },
      noAnswer: "Pas de réponse",
      auth: {
        login: "Connexion",
        password: "Mot de passe",
        passwordRepeat: "Répéter le mot de passe",
        register: "S'inscrire",
      },
      share: {
        title: "Partager ou enregistrer vos résultats",
        subtitle:
          "Enregistrez un lien vers vos résultats ou partagez-les en ligne",
      },
      validations: {
        fileRequired: "Le fichier est requis",
        fileSize: "La taille maximale du fichier est de {size}MB.",
        fileTypes: "Seuls les fichiers de type .jpg, .jpeg, .png sont acceptés",
      },
      profile: {
        meta: {
          title: "Profil",
          description:
            "Obtenez des questions personnalisées pour vous préparer aux entretiens sans effort",
        },
        title: "Profil",
        recentActivity: "Votre activité récente avec Aipplied",
        noChats: {
          title: "Aucun chat trouvé",
          description:
            "Rien à craindre... vous pouvez commencer un nouveau chat et trouver l'emploi de vos rêves",
          startNew: "Commencer un nouveau chat",
        },
        deleteAccount: {
          title: "Supprimer le compte",
          description:
            "Attention ! Toutes les données seront définitivement supprimées. Tous les chats créés par vous seront également supprimés.",
          beCareful: "Soyez prudent !",
          irreversible: "Cette action est irréversible",
        },
      },
      profileSettings: {
        title: "Paramètres du profil",
        dangerZone: "Zone dangereuse",
        recentActivity: "Votre activité récente avec Aipplied",
        noChats: {
          title: "Aucun chat trouvé",
          description:
            "Rien à craindre... vous pouvez commencer un nouveau chat et trouver l'emploi de vos rêves",
          startNew: "Commencer un nouveau chat",
        },
        deleteAccount: {
          title: "Supprimer le compte",
          description:
            "Attention ! Toutes les données seront définitivement supprimées. Tous les chats créés par vous seront également supprimés.",
          beCareful: "Soyez prudent !",
          irreversible: "Cette action est irréversible",
        },
      },
      chat: {
        restrictionsSuccess: {
          title: "Restrictions du chat mises à jour",
          description:
            "Les restrictions du chat ont été mises à jour avec succès.",
        },
        restrictionsFailed: {
          title: "Échec de la mise à jour des restrictions du chat",
        },
        restrictionsEdit: {
          title: "Modifier les restrictions",
          description:
            "Apportez des modifications aux restrictions du chat. Cliquez sur Enregistrer lorsque vous avez terminé.",
        },
      },
      privacy: {
        meta: {
          title: "Confidentialité",
          description: "Politique de confidentialité de Aipplied",
        },
        sections: {
          intro: {
            title: "Introduction",
            content:
              "Nous respectons votre vie privée et nous engageons à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.",
          },
          dataCollection: {
            title: "Collecte de données",
            content:
              "Nous collectons des informations telles que votre nom, votre email et votre historique de chat lorsque vous vous inscrivez et utilisez notre service.",
          },
          dataUsage: {
            title: "Comment nous utilisons vos données",
            content:
              "Vos données sont utilisées pour fournir des expériences personnalisées, améliorer nos services et assurer la sécurité de votre compte.",
          },
          dataSharing: {
            title: "Partage de données",
            content:
              "Nous ne partageons pas vos données personnelles avec des tiers, sauf si la loi l'exige.",
          },
          security: {
            title: "Mesures de sécurité",
            content:
              "Nous prenons des mesures appropriées pour protéger vos données contre tout accès non autorisé, modification ou destruction.",
          },
        },
      },
      terms: {
        meta: {
          title: "Conditions d'utilisation",
          description: "Conditions d'utilisation de Aipplied",
        },
        sections: {
          acceptance: {
            title: "Acceptation des conditions",
            content:
              "En utilisant notre service, vous acceptez de respecter ces conditions.",
          },
          userResponsibilities: {
            title: "Responsabilités de l'utilisateur",
            content:
              "Les utilisateurs doivent fournir des informations exactes et se conformer aux lois applicables.",
          },
          account: {
            title: "Inscription et sécurité du compte",
            content:
              "Les utilisateurs sont responsables de la sécurité de leurs comptes.",
          },
          termination: {
            title: "Résiliation du service",
            content:
              "Nous nous réservons le droit de suspendre ou de résilier les comptes violant nos conditions.",
          },
          limitation: {
            title: "Limitation de responsabilité",
            content:
              "Nous ne sommes pas responsables des dommages résultant de l'utilisation de notre service.",
          },
        },
      },
      apiResponses: {
        emailNotVerified: "Email non vérifié",
        invalidCredentials: "Identifiants invalides",
        chatNotFound: "Chat non trouvé",
        chatNowAllowed: "Vous n'êtes pas autorisé à accéder à ce chat",
        somethingWentWrong: "Quelque chose s'est mal passé",
        missingCode: "Code manquant",
        emailConfirmed:
          "Email confirmé avec succès. Vous pouvez maintenant vous connecter à votre compte !",
        failedToConfirmEmail: "Échec de la confirmation de l'email",
        invalidChatId: "ID de chat invalide",
        failedToSaveChat: "Échec de l'enregistrement du chat",
        chatIdRequired: "L'ID de chat est requis",
        updateChatFailed: "Échec de la mise à jour du chat",
        userNotAuthenticated: "L'utilisateur n'est pas authentifié",
        failedToFetchUserChats:
          "Échec de la récupération des chats de l'utilisateur",
        incorrectPassword: "Mot de passe incorrect",
        missingUri: "URI manquante",
        issueFetchingPage: "Problème lors de la récupération de la page",
        emailTaken: "Email déjà utilisé",
        accountCreated:
          "Compte créé avec succès. Pour confirmer votre compte, veuillez vérifier votre email.",
        failedToCreateAccount: "Échec de la création du compte",
        failedToSendVerificationEmail:
          "Échec de l'envoi de l'email de vérification",
      },
    },
    es: {
      common: {
        getStarted: "Comenzar",
        logIn: "Iniciar sesión",
        generateNew: "Generar nuevas preguntas",
        generate: "Generar",
        copy: "Copiar",
        copied: "Copiado",
        share: "Compartir",
        close: "Cerrar",
        settings: "Configuración",
        additional: "Adicional",
        action: "Acción",
        preview: "Vista previa",
        title: "Título",
        created: "Creado",
        type: "Tipo",
        searchByTitle: "Buscar por título",
        noResults: "No hay resultados",
        previous: "Anterior",
        next: "Siguiente",
        author: "Autor",
        level: "Nivel",
        status: "Estado",
        profile: "Perfil",
        dateCreated: "Fecha de creación",
        saveChanges: "Guardar cambios",
        tryAgain: "Intentar de nuevo",
        newChat: "Nuevo chat",
        selectLanguage: "Seleccionar idioma...",
        nothingFound: "Nada encontrado",
      },
      status: {
        public: {
          title: "Público",
          description: "Cualquiera puede acceder a este conjunto de preguntas.",
        },
        restricted: {
          title: "Restringido",
          description:
            "Solo el autor y los usuarios autorizados pueden acceder.",
        },
      },
      navigation: {
        home: "Inicio",
        product: "Producto",
        recruiter: "Herramientas para candidatos",
        login: "Iniciar sesión",
        logout: "Cerrar sesión",
        profile: "Perfil",
        account: "Cuenta",
        myAccount: "Mi cuenta",
        logOut: "Cerrar sesión",
        language: "Idioma",
      },
      footer: {
        navigationTitle: "Navegación",
        aboutTitle: "Acerca de",
        terms: "Términos de servicio",
        privacy: "Política de privacidad",
        createdBy: "Aipplied creado por",
      },
      form: {
        url: {
          title: "Introducir una URL",
          label: "URL de la oferta de trabajo",
          placeholder: "Pegue la URL de la oferta de trabajo aquí",
        },
        cv: {
          title: "Subir tu CV",
          label: "Subir CV (JPG, PNG)",
        },
        custom: {
          title: "Introducir detalles personalizados",
          position: {
            label: "Puesto de trabajo",
            placeholder: "Describa el puesto de trabajo",
          },
          requirements: {
            label: "Requisitos",
            placeholder: "Enumere los requisitos para el puesto",
          },
          niceToHave: {
            label: "Deseable",
            placeholder:
              "Enumere habilidades o experiencias que sean deseables",
          },
          responsibilities: {
            label: "Responsabilidades",
            placeholder: "Describa las responsabilidades para este puesto",
          },
        },
        buttons: {
          previous: "Anterior",
          next: "Siguiente",
        },
      },
      settings: {
        general: {
          title: "Configuración general",
          questionsDifficulty: {
            label: "Seleccionar la dificultad de las preguntas",
            options: {
              easy: {
                title: "Fácil",
                description: "Preguntas básicas adecuadas para principiantes",
              },
              intermediate: {
                title: "Intermedio",
                description:
                  "Preguntas adecuadas para candidatos con algo de experiencia",
              },
              advanced: {
                title: "Avanzado",
                description:
                  "Preguntas desafiantes para candidatos experimentados",
              },
            },
          },
          prepareAnswers: {
            label: "Preparar respuestas por adelantado",
            description:
              "Active esta opción para generar respuestas por adelantado.",
          },
          recruitmentTask: {
            label: "Incluir tarea práctica",
            description: "Incluya una tarea para mostrar sus habilidades.",
          },
          private: {
            label: "Establecer como privado",
            description:
              "Establezca este conjunto de preguntas como privado. Solo usted o los usuarios que invite pueden acceder.",
          },
          authorizedEmails: {
            label: "Correos electrónicos autorizados",
            description: "Escriba el correo electrónico y presione Enter",
          },
        },
        difficultLevel: {
          title: "Nivel de dificultad",
        },
      },
      home: {
        meta: {
          title: "Inicio",
          description:
            "Obtenga preguntas personalizadas para prepararse para entrevistas sin esfuerzo",
        },
        hero: {
          title: "Descubra el poder de la IA para su búsqueda de empleo",
          subtitle:
            "Obtenga preguntas personalizadas para prepararse para entrevistas sin esfuerzo",
        },
        features: {
          title: "Características",
          description:
            "Descubra las características únicas que hacen que esta herramienta sea perfecta para los candidatos.",
          details: "Más detalles sobre las características",
          feature1: {
            title: "Preguntas basadas en el CV",
            description:
              "Genere preguntas personalizadas basadas en su CV para ayudarle a prepararse de manera efectiva.",
          },
          feature2: {
            title: "Preguntas basadas en la URL de la oferta de trabajo",
            description:
              "Introduzca una URL de oferta de trabajo y obtenga preguntas alineadas con los requisitos del puesto.",
          },
          feature3: {
            title: "Preguntas basadas en detalles personalizados",
            description:
              "Agregue detalles personalizados para generar preguntas adaptadas a sus necesidades.",
          },
          feature4: {
            title: "Guarde sus preguntas",
            description:
              "Guarde sus preguntas generadas para una preparación futura y un acceso fácil.",
          },
        },
        callToAction: {
          startWith: "Comience con",
          poweredTool: "Impulsado por la herramienta de IA",
          assistantDescription:
            "Haga que su preparación para entrevistas sea eficiente y enfocada con nuestro asistente de IA.",
          decorativeImageAlt: "Imagen de fondo decorativa",
          installApp: "Instalar la aplicación",
        },
      },
      login: {
        meta: {
          title: "Iniciar sesión",
          description:
            "Inicie sesión para acceder a su cuenta y comenzar a prepararse para entrevistas.",
        },
        providers: "Use uno de los siguientes proveedores",
        noAccount: "¿No tiene una cuenta? Cree una",
      },
      register: {
        meta: {
          title: "Registrarse",
          description:
            "Cree una nueva cuenta y comience a prepararse para entrevistas.",
        },
        haveAccount: "¿Tiene una cuenta? Inicie sesión",
      },
      features: {
        cv_questions_title: "Preguntas basadas en el CV",
        cv_questions_description:
          "Prepárese de manera efectiva con insights adaptados a su CV.",
        url_questions_title: "Preguntas basadas en la URL",
        url_questions_description:
          "Obtenga preguntas basadas en la URL de la descripción del puesto proporcionada.",
        custom_questions_title: "Preguntas personalizadas",
        custom_questions_description:
          "Genere preguntas adaptadas a sus necesidades específicas de preparación.",
      },
      confirmEmail: {
        title: "Confirme su correo electrónico",
      },
      jobAnalysis: "Analizando la oferta de trabajo",
      jobAnalysisNew: "Generando nuevas preguntas",
      recruitmentTask: "Tarea práctica",
      questions: {
        method: {
          title: "Seleccionar el método de preguntas",
          label: "Elija cómo generar preguntas",
          types: {
            url: {
              title: "Método URL",
              description:
                "Genere preguntas a partir de una URL de oferta de trabajo",
            },
            cv: {
              title: "Método CV",
              description: "Genere preguntas basadas en su CV",
            },
            custom: {
              title: "Método personalizado",
              description:
                "Genere preguntas personalizadas a partir de entradas personalizadas",
            },
          },
        },
      },
      product: {
        title: "Producto",
        description:
          "Descubra las características que hacen que la preparación para entrevistas de trabajo sea fácil y efectiva.",
        differentSettings:
          "Pruebe diferentes configuraciones y genere nuevas preguntas",
        saveChats: "Guarde sus chats",
        logInToSave: "Inicie sesión o cree una cuenta para guardar sus chats",
        meta: {
          title: "Recruiter",
          description:
            "Descubra cómo la IA puede ayudarle a prepararse para el trabajo de sus sueños.",
        },
      },
      recruiter: {
        title: "Herramientas para candidatos",
        description:
          "Descubra cómo la IA puede ayudarle a prepararse para el trabajo de sus sueños.",
        meta: {
          title: "Recruiter",
          description:
            "Descubra cómo la IA puede ayudarle a prepararse para el trabajo de sus sueños.",
        },
      },
      noAnswer: "Sin respuesta",
      auth: {
        login: "Iniciar sesión",
        password: "Contraseña",
        passwordRepeat: "Repetir contraseña",
        register: "Registrarse",
      },
      share: {
        title: "Compartir o guardar sus resultados",
        subtitle: "Guarde un enlace a sus resultados o compártalos en línea",
      },
      validations: {
        fileRequired: "El archivo es requerido",
        fileSize: "El tamaño máximo del archivo es de {size}MB.",
        fileTypes: "Solo se aceptan archivos de tipo .jpg, .jpeg, .png",
      },
      profile: {
        meta: {
          title: "Perfil",
          description:
            "Obtenga preguntas personalizadas para prepararse para entrevistas sin esfuerzo",
        },
        title: "Perfil",
        recentActivity: "Su actividad reciente con Aipplied",
        noChats: {
          title: "No se encontraron chats",
          description:
            "Nada de qué preocuparse... puede comenzar un nuevo chat y encontrar el trabajo de sus sueños",
          startNew: "Comenzar un nuevo chat",
        },
        deleteAccount: {
          title: "Eliminar cuenta",
          description:
            "¡Advertencia! Todos los datos se eliminarán permanentemente. También se eliminarán todos los chats creados por usted.",
          beCareful: "¡Tenga cuidado!",
          irreversible: "Esta acción es irreversible",
        },
      },
      profileSettings: {
        title: "Configuración del perfil",
        dangerZone: "Zona de peligro",
        recentActivity: "Su actividad reciente con Aipplied",
        noChats: {
          title: "No se encontraron chats",
          description:
            "Nada de qué preocuparse... puede comenzar un nuevo chat y encontrar el trabajo de sus sueños",
          startNew: "Comenzar un nuevo chat",
        },
        deleteAccount: {
          title: "Eliminar cuenta",
          description:
            "¡Advertencia! Todos los datos se eliminarán permanentemente. También se eliminarán todos los chats creados por usted.",
          beCareful: "¡Tenga cuidado!",
          irreversible: "Esta acción es irreversible",
        },
      },
      chat: {
        restrictionsSuccess: {
          title: "Restricciones del chat actualizadas",
          description:
            "Las restricciones del chat se actualizaron correctamente.",
        },
        restrictionsFailed: {
          title: "Error al actualizar las restricciones del chat",
        },
        restrictionsEdit: {
          title: "Editar restricciones",
          description:
            "Realice cambios en las restricciones del chat. Haga clic en Guardar cuando haya terminado.",
        },
      },
      privacy: {
        meta: {
          title: "Privacidad",
          description: "Política de privacidad de Aipplied",
        },
        sections: {
          intro: {
            title: "Introducción",
            content:
              "Respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información.",
          },
          dataCollection: {
            title: "Recopilación de datos",
            content:
              "Recopilamos información como su nombre, correo electrónico y historial de chat cuando se registra y utiliza nuestro servicio.",
          },
          dataUsage: {
            title: "Cómo usamos sus datos",
            content:
              "Sus datos se utilizan para proporcionar experiencias personalizadas, mejorar nuestros servicios y garantizar la seguridad de su cuenta.",
          },
          dataSharing: {
            title: "Compartir datos",
            content:
              "No compartimos sus datos personales con terceros, excepto cuando la ley lo exige.",
          },
          security: {
            title: "Medidas de seguridad",
            content:
              "Tomamos medidas apropiadas para proteger sus datos contra el acceso no autorizado, la alteración o la destrucción.",
          },
        },
      },
      terms: {
        meta: {
          title: "Términos",
          description: "Términos de Aipplied",
        },
        sections: {
          acceptance: {
            title: "Aceptación de los términos",
            content:
              "Al usar nuestro servicio, usted acepta cumplir con estos términos.",
          },
          userResponsibilities: {
            title: "Responsabilidades del usuario",
            content:
              "Los usuarios deben proporcionar información precisa y cumplir con las leyes aplicables.",
          },
          account: {
            title: "Registro y seguridad de la cuenta",
            content:
              "Los usuarios son responsables de mantener la seguridad de sus cuentas.",
          },
          termination: {
            title: "Terminación del servicio",
            content:
              "Nos reservamos el derecho de suspender o terminar cuentas que violen nuestros términos.",
          },
          limitation: {
            title: "Limitación de responsabilidad",
            content:
              "No somos responsables de ningún daño derivado del uso de nuestro servicio.",
          },
        },
      },
      apiResponses: {
        emailNotVerified: "Correo electrónico no verificado",
        invalidCredentials: "Credenciales inválidas",
        chatNotFound: "Chat no encontrado",
        chatNowAllowed: "No tiene permiso para acceder a este chat",
        somethingWentWrong: "Algo salió mal",
        missingCode: "Código faltante",
        emailConfirmed:
          "Correo electrónico confirmado con éxito. ¡Ahora puede iniciar sesión en su cuenta!",
        failedToConfirmEmail: "Error al confirmar el correo electrónico",
        invalidChatId: "ID de chat inválido",
        failedToSaveChat: "Error al guardar el chat",
        chatIdRequired: "Se requiere el ID del chat",
        updateChatFailed: "Error al actualizar el chat",
        userNotAuthenticated: "El usuario no está autenticado",
        failedToFetchUserChats: "Error al obtener los chats del usuario",
        incorrectPassword: "Contraseña incorrecta",
        missingUri: "URI faltante",
        issueFetchingPage: "Problema al obtener la página",
        emailTaken: "El correo electrónico ya está en uso",
        accountCreated:
          "Cuenta creada con éxito. Para confirmar su cuenta, revise su correo electrónico.",
        failedToCreateAccount: "Error al crear la cuenta",
        failedToSendVerificationEmail:
          "Error al enviar el correo electrónico de verificación",
      },
    },
  },
}));
