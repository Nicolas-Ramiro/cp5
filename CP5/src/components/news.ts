export interface News {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
  categories: string[];
  comments: { name: string; text: string }[];
}