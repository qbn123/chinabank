<template>
    <div>
        <swiper :direction="direction">
            <div class="swiper-slide" v-for="(item,index) in bannerImgs" :key="index">
                <!--            <a :href="item.jumpLink">-->
                <!--                <img :src="item.image" :title="item.bottomTitle">-->
                <!--            </a>-->
                <div v-if="item.isJump">
                    <a :href="item.jumpLink">
                        <img :src="item.image" alt="">
                    </a>
                </div>
                <div v-else>
                    <img :src="item.image" alt="">
                </div>
            </div>
        </swiper>
        <swiper-bellow-text></swiper-bellow-text>
    </div>
</template>

<script>
    import {getBanner} from '@/network/home'
    import Swiper from '@/components/common/Swiper'
    import SwiperBellowText from "./SwiperBellowText";
    // import SwiperBellowText from "./SwiperBellowText";

    export default {
        name: "HomeSwiper",
        data(){
            return{
                // fade:'fade',
                direction:'vertical',
                bannerImgs:[],
                currentIndex:0,
                currIndex:null
            }
        },
        components:{
            Swiper,
            SwiperBellowText,
        },
        created() {
            this.getBannerImg()
        },
        mounted() {

        },
        methods:{
            //获取轮播图
            async getBannerImg(){
                const {data:res}=await getBanner()
                this.bannerImgs=res;
            }
        }
    }
</script>

<style scoped lang="scss">
    img{
        width:100%;
        height:300px;
        cursor:pointer;
    }
</style>