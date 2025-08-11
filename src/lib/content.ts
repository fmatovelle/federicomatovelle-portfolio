import type { Project } from '@/types';
import profile from '@/data/profile.json';

export const SITE = profile.site;
export const VIDEO_URL: string = profile.video_url;
export const PROJECTS: Project[] = profile.projects as Project[];
export const GALLERY = profile.gallery;
