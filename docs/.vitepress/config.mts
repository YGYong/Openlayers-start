import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "二维地图快速入门",
  description: "openlayers、Leaflet、Mapbox快速入门",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  srcDir: "src",
  // lastUpdated: true,
  themeConfig: {
    // aside: false,
    logo: "/favicon.ico",
    outline: {
      level: "deep",
      label: "目录",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Openlayers基础", link: "/openlayers/Basics/00_简介.md" },
      { text: "实践", link: "/openlayers/Practice/01_图层控制.md" },
      {
        text: "外部链接",
        items: [
          {
            text: "Openlayers 官网",
            link: "https://openlayers.org/",
          },
          {
            text: "GeoJson数据",
            link: "https://geojson.cn/data/atlas/china",
          },
          {
            text: "提取边界",
            link: "https://datav.aliyun.com/portal/school/atlas/area_selector?spm=a2crr.23498931.0.0.7f8f15ddWz5k03",
          },
          {
            text: "地图坐标拾取",
            link: "https://api.map.baidu.com/lbsapi/getpoint/index.html",
          },
          {
            text: "turf.js",
            link: "https://turfjs.fenxianglu.cn/docs/api/along",
          },
          {
            text: "MyUI Map",
            link: "https://myui.vtj.pro/my/ui/map/",
          },
        ],
      },
    ],

    sidebar: {
      "/openlayers/Basics/": [
        {
          text: "Openlayers基础",
          items: [
            { text: "介绍", link: "/openlayers/Basics/00_简介.md" },
            { text: "快速开始", link: "/openlayers/Basics/01_快速开始" },
            { text: "Map对象", link: "/openlayers/Basics/02_map对象" },
            { text: "Layer图层", link: "/openlayers/Basics/03_layer对象" },
            { text: "Source源", link: "/openlayers/Basics/04_source对象" },
            { text: "View对象", link: "/openlayers/Basics/05_view对象" },
            {
              text: "Controls对象",
              link: "/openlayers/Basics/06_controls对象",
            },
            {
              text: "Interaction对象",
              link: "/openlayers/Basics/07_interaction对象.md",
            },
            { text: "矢量图形", link: "/openlayers/Basics/08_矢量图形.md" },
            { text: "事件系统", link: "/openlayers/Basics/09_事件系统.md" },
            { text: "extent", link: "/openlayers/Basics/10_extent.md" },
            { text: "知识补充", link: "/openlayers/Basics/50_知识补充.md" },
            { text: "API补充", link: "/openlayers/Basics/99_常用api.md" },
          ],
        },
      ],
      "/openlayers/Practice/": [
        {
          text: "Openlayers实践",
          items: [
            // { text: "公共函数", link: "/Practice/基础/00_公共函数.md" },
            {
              text: "基础案例",
              items: [
                {
                  text: "图层控制",
                  link: "/openlayers/Practice/01_图层控制.md",
                },
                {
                  text: "点位聚合",
                  link: "/openlayers/Practice/02_点位聚合.md",
                },
                {
                  text: "地图绘制",
                  link: "/openlayers/Practice/03_地图绘制.md",
                },
                {
                  text: "轨迹回放",
                  link: "/openlayers/Practice/04_轨迹回放.md",
                },
                { text: "热力图", link: "/openlayers/Practice/05_热力图.md" },
                {
                  text: "信息窗体",
                  link: "/openlayers/Practice/06_信息窗体.md",
                },
                {
                  text: "量测工具",
                  link: "/openlayers/Practice/07_量测工具.md",
                },
                {
                  text: "区域掩膜",
                  link: "/openlayers/Practice/08_区域掩膜.md",
                },
                {
                  text: "动态闪烁",
                  link: "/openlayers/Practice/09_动态闪烁.md",
                },
                {
                  text: "分屏对比",
                  link: "/openlayers/Practice/10_分屏对比.md",
                },
                {
                  text: "ol-echarts",
                  link: "/openlayers/Practice/11_ol-echarts.md",
                },
                {
                  text: "ol-ext",
                  link: "/openlayers/Practice/12_ol-ext.md",
                },
              ],
            },

            // { text: "实践2", link: "/Practice/01_.md" },
            // { text: "实践3", link: "/Practice/02_.md" },
            // { text: "实践4", link: "/Practice/03_.md" },
            // { text: "实践5", link: "/Practice/04_.md" },
          ],
        },
      ],
      // "/UpdateLog/": [
      //   {
      //     text: "更新日志",
      //     items: [{ text: "更新日志", link: "/UpdateLog/cesiumlog.md" }],
      //   },
      // ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/YGYong/cesium-start" },
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // lastUpdatedText: "最后更新时间",
    search: {
      provider: "local",
    },
  },
});
