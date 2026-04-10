import path from 'path';

import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import { rehypeExternalLinks } from './plugins/rehype-external-links';
import { remarkReadingTime } from './plugins/remark-reading-time.mjs';
import { envSchema, PROCESS_ENV } from './src/config/process-env';
import { expressiveCodeIntegration } from './src/libs/integrations/expressive-code';
import { sitemapIntegration } from './src/libs/integrations/sitemap';

const { SITE_URL } = PROCESS_ENV;

const remarkPlugins = [remarkReadingTime];
const rehypePlugins = [rehypeExternalLinks];

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  env: envSchema,
  compressHTML: true,
  server: { port: 3000 },
  devToolbar: { enabled: false },
  integrations: [
    expressiveCodeIntegration(),
    sitemapIntegration(),
    react(),
    mdx(),
    tailwind({ applyBaseStyles: false }),
    icon({ iconDir: 'src/assets/icons' }),
    partytown({
      config: { forward: ['dataLayer.push'] },
    }),
  ],
  markdown: { remarkPlugins, rehypePlugins },
  vite: {
    build: {
      sourcemap: false,
    },
    server: {
      allowedHosts: ['localhost'],
    },
    ssr: {
      noExternal: ['zod'],
    },
  },
});