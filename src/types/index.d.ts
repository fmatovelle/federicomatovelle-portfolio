export type Project = {
  id?: string;
  title: string;
  year: number;
  tags: string[];
  cover: string;   // /archivo en public (jpg/png/svg)
  slug: string;    // /projects/slug
  repo?: string;   // GitHub opcional
  live?: string;   // URL deploy (producción)
  description?: string;
};
