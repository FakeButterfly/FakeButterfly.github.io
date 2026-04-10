import { PLAUSIBLE_DOMAIN, PLAUSIBLE_SCRIPT_URL, SITE_URL } from 'astro:env/client';

import { configClientSchema } from '@/schemas/config';
import { validateData } from '@/utils/validation';

import type { ConfigClientType } from '@/types/config';

const configClientData: ConfigClientType = {
  SITE_URL,
  SITE_URL_CANONICAL: 'https://fakebutterfly.github.io',
  SITE_TITLE: 'FakeButterfly',
  SITE_DESCRIPTION: '记录 AI Agent、Go 工程化、项目重构与学习过程。',
  PLAUSIBLE_SCRIPT_URL,
  PLAUSIBLE_DOMAIN,
  PAGE_SIZE_POST_CARD: 3,
  PAGE_SIZE_POST_CARD_SMALL: 6,
  PAGE_SIZE_PROJECT_CARD: 6,
  MORE_POSTS_COUNT: 3,
  BLUR_IMAGE_DELAY: 200,
  DEFAULT_MODE: 'light',
  DEFAULT_THEME: 'default-light',
  AUTHOR_NAME: 'FakeButterfly',
  AUTHOR_GITHUB: 'https://github.com/FakeButterfly',
  REPO_URL: 'https://github.com/FakeButterfly/FakeButterfly.github.io',
};

export const CONFIG_CLIENT = validateData(configClientData, configClientSchema);