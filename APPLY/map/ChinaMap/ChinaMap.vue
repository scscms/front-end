<template>
<div class="china-map">
  <div class="mapTip" v-if="tipHtml" v-html="tipHtml" :style="tipStyle"></div>
  <div :style="style">
    <svg version="1.1" :height="style.height" :width="style.width" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;" viewBox="0 0 565 475">
      <path v-for="item in mapData" :key="item.key" :fill="item.disabled?item.disFill:item.fill" :stroke="item.stroke" :stroke-width="item.strokeWidth" :d="item.d" stroke-linejoin="round" @mouseout="handleMouse('out',item)" @mouseover="handleMouse('over',item)" @click="handleMouse('click',item)" :style="item.disabled?item.disStyle:item.style"></path>
    </svg>
  </div>
</div>
</template>

<script>
  import {mapData} from './chinaMapData'
  export default {
    name: 'china-map',
    props: {
      width: {type: Number, default: 500},
      height: {type: Number, default: 400},
      showTip: {type: Boolean, default: true},
      data: {
        type: Object,
        default: function() {
          return {}
        }
      },
      config: {
        type: Object,
        default: function() {
          return {}
        }
      }
    },
    data() {
      return {
        mapData: [],
        tipHtml: '背景',
        tipStyle: {
          left: 0,
          top: 0
        },
        style: {
          position: 'relative',
          overflow: 'hidden',
          width: 0,
          height: 0
        },
        stateData: {
          strokeWidth: 1, //间隙大小
          strokeColor: '#F9FCFE', //间隙颜色
          fillColor: '#AAD5FF', //默认颜色
          fillHoverColor: '#feb41c', //鼠标经过颜色
          fillSelectedColor: '#E32F02', //选中后颜色
          fillDisabledColor: '#eeeeee' //不可选颜色
        }
      }
    },
    created() {
      let arr = this.mapData
      let d = this.stateData
      this.style.width = this.width + 'px'
      this.style.height = this.height + 'px'
      Object.assign(d, this.config)
      mapData.forEach((obj, i) => {
        arr.push(Object.assign({
          key: i + obj.pinyin,
          name: obj.name,
          d: obj.d,
          disabled: false,
          fill: d.fillColor,
          fillColor: d.fillColor,
          fillHoverColor: d.fillHoverColor,
          disFill: d.fillDisabledColor,
          strokeWidth: d.strokeWidth,
          stroke: d.strokeColor,
          style: {cursor: 'pointer', strokeLinejoin: 'round', strokeColor: '#ff0000'},
          disStyle: {cursor: 'default', strokeLinejoin: 'round'}
        }, this.data[obj.pinyin] || {}))
      })
      document.addEventListener('mousemove', this.getPosition, false)
    },
    methods: {
      getPosition(e) {
        let s = this.tipStyle
        s.left = e.offsetX + 'px'
        s.top = e.offsetY + 'px'
      },
      handleMouse(type, item) {
        switch (type) {
          case 'out':
            this.tipHtml = null
            item.fill = item.fillColor
            break
          case 'over':
            if (!item.disabled) {
              this.tipHtml = item.name
              item.fill = item.fillHoverColor
            }
            break
          case 'click':
            item.fill = item.fillSelectedColor
            break
          default:
        }
      }
    },
    beforeDestroy() {
      document.removeEventListener('mousemove', this.getPosition)
    }
  }
</script>
<style lang='less'>
.china-map{
  .mapTip {
    position: absolute;
    z-index: 10;
    padding: 8px;
    background: #fff;
    border: 2px solid #2385B1;
    border-radius: 4px;
    font-size: 12px;
    color: #333;
    width:80px;
    transform: translate(-40px, -20px);
    &::after{
      content: '';
      position: absolute;
      background-color: #fff;
      left:50%;
      bottom:-7px;
      width:8px;
      height:8px;
      border-right: 2px solid #2385B1;
      border-bottom: 2px solid #2385B1;
      transform:rotate(45deg);
    }
    span {
      padding: 0 5px 0 3px;
    }
    strong {
      font-weight: normal;
      color: #2770B5;
    }
  }
}
</style>
