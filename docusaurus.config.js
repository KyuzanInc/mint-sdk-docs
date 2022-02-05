/** @type {import('@docusaurus/types').DocusaurusConfig} */

const URL_REPO = "https://github.com/KyuzanInc/mint-sdk-js";

module.exports = {
  title: "Mint Developers",
  tagline: "Mint Developers",
  url: "https://kyuzaninc.github.io",
  baseUrl: "/mint-sdk-docs/",
  onBrokenLinks: "warn",
  trailingSlash: false,
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "KyuzanInc", // Usually your GitHub org/user name.
  projectName: "mint-sdk-docs", // Usually your repo name.
  i18n: {
    defaultLocale: "jp",
    locales: ["jp", "en"],
  },
  themeConfig: {
    image: "img/ogp.png",
    metadata: [{ name: "twitter:card", content: "summary_large_image" }],
    navbar: {
      title: "Mint Developers",

      items: [
        {
          href: "https://mintnft.jp",
          label: "Mint",
          position: "right",
        },
        {
          href: URL_REPO,
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.npmjs.com/package/@kyuzan/mint-sdk-js",
          label: "npm",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "/mint-sdk-docs/docs/api",
          label: "Docs",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Powered by Kyuzan Inc.",
        src: "img/logo_footer.svg",
        href: "https://kyuzan.com",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Kyuzan Inc. Built with Docusaurus.`,
    },
  },
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: [
          "./mint-sdk-js/src/index.ts",
          "./mint-sdk-js/src/strategies/index.ts",
          // "./mint-sdk-js/src/apiClientV2/index.ts",
          "./mint-sdk-js/src/constants/index.ts",
          // './mint-sdk-js/src/Errors.ts',
        ],
        tsconfig: "./mint-sdk-js/tsconfig.json",
        out: "api",
        sidebar: {
          categoryLabel: "@kyuzan/mint-sdk-js",
          position: 1,
        },
      },
    ],
    "@docusaurus/plugin-ideal-image",
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   // Please change this to your repo.
        //   editUrl: URL_REPO,
        // },
        theme: {
          customCss: require.resolve("./src/css/index.css"),
        },
      },
    ],
  ],
};
