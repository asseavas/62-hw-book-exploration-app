export interface Genre {
  id: string
  title: string;
  description: string;
}

export interface Book {
  title: string;
  author: string;
  year: string;
  image: string;
}

export interface Writer {
  name: string;
  year: string;
  image: string;
  information: string;
}