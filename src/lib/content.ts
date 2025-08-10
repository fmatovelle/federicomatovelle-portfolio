import type { Project } from '@/types';

export const SITE = {
  name: 'Federico Matovelle',
  tagline: 'Barcelona, Spain Based / Available Worldwide',
  roles: ['VISUAL ARTIST / VJ', 'ART DIRECTOR', '3D & GENERATIVE ARTIST'],
  instagram: 'https://www.instagram.com/federico.matovelle/',
  email: 'acidthermal@gmail.com',
};

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Star Wars Blog',
    tags: ['React', 'Bootstrap', 'API REST', 'Front-end'],
    cover: '/starwars.jpg',
    year: 2023,
    slug: 'star-wars-blog',
    repo: 'https://github.com/fmatovelle/StarWarsBlog',
    description:
      'Blog interactivo que consume una API pública de Star Wars y permite favoritos.',
  },
  {
    id: 'p2',
    title: 'Rural Experience',
    tags: ['React', 'Flask', 'API REST', 'Full-stack'],
    cover: '/rural.jpg',
    year: 2023,
    slug: 'rural-experience',
    repo: 'https://github.com/fmatovelle/RuralExperience',
    description:
      'Plataforma para descubrir experiencias turísticas en entornos rurales.',
  },
  {
    id: 'p3',
    title: 'Bubi Crochet',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Static Site'],
    cover: '/bubi.jpg',
    year: 2023,
    slug: 'bubi-crochet',
    repo: 'https://github.com/fmatovelle/BubiCrochet',
    description:
      'Sitio web para la marca de artesanías Bubi Crochet.',
  },
  {
    id: 'p4',
    title: 'Web Template 2',
    tags: ['HTML5', 'CSS3', 'Bootstrap', 'Responsive'],
    cover: '/template2.jpg',
    year: 2022,
    slug: 'web-template-2',
    repo: 'https://github.com/fmatovelle/webtemplate2',
    description:
      'Plantilla base moderna para sitios web con diseño adaptable.',
  },
];

export const GALLERY = Array.from({ length: 16 }).map((_, i) => ({
  image: `https://picsum.photos/seed/gal${i + 1}/1000/1000`,
  alt: `Gallery ${i + 1}`,
}));
