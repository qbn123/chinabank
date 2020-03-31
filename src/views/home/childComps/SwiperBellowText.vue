<template>
    <div slot="bottomText" class="bottomContent">
        <span v-for="(item,index) in bannerImgs"
                :class="{'active':currentIndex==index}"
                @click="changeBanner(index)">
            {{item.topTitle}}<br/>{{item.bottomTitle}}
        </span>
    </div>
</template>

<script>
    import {getBanner} from '@/network/home'
    export default {
        name: "SwiperBellowText",
        data(){
            return{
                currentIndex:0,
                bannerImgs:[],
            }
        },
        created() {
            this.getBannerImg()
            // this.changeIndex()
        },
        mounted(){
            this.$bus.$on('autoImg',(count)=>{
                this.currentIndex=count;
            })
        },
        methods:{
            //获取轮播图
            async getBannerImg(){
                const {data:res}=await getBanner()
                this.bannerImgs=res;
            },
            changeBanner(index){
                this.$bus.$emit('changeBanner',index)
                this.currentIndex=index;
            }
        },
    }
</script>

<style scoped lang="scss">
    .bottomContent{
        width:100%;
        background: #fff;
        height:80px;
        border-radius: 5px;
        color:#898989;
        margin-bottom:10px;
        .active{
            color:#000;
        }
        span{
            height:80px;
            padding:20px 0;
            display: inline-block;
            width:20%;
            text-align: center;
            cursor: pointer;
            border-right:1px solid #ececec;
        }
    }
</style>