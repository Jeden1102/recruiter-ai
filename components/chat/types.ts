export type Details = {
  url?: string;
  file?: File;
  requirements?: string;
  position?: string;
  niceToHave?: string;
  responsibilities?: string;
};

export type General = {
  task?: boolean;
  answers?: boolean;
  restricted?: boolean;
  authorizedEmails?: string[];
};

export type DifficultLevel = {
  level?: string;
};

export type Question = {
  question: string;
  answer?: string;
};
