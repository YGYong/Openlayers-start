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
      { text: "Leaflet基础", link: "/leaflet/Basics/00_简介.md" },
      { text: "知识补充", link: "/knowledge/00_引言.md" },
      { text: "Openlayers实践", link: "/openlayers/Practice/01_图层控制.md" },
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
      "/leaflet/Basics/": [
        {
          text: "Leaflet基础",
          items: [
            { text: "介绍", link: "/leaflet/Basics/00_简介.md" },
            { text: "快速开始", link: "/leaflet/Basics/01_快速开始" },
            // { text: "Map对象", link: "/leaflet/Basics/02_map对象" },
            // { text: "UI图层", link: "/leaflet/Basics/03_UI图层" },
            // { text: "栅格图层", link: "/leaflet/Basics/04_栅格图层" },
            // { text: "矢量图层", link: "/leaflet/Basics/05_矢量图层" },
            // { text: "图层补充", link: "/leaflet/Basics/06_图层补充" },
            // { text: "控件", link: "/leaflet/Basics/07_控件" },
            {
              text: "案例_坐标获取",
              link: "/leaflet/Basics/101_综合案例_坐标获取.md",
            },
            {
              text: "案例_图层控制",
              link: "/leaflet/Basics/102_综合案例_图层控制.md",
            },
            {
              text: "案例_图层控制控件",
              link: "/leaflet/Basics/103_综合案例_图层控制器.md",
            },
            {
              text: "案例_聚类图层",
              link: "/leaflet/Basics/104_综合案例_聚类图层.md",
            },
            {
              text: "案例_绘制图层",
              link: "/leaflet/Basics/105_综合案例_绘制图层.md",
            },
            {
              text: "案例_热力图",
              link: "/leaflet/Basics/106_综合案例_热力图.md",
            },
            {
              text: "案例_路径规划",
              link: "/leaflet/Basics/107_综合案例_路径规划.md",
            },
            {
              text: "案例_动态数据",
              link: "/leaflet/Basics/108_综合案例_动态数据.md",
            },
            {
              text: "案例_自定义弹窗",
              link: "/leaflet/Basics/109_综合案例_自定义弹窗.md",
            },
            {
              text: "案例_加载WMS",
              link: "/leaflet/Basics/110_综合案例_加载WMS.md",
            },
            {
              text: "案例_量测工具",
              link: "/leaflet/Basics/111_综合案例_量测工具.md",
            },
            {
              text: "案例_地图截图",
              link: "/leaflet/Basics/112_综合案例_地图截图.md",
            },
          ],
        },
      ],
      "/knowledge": [
        {
          text: "Leaflet基础",
          items: [
            { text: "介绍", link: "/knowledge/00_引言.md" },
            { text: "坐标系", link: "/knowledge/01_坐标系.md" },
            { text: "地图服务", link: "/knowledge/02_地图服务.md" },
            { text: "数据格式", link: "/knowledge/03_数据格式.md" },
            { text: "常用插件", link: "/knowledge/04_常用插件.md" },
            { text: "gis工具", link: "/knowledge/05_gis工具.md" },
          ],
        },
      ],
      "/openlayers/Practice/": [
        {
          text: "Openlayers实践",
          items: [
            {
              text: "基础案例",
              collapsed: true,
              items: [
                {
                  text: "图层控制",
                  link: "/openlayers/Practice/01_图层控制.md",
                },
                {
                  text: "图层分辨率",
                  link: "/openlayers/Practice/24_图层分辨率.md",
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
                  text: "绘制五角星",
                  link: "/openlayers/Practice/18_绘制五角星.md",
                },
                {
                  text: "自定义形状",
                  link: "/openlayers/Practice/30_自定义形状.md",
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
                  text: "动态闪烁",
                  link: "/openlayers/Practice/09_动态闪烁.md",
                },
                {
                  text: "文本碰撞检测",
                  link: "/openlayers/Practice/31_文本碰撞检测.md",
                },
                {
                  text: "分屏对比",
                  link: "/openlayers/Practice/10_分屏对比.md",
                },
                {
                  text: "共享视图",
                  link: "/openlayers/Practice/32_共享视图.md",
                },
                {
                  text: "底图颜色",
                  link: "/openlayers/Practice/13_底图颜色.md",
                },
                {
                  text: "切片调试与经纬网",
                  link: "/openlayers/Practice/16_切片调试与经纬网.md",
                },
                {
                  text: "面元素顶点样式",
                  link: "/openlayers/Practice/17_顶点样式.md",
                },
                {
                  text: "动态数据",
                  link: "/openlayers/Practice/19_动态数据.md",
                },
                {
                  text: "即时渲染",
                  link: "/openlayers/Practice/21_即时渲染.md",
                },
                {
                  text: "Style属性调试",
                  link: "/openlayers/Practice/20_Style属性调试.md",
                },
              ],
            },
            {
              text: "高级案例",
              collapsed: true,
              items: [
                {
                  text: "区域掩膜",
                  link: "/openlayers/Practice/08_区域掩膜.md",
                },
                {
                  text: "绘制箭头线",
                  link: "/openlayers/Practice/25_绘制箭头线.md",
                },
                {
                  text: "长度面积计算",
                  link: "/openlayers/Practice/22_长度面积计算.md",
                },
                {
                  text: "追踪要素",
                  link: "/openlayers/Practice/35_追踪要素.md",
                },
                {
                  text: "图层裁剪",
                  link: "/openlayers/Practice/23_图层裁剪.md",
                },
                {
                  text: "旋转和缩放",
                  link: "/openlayers/Practice/26_旋转和缩放.md",
                },
                {
                  text: "导出PNG",
                  link: "/openlayers/Practice/27_导出PNG.md",
                },
                {
                  text: "图层望远镜",
                  link: "/openlayers/Practice/28_图层望远镜.md",
                },
                {
                  text: "图层放大",
                  link: "/openlayers/Practice/29_图层放大.md",
                },
                {
                  text: "台风模拟",
                  link: "/openlayers/Practice/14_台风模拟.md",
                },
              ],
            },
            {
              text: "WebGL",
              collapsed: true,
              items: [
                {
                  text: "海量数据",
                  link: "/openlayers/Practice/36_海量数据.md",
                },
                {
                  text: "精灵图",
                  link: "/openlayers/Practice/37_精灵图.md",
                },
              ],
            },
            {
              text: "第三方插件",
              collapsed: true,
              items: [
                {
                  text: "gif图加载",
                  link: "/openlayers/Practice/15_加载gif图.md",
                },
                {
                  text: "平滑算法",
                  link: "/openlayers/Practice/34_平滑算法.md",
                },
                {
                  text: "ol-echarts",
                  link: "/openlayers/Practice/11_ol-echarts.md",
                },
                {
                  text: "ol-ext",
                  link: "/openlayers/Practice/12_ol-ext.md",
                },
                {
                  text: "风场ol-wind",
                  link: "/openlayers/Practice/38_风场ol-wind.md",
                },
              ],
            },
            {
              text: "其余案例",
              collapsed: true,
              items: [
                {
                  text: "不同字体",
                  link: "/openlayers/Practice/100_不同字体.md",
                },
                {
                  text: "渲染到任意画布",
                  link: "/openlayers/Practice/101_渲染到任意画布.md",
                },
                {
                  text: "沿线文本",
                  link: "/openlayers/Practice/33_沿线文本.md",
                },
                {
                  text: "风箭",
                  link: "/openlayers/Practice/102_风箭.md",
                },
                {
                  text: "海平面上升",
                  link: "/openlayers/Practice/103_海平面上升.md",
                },
              ],
            },
            {
              text: "基础篇案例",
              collapsed: true,
              items: [
                {
                  text: "加载高德瓦片",
                  link: "/openlayers/Practice/200_加载高德瓦片.md",
                },
                {
                  text: "叠加元素",
                  link: "/openlayers/Practice/201_overlay.md",
                },
                {
                  text:"聚合图层",
                  link:"/openlayers/Practice/202_聚合图层.md",
                },
                {
                  text:"定位跳转",
                  link:"/openlayers/Practice/203_定位跳转.md",
                },
                {
                  text:"框选缩放",
                  link:"/openlayers/Practice/204_框选缩放.md",
                },
                {
                  text:"基础绘制",
                  link:"/openlayers/Practice/205_基础绘制.md",
                },
                {
                  text:"extent修改",
                  link:"/openlayers/Practice/206_extent修改.md",
                },
                {
                  text:"基础编辑",
                  link:"/openlayers/Practice/207_基础编辑.md",
                },
                {
                  text:"基础平移",
                  link:"/openlayers/Practice/208_基础平移.md",
                },
                {
                  text:"基础选择",
                  link:"/openlayers/Practice/209_基础选择.md",
                }
              ],
            }
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/YGYong/Openlayers-start" },
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
  vite: {
    optimizeDeps: {
      include: [
        "monaco-editor/esm/vs/editor/editor.worker",
        "monaco-editor/esm/vs/language/json/json.worker",
        "monaco-editor/esm/vs/language/css/css.worker",
        "monaco-editor/esm/vs/language/html/html.worker",
        "monaco-editor/esm/vs/language/typescript/ts.worker",
      ],
    },
    define: {
      global: "globalThis",
    },
  },
});
