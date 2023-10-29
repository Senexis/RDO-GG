import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'RDO.GG',
  tagline: 'Home of the RDO.GG API and RDO Compendium',
  titleDelimiter: ' - ',
  url: 'https://rdo.gg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Senexis',
  projectName: 'RDO-Compendium-GG',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'wiki',
          showLastUpdateTime: true,
        },
        blog: {
          path: 'news',
          routeBasePath: 'news',
          blogTitle: 'News',
          blogDescription: 'Read all the latest news about the RDO.GG API and RDO Compendium',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Recent articles',
        },
        theme: {
          customCss: [
            './src/css/styles.css',
            './src/css/redoc.css',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // announcementBar: {
    //   id: 'announcement-bar-vacation',
    //   content: '🏖️ Please note there may be reduced support between July 19th and July 27th due to vacation.',
    //   textColor: 'var(--ifm-font-color-base)',
    //   backgroundColor: 'var(--ifm-footer-background-color)',
    //   isCloseable: true,
    // },
    navbar: {
      logo: {
        alt: 'RDO.GG',
        src: 'img/menu.png',
      },
      items: [
        {
          type: 'doc',
          label: 'Information & Guides',
          position: 'left',
          docId: 'getting-started',
        },
        {
          to: '/news',
          label: 'News & Updates',
          position: 'left',
        },
        {
          href: 'https://tunables.rdo.gg/',
          label: 'Tunables',
          position: 'left',
        },
        {
          href: 'https://rdo.gg/status/',
          label: 'Status',
          position: 'left',
        },
        {
          href: 'https://rdo.gg/patreon/',
          target: '_blank',
          position: 'right',
          className: 'fa-brands fa-patreon',
          title: 'Support the bot on Patreon',
          'aria-label': 'Support the bot on Patreon',
        },
        {
          href: 'https://rdo.gg/twitter/',
          target: '_blank',
          position: 'right',
          className: 'fa-brands fa-twitter',
          title: 'Visit @rdo_gg on Twitter',
          'aria-label': 'Visit @rdo_gg on Twitter',
        },
        {
          href: 'https://rdo.gg/discord/',
          target: '_blank',
          position: 'right',
          className: 'fa-brands fa-discord',
          title: 'Join the support Discord',
          'aria-label': 'Join the support Discord',
        },
        {
          to: '/api',
          position: 'right',
          className: 'fa-solid fa-code',
          title: 'Learn how to use the API',
          'aria-label': 'Learn how to use the API',
        },
      ],
    },
    footer: {
      links: [
        {
          label: 'Privacy Policy',
          to: 'wiki/legal/privacy-policy',
        },
        {
          label: 'Terms of Service',
          to: 'wiki/legal/terms-of-service',
        }
      ],
      copyright: `
        © ${new Date().getFullYear()} - RDO.GG<br>
        <small class="opacity-60">
          Red Dead Redemption, Red Dead Online, RDR and RDO are registered trademarks by Rockstar Games.<br>
          This site and bot are not endorsed, recognised, sponsored, or approved by Rockstar Games.
        </small>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'],
        redirects: [
          { from: '/bot', to: '/' },
          { from: '/credits', to: '/wiki/category/credits' },
          { from: '/deprecation', to: '/news/2022/03/01/message-command-deprecation' },
          { from: '/faq', to: '/wiki/faq' },
          { from: '/guides', to: '/wiki/category/guides' },
          { from: '/guides/basics', to: '/wiki/guides/commands' },
          { from: '/guides/settings', to: '/wiki/guides/settings' },
          { from: '/help', to: '/wiki/guides/commands' },
          { from: '/knowledge-base', to: '/wiki/getting-started' },
          { from: '/knowledge-base/all-about-premium', to: '/wiki/guides/premium' },
          { from: '/knowledge-base/message-command-deprecation', to: '/news/2022/03/01/message-command-deprecation' },
          { from: '/knowledge-base/privacy-policy', to: '/wiki/legal/privacy-policy' },
          { from: '/knowledge-base/terms-of-service', to: '/wiki/legal/terms-of-service' },
          { from: '/lists', to: '/wiki/category/lists' },
          { from: '/migration', to: '/news/2022/05/20/rdo-compendium-migration' },
          { from: '/patrons', to: '/wiki/credits/patrons' },
          { from: '/premium', to: '/wiki/guides/premium' },
          { from: '/privacy', to: '/wiki/legal/privacy-policy' },
          { from: '/terms', to: '/wiki/legal/terms-of-service' },
          { from: '/toasts', to: '/wiki/lists/toasts' },
          { from: '/translators', to: '/wiki/credits/translators' },
          { from: '/upsale', to: '/wiki/guides/premium' },
          { from: '/wiki/privacy-policy', to: '/wiki/legal/privacy-policy' },
          { from: '/wiki/terms-of-service', to: '/wiki/legal/terms-of-service' },
        ],
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        max: 1920,
        disableInDev: false,
      },
    ],
    () => ({
      name: 'tailwind',
      configurePostCss(postcssOptions) {
        postcssOptions.plugins.push(require('tailwindcss'));
        postcssOptions.plugins.push(require('autoprefixer'));
        return postcssOptions;
      },
    }),
    () => ({
      name: 'yaml-loader',
      configureWebpack() {
        return {
          mergeStrategy: { 'module.rules': 'prepend' },
          module: {
            rules: [
              {
                test: /\.ya?ml$/,
                use: 'yaml-loader',
              },
            ]
          },
        };
      },
    }),
  ],
};

export default config;
