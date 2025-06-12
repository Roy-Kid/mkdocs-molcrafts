const raw = document.getElementById("mkdocs-config").textContent;
const themeConfig = JSON.parse(raw);
interface IThemeConfig {
  site_name: string;
  nav?: Array<Record<string, string>>;
}
export { themeConfig };
export type { IThemeConfig };
