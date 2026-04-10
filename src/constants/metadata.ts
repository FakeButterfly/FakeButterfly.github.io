import { CONFIG_CLIENT } from '@/config/client';

import type { Metadata } from '@/types/common';
import type { ValueUnion } from '@/types/utils';

const { SITE_URL, SITE_DESCRIPTION, SITE_TITLE } = CONFIG_CLIENT;

export const defaultOgImage = `${SITE_URL}/images/default/default-open-graph-image.jpg`;

export const titleSeparator = '-';

export const DEFAULT_METADATA: Required<Metadata> = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  image: defaultOgImage,
} as const;

export const PAGE_METADATA = {
  'lists/blog': {
    title: 'Blog',
    description: '从零搭建 AI 应用、Go 工程化、项目重构与知识沉淀。',
  },
  'lists/blog/tags': {
    title: 'Tags',
    description: '按技术主题浏览文章。',
  },
  'lists/blog/tags/tag': {
    title: 'Tag',
    description: '同一技术主题下的文章归档。',
  },
  'lists/blog/explore': {
    title: 'Explore',
    description: '按年份、标签和分类探索文章。',
  },
  'lists/blog/categories': {
    title: 'Categories',
    description: '按内容类型浏览文章。',
  },
  'lists/blog/categories/category': {
    title: 'Category',
    description: '同一分类下的文章归档。',
  },
  'lists/projects': {
    title: 'Projects',
    description: '持续迭代中的项目与工程实践。',
  },
} as const;

export type PageMetadataKey = keyof typeof PAGE_METADATA;

export const OG_IMAGE_PREFIXES = {
  OG_BLOG: 'blog',
  OG_PROJECTS: 'projects',
  OG_PAGES: 'pages',
  OG_LISTS: 'lists',
} as const;

export type OgImagePrefixType = ValueUnion<typeof OG_IMAGE_PREFIXES>;