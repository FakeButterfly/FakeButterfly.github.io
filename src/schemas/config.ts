import { z } from 'zod';

export const nodeEnvValues = ['development', 'test', 'production'] as const;
export const booleanValues = ['true', 'false', ''] as const;

export const modeValues = ['light', 'dark'] as const;
export const themeValues = ['default-light', 'default-dark', 'green-light', 'green-dark'] as const;

const domainSubdomainRegex =
  /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.(?!-)[A-Za-z0-9-]{1,63}(?<!-))*\.[A-Za-z]{2,}$/;

const localhostWithPortRegex = /^localhost(:\d{1,5})?$/;

const VERCEL_URL = (
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined
) as string;

export const processEnvSchema = z.object({
  NODE_ENV: z.enum(nodeEnvValues),
  PREVIEW_MODE: z
    .enum(booleanValues)
    .transform((value) => value === 'true')
    .default(false),
  SITE_URL: z.url().regex(/[^/]$/, 'SITE_URL should not end with a slash "/"').default(VERCEL_URL),
  PLAUSIBLE_SCRIPT_URL: z.url().or(z.literal('')).optional(),
  PLAUSIBLE_DOMAIN: z
    .string()
    .or(z.enum(['', 'localhost']))
    .optional()
    .refine(
      (value) =>
        value === undefined ||
        value === '' ||
        localhostWithPortRegex.test(value) ||
        domainSubdomainRegex.test(value),
      { message: 'Invalid hostname for PLAUSIBLE_DOMAIN 1' }
    ),
});

export const configServerSchema = processEnvSchema
  .omit({ SITE_URL: true, PREVIEW_MODE: true, PLAUSIBLE_SCRIPT_URL: true, PLAUSIBLE_DOMAIN: true })
  .extend({ PREVIEW_MODE: z.boolean() });

export const configClientSchema = processEnvSchema
  .pick({ SITE_URL: true, PLAUSIBLE_SCRIPT_URL: true, PLAUSIBLE_DOMAIN: true })
  .extend({
    SITE_URL_CANONICAL: z.string().min(1),
    SITE_TITLE: z.string().min(1),
    SITE_DESCRIPTION: z.string().min(1),
    PAGE_SIZE_POST_CARD: z.number(),
    PAGE_SIZE_POST_CARD_SMALL: z.number(),
    PAGE_SIZE_PROJECT_CARD: z.number(),
    MORE_POSTS_COUNT: z.number(),
    BLUR_IMAGE_DELAY: z.number(),
    DEFAULT_MODE: z.enum(modeValues),
    DEFAULT_THEME: z.enum(themeValues),
    AUTHOR_NAME: z.string().min(1),
    AUTHOR_EMAIL: z.email().optional(),
    AUTHOR_GITHUB: z.url(),
    AUTHOR_LINKEDIN: z.url().optional(),
    AUTHOR_TWITTER: z.url().optional(),
    AUTHOR_YOUTUBE: z.url().optional(),
    REPO_URL: z.url(),
  });