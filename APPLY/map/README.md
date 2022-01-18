# 地图相关<sup>shine</sup>

* [中国地图vue组件](ChinaMap)
* [Map示例](http://geocodezip.com/)
### 开放地图
https://wiki.openstreetmap.org/wiki/Tiles#Servers

####  [Nominatim地名搜索](https://wiki.openstreetmap.org/wiki/Zh-hans:Nominatim)
####　地理反查
    https://nominatim.openstreetmap.org/reverse.php?lat=23.10459&lon=113.36704&zoom=16&format=jsonv2&accept-language=en
- lat,lon=经纬度值
- zoom = [1,18] 地图尺寸级别
- format=[html|xml|json|jsonv2]
- json_callback=回调函数  必须要求format=[json|jsonv2]

  > 源代码：http://github.com/twain47/Nominatim
#### google map 地理反查
https://maps.google.com/maps/api/geocode/json?latlng=23.10459,113.36704&sensor=true_or_false&key=开发key

### mapbox地图
https://docs.mapbox.com/help/getting-started/web-apps/
http://www.mapbox.cn/help/how-mapbox-works/

### google map
https://developers.google.com/maps/documentation/javascript/overview

[Google Maps API Tutorial](http://econym.org.uk/gmap/eshapes.htm)
[GoogleMap中扩展图形的画法](https://blog.csdn.net/ZHANGHUI3239619/article/details/78746914)

### Google Map Event 谷歌地图事件
```js
var map = new google.maps.Map(document.getElementById("map"), {
     center: new google.maps.LatLng(39.915, 116.404),
     zoom: 10
});

//地图绑定事件
google.maps.event.addListener(map,"click",function(event){
    console.log('触发点击事件');
});
```
### Google Map 位置搜索
https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service
```js
//https://jsfiddle.net/api/post/library/pure/
const geocoder = new google.maps.Geocoder();
geocoder.geocode( { 'address': '广州市'}, function(results, status) {
  if (status === google.maps.GeocoderStatus.OK) {
    if (status !== google.maps.GeocoderStatus.ZERO_RESULTS) {
      if (results && results.length > 0)
        map.fitBounds(results[0].geometry.viewport);
    } else {
      alert("No results found");
    }
  } else {
    alert("Geocode was not successful for the following reason: " + status);
  }
});
```
```
mapTypeId: "roadmap" 路线图
mapTypeId: "satellite" 卫星
mapTypeId: "hybrid" 混合的
```

|事件|	说明|
|  ----  | ----  |
|bounds_changed	|地图边界改变时触发|
|center_changed	|地图中心点改变时触发|
|click	|点击时触发|
|dblclick	|双击时触发|
|drag	|拖拽时触发|
|dragstart	|拖拽开始时触发|
|dragend	|拖拽结束时触发|
|heading_changed	|地图标题改变时触发|
|idle	|平移或缩放后地图空闲时触发|
|maptypeid_changed|	地图类型发生改变时触发|
|mousemove	|鼠标移动时触发|
|mouseout	|鼠标移出时触发|
|mouseover	|鼠标移入时触发|
|projection_changed|	投影发生改变时触发|
|resize	|当div更改大小时，开发人员应触发此事件：google.maps.event.trigger(map, ‘resize’)|
|rightclick	|鼠标右键点击时触发|
|tilesloaded|	可见图块完成加载时触发|
|tilt_changed|	地图倾斜属性改变时触发|
|zoom_changed|	地图缩放时触发|
