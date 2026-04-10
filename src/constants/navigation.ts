import { ROUTES } from '@/constants/routes';

export const NAVIGATION_ITEMS = [
  {
    title: 'Blog',
    path: ROUTES.BLOG,
  },
  {
    title: 'Projects',
    path: ROUTES.PROJECTS,
  },
  {
    title: 'About',
    path: ROUTES.ABOUT,
  },
] as const;