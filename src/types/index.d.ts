export type Project = {
  id?: string;
  title: string;
  year: number;
  tags: string[];
  cover: string;   // /archivo-en-public.jpg
  slug: string;    // ruta interna /projects/slug
  repo?: string;   // URL GitHub opcional
  description?: string;
};
