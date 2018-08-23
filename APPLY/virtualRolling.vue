<template>
    <div class="virtual-dom" ref="coats" @scroll="handleScroll">
        <div :style="{height:style.realHeight}">
            <div :style="{marginTop:style.boxMarginTop}">
                <ul :style="{marginTop:style.listMarginTop}">
                    <li v-if="total === 0" ref="li">加载中...</li>
                    <li v-else v-for="item of dataArray">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    //vue虚拟dom例子
    //实战时建议加上节流函数，可使用addEventListener绑定事件
    export default {
        data () {
            return {
                lines : 9, //可视行数
                lineHeight:39,//每行真实高度
                sourceData:[],//数据源 ajax返回
                total : 0, //总共多少条数据
                curIndex:0,//当前序号（页码）
                style:{
                    realHeight:350,　//真实行高 x lines
                    boxMarginTop:0,
                    listMarginTop:0
                }
            }
        },
        mounted () {
            this.lineHeight = this.$refs.li.scrollHeight
            this.$refs.coats.style.height = this.lineHeight * this.lines + 'px' //重新调整可视范围
            //ajax过程并返回数据
            setTimeout(()=>{
                this.total = Math.ceil(Math.random()*99);
                this.style.realHeight = this.total * this.lineHeight + 'px' //重新调整真实高度
                this.sourceData = new Array(this.total).fill(0).map((v,i)=>({index:i,name:`测试数据${i+1}`}))
            },1000)
        },
        computed:{
            dataArray(){
                let index = this.curIndex * this.lines;
                return this.sourceData.slice(index,Math.min(this.total,index + this.lines * 2));
            }
        },
        methods: {
            handleScroll:function(){
                let top = this.$refs.coats.scrollTop;
                this.style.boxMarginTop = top + 'px';
                this.curIndex = Math.floor(top / this.lineHeight / this.lines);
                this.style.listMarginTop = -1 * (top - this.curIndex * (this.lineHeight * this.lines)) + 'px';
            }
        }
    }
</script>

<style lang="less">
    .virtual-dom{
        margin-left:200px;
        width: 500px;
        border: 1px solid #ccc;
        overflow: auto;
        & > div{
            overflow: hidden;
        }
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            li{
                list-style: none;
                margin: 0;
                padding: 0;
                line-height: 39px;
                height: 39px;
                overflow: hidden;
                &:nth-child(odd){
                    background-color: #f9f9f9;
                }
            }
        }
    }
</style>
