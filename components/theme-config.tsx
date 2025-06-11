const raw = document.getElementById('mkdocs-config').textContent;
const themeConfig = JSON.parse(raw);
console.log("themeConfig", themeConfig);
interface IThemeConfig {
    site_name: string;
}
export { themeConfig };
export type { IThemeConfig };