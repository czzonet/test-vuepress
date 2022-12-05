import { resolve } from "path";
import { defaultTheme, defineUserConfig, viteBundler } from "vuepress";
import { parseSideBar } from "../../lib/parseSideBar";
import { getFileTree } from "../../lib/getFileTree";
const str文档根目录 = resolve(__dirname, "../");

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  theme: defaultTheme({
    // 默认主题配置
    themePlugins: {
      backToTop: true,
      nprogress: true,
    },
    logo: "/images/favicon.ico",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
    ],
    sidebar: parseSideBar(getFileTree(str文档根目录, "", [])).children,
  }),
  bundler: viteBundler({
    viteOptions: {
      server: {
        watch: {
          usePolling: true,
        },
      },
    },
    vuePluginOptions: {},
  }),
});
