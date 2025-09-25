export type Comment = {
  id: string;
  name: string;
  text: string;
}

export type News = {
  id: string;
  title: string;
  date: string; // ISO ou formato legível
  content: string;
  image?: string;
  categories: string[];
  comments?: Comment[];
}

