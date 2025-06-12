
interface IThemeConfig {
  config: {
    site_name: string;
  },
  nav: object,
};

const themeConfig = {
  config: window.mkdoc_config,
  nav: window.mkdoc_nav,
}

export { themeConfig };
export type { IThemeConfig };
