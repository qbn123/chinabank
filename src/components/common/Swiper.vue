<template>
        <div class="swiper-container1">
            <div class="swiper-wrapper" ref="wrapper">
                <slot></slot>
            </div>
        </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "Swiper",
        data(){
            return{
                mySwiper:null,
                count:1,
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
        },
        mounted(){

        },
        updated() {
            this.mySwiper = new Swiper ('.swiper-container1',{
                direction:'horizontal', // 垂直切换选项
                loop:true, // 循环模式选项
                autoplay:true,
                effect:'fade',
                delay:3000,
                disableOnInteraction: false,
                autoplayDisableOnInteraction : false,
                on:{
                    autoplay:()=>{
                        this.$bus.$emit('autoImg',this.count)
                        this.count++;
                        if(this.count>3){
                            this.count=0
                        }
                    },
                }
            })
            this.$bus.$on('changeBanner',(index)=>{
                this.mySwiper.slideToLoop(index,0,true);
            })
        },
        methods:{
        }
    }
</script>

<style scoped lang="scss">
    .swiper-container1{
        /*height: 300px;*/
        /*background: blanchedalmond;*/
        margin-top:20px;
        cursor: pointer;
    }
    @import "../../../node_modules/swiper/css/swiper.css";
</style>