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
  language?: string;
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
  userId?: string;
  restricted?: boolean;
  authorizedEmails?: string[];
  createdAt: string;
  user?: User;
};

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  provider: string;
};
