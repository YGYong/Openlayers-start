# 框选范围修改

:::details 代码示例

```vue
<template>
  <div ref="mapContainer" id="map"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Map from "ol/Map.js";
import XYZ from "ol/source/XYZ.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import "ol/ol.css";
import { platformModifierKeyOnly } from "ol/events/condition";
import Extent from "ol/interaction/Extent.js";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";

const mapContainer = ref(null);
let map = null;
const view = new View({
  center: [116.4074, 39.9042], // 北京市中心经纬度
  zoom: 10,
  projection: "EPSG:4326", // 默认使用Web Mercator投影，需要设置为EPSG:4326经纬度
  // extent: [73.66, 3.86, 135.05, 53.55], // 设置地图平移范围（当前为中国区域）
});
onMounted(async () => {
  map = new Map({
    target: mapContainer.value,
    layers: [
      new TileLayer({
        // 设置高德地图为数据源底图
        source: new XYZ({
          // 设置路网图层
          url: "https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",
        }),
      }),
    ],
    view,
  });

  // 定义一个Extent交互
  const extentInteraction = new Extent({
    condition: platformModifierKeyOnly, // 按住Ctrl键时激活交互
    boxStyle: new Style({
      stroke: new Stroke({
        color: "#ff0000",
        width: 2,
      }),
    }),
  });

  // 将Extent交互添加到地图
  map.addInteraction(extentInteraction);

  // 监听Extent交互的change事件
  extentInteraction.on("extentchanged", (event) => {
    const extent = event.target.getExtent();
    console.log("选择的范围:", extent);
  });
});
</script>
<style scoped>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
```

:::

<video controls width="600">
  <source src="../Aassets/extent.mp4" type="video/mp4" />
  您的浏览器不支持HTML5视频标签。
</video>