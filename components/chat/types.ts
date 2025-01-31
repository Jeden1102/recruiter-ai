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

export type Chat = {
  type?: string;
  questions: object;
  task?: string;
  requirements?: string;
  responsibilities?: string;
  position?: string;
  niceToHave?: string;
  file?: string | unknown;
  level?: string;
  url?: string;
  id?: string;
  title?: string;
  email?: string;
  restricted?: boolean;
  authorizedEmails?: string[];
  createdAt: string;
};
