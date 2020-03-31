<template>
    <div class="service">
        <div class="left">
            <span @click="importNotice" :class="{'active':isActive}">重要公告</span>
            <span @click="bankDynamic" :class="{'active':!isActive}">中行动态</span>
            <ul>
                <li v-for="(item,index) in content">
                    {{item.title}}
                </li>
            </ul>
            <router-link to="/custserv/bi2">更多></router-link>
        </div>
        <div class="right">
            <span>便捷服务</span>
            <notice-swiper></notice-swiper>
        </div>
    </div>
</template>

<script>
    import {conServiceBanner} from '@/network/home'
    import NoticeSwiper from "./NoticeSwiper";
    export default {
        name: "Notice",
        components:{
            NoticeSwiper
        },
        data(){
            return{
                content:[],
                isActive:true
            }
        },
        created(){
            this.conServiceBanner(56)
        },
        methods:{
            //点击中行动态
            bankDynamic(){
                this.conServiceBanner(45)
                //改变class
                this.isActive=false;
            },
            //点击重要公告
            importNotice(){
                this.conServiceBanner(56)
                this.isActive=true
            },
            //获取重要公告/中行动态的信息
            conServiceBanner(id){
                conServiceBanner({
                    bankCategoryId:id,
                    size:3
                }).then(res=>{
                    this.content=[...res.data.content];
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .service{
        height:190px;
        border:1px solid #dadada;
        background: #fff;
        border-radius: 5px;
        display: flex;
        margin-bottom: 10px;
        padding: 20px 22px 30px;
        font-size: 18px;
        .left{
            width:33%;
            border-right:1px solid #dadada;
            cursor: pointer;
            .active{
                color:red;
            }
            span{
                display: inline-block;
                border-right:1px solid #dadada;
                color:#898989;
                padding:3px 8px;
                margin-bottom: 10px;
            }
            ul{
                font-size: 12px;
                li{
                    line-height: 26px;
                    width:230px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            a{
                float: right;
                font-size: 12px;
                color:#d28f1e;
            }
        }
        .right{
            width:66%;
            padding-left:50px;
            padding-right: 22px;
        }
    }
</style>