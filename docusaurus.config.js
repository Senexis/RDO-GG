// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RDO.GG',
  tagline: 'Home of the RDO.GG API and RDO Compendium',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'wiki',
          routeBasePath: '/wiki',
        },
        blog: {
          path: './news',
          routeBasePath: 'news',
          blogTitle: 'News',
          blogDescription: 'Read all the latest news about the RDO.GG API and RDO Compendium',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Recent articles',
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        content: 'Welcome to the new RDO.GG. Pardon the dust while we finish the documentation. 🧹',
        textColor: 'var(--ifm-font-color-base)',
        backgroundColor: 'var(--ifm-footer-background-color)',
        isCloseable: false,
      },
      navbar: {
        title: 'RDO.GG',
        logo: {
          alt: 'RDO.GG Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            label: 'Information & Guides',
            position: 'left',
            docId: 'faq',
          },
          {
            to: '/news',
            label: 'News & Updates',
            position: 'left',
          },
          {
            href: 'https://rdo.gg/patreon/',
            target: '_blank',
            position: 'right',
            className: 'fa-brands fa-patreon',
            'aria-label': 'Support the bot on Patreon',
          },
          {
            href: 'https://rdo.gg/twitter/',
            target: '_blank',
            position: 'right',
            className: 'fa-brands fa-twitter',
            'aria-label': 'Visit @RDOCompendium on Twitter',
          },
          {
            href: 'https://rdo.gg/discord/',
            target: '_blank',
            position: 'right',
            className: 'fa-brands fa-discord',
            'aria-label': 'Join the support Discord',
          },
        ],
      },
      footer: {
        links: [
          {
            label: 'Privacy Policy',
            to: 'wiki/privacy-policy',
          },
          {
            label: 'Terms of Service',
            to: 'wiki/terms-of-service',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'],
        redirects: [
          { from: '/help', to: '/wiki/guides/commands' },
          { from: '/knowledge-base', to: '/wiki/faq' },
          { from: '/knowledge-base/all-about-premium', to: '/wiki/guides/premium' },
          { from: '/knowledge-base/message-command-deprecation', to: '/news/2022/03/01/message-command-deprecation' },
          { from: '/knowledge-base/privacy-policy', to: '/wiki/privacy-policy' },
          { from: '/knowledge-base/terms-of-service', to: '/wiki/terms-of-service' },
          { from: '/premium', to: '/wiki/guides/premium' },
          { from: '/upsale', to: '/wiki/guides/premium' },
        ],
      },
    ],
    async function docusaurusTailwindcss() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ]
};

module.exports = config;
