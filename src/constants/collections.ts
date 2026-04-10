import { DEFAULT_METADATA } from '@/constants/metadata';

import DefaultPostHeroImage from '@/assets/images/default/default-post-hero-image.jpg';
import DefaultProjectHeroImage from '@/assets/images/default/default-project-hero-image.jpg';

export const BASE_FOLDERS = {
  POST: 'src/content/post',
  PROJECT: 'src/content/project',
} as const;

export const COLLECTIONS = {
  POST: 'post',
  PROJECT: 'project',
} as const;

export const TAGS = [
  'go',
  'gin',
  'vue',
  'astro',
  'javascript',
  'typescript',
  'ai-agent',
  'rag',
  'mcp',
  'jwt',
  'https',
  'mysql',
  'redis',
  'engineering',
  'interview',
  'learning-notes',
] as const;

export const CATEGORIES = [
  {
    name: 'tutorials',
    icon: 'mdi:book-open-page-variant-outline',
  },
  {
    name: 'project-diary',
    icon: 'mdi:source-branch',
  },
  {
    name: 'architecture',
    icon: 'mdi:sitemap-outline',
  },
  {
    name: 'interview-prep',
    icon: 'mdi:briefcase-search-outline',
  },
  {
    name: 'notes',
    icon: 'mdi:notebook-outline',
  },
  {
    name: 'deployment',
    icon: 'mdi:rocket-launch-outline',
  },
] as const;

export const DEFAULTS_POST = {
  TITLE: DEFAULT_METADATA.title,
  DESCRIPTION: DEFAULT_METADATA.description,
  NO_HERO: false,
  HERO_IMAGE: DefaultPostHeroImage,
  HERO_ALT: 'Hero image',
  DRAFT: false,
  CATEGORY: CATEGORIES[0].name,
  TOC: true,
} as const;

export const DEFAULTS_PROJECT = {
  TITLE: DEFAULT_METADATA.title,
  DESCRIPTION: DEFAULT_METADATA.description,
  NO_HERO: false,
  HERO_IMAGE: DefaultProjectHeroImage,
  HERO_ALT: 'Hero image',
  DRAFT: false,
  CATEGORY: CATEGORIES[0].name,
  TOC: true,
} as const;