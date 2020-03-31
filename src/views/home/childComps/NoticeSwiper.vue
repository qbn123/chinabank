<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in imgs">
                <a href="#">
                    <img :src="item.image" alt="">
                    <span>{{item.title}}</span>
                </a>
            </div>
            <!-- 如果需要导航按钮 -->
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import {conServiceBanner} from '@/network/home'
    export default {
        name: "NoticeSwiper",
        data(){
            return{
                mySwiper2:null,
                imgs:[]
            }
        },
        props:{
            direction:{
                type:String,
                default(){
                    return 'vertical'
                }
            },
            loop:{
                type:Boolean,
                default:true
            },
            delay:{
                type:Number,
                default:2000
            },
            effect:{
                type:String,
                default(){
                    return 'fade'
                }
            }
        },
        created(){
            this.getServiceImgs()
        },
        methods:{
            // 网络请求
            getServiceImgs(){
                conServiceBanner({
                    bankCategoryId:'42193760720367616'
                }).then(res=>{
                    this.imgs=res.data.content;
                })
            }
        },
        mounted(){
            this.$nextTick(()=>{

            })
        },
        updated() {
            this.mySwiper2 = new Swiper ('.swiper-container',{
                direction:'horizontal', // 垂直切换选项
                // autoplay:true,
                slidesPerView : 5,
                slidesPerGroup : 5,
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        }
    }
</script>

<style scoped lang="scss">
    .swiper-container{
        margin-top:20px;
        cursor: pointer;
        .swiper-slide{
            a{
                display: flex;
                flex-direction: column;
                width:60px;
                text-align: center;
                color:#898989;
                font-size: 12px;
                img{
                    margin-bottom:5px;
                }
            }
        }
    }
    /*.allContent{
        display: flex;
        .swiper-button-prev{
            position:absolute;
            left:520px;
            top:600px;
        }
        .swiper-button-next{
            position:absolute;
            right:200px;
            top:600px;
        }
        .swiper-container{
            margin-top:20px;
            cursor: pointer;
            .swiper-slide{
                a{
                    display: flex;
                    flex-direction: column;
                    width:50px;
                    text-align: center;
                    color:#898989;
                    font-size: 12px;
                    img{
                        margin-bottom:5px;
                    }
                }
            }
        }
    }*/

    @import "../../../../node_modules/swiper/css/swiper.css";

</style>