<template>
    <div class="nav">
        <div class="navigation">
            <ul>
                <li :class="{'active':isActive}" @mouseenter="show">首页</li>
                <li v-for="(item,index) in navData"
                    :key="index"
                    @mouseleave="hiddenSecNav"
                    @mouseenter="showSecNav(index)"
                    :class="{'active':currentIndex==index}">{{item.categoryName}}</li>
            </ul>
        </div>
        <div class="nav-bellow"
             v-show="isShow"
             @mouseenter="showNav"
             @mouseleave="hiddenSecNav">
            <ul>
                <li v-for="(item,index) in navBellowData"
                    :key="index"
                    :class="{'active':currentSecIndex==index}"
                    @mouseenter="changeActive(index)">{{item.categoryName}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getNavData, getSecNavData} from "@/network/nav";
    export default {
        name: "Navigation",
        data(){
            return{
                navData:[],
                navBellowData:[],
                isShow:false,
                pid:0,
                currentIndex:null,
                isActive:true,
                currentSecIndex:null,
            }
        },
        components:{
        },
        created() {
            this.getNavDataFun()
        },
        methods:{
            show(){
                this.isActive=true;
                this.currentIndex=null;
            },
            showNav(){
                this.isShow=true;
            },
            changeActive(index){
                this.currentSecIndex=index;
            },
            showSecNav(index){
                this.currentSecIndex=null;
                this.isActive=false;
                this.currentIndex=index;
                this.isShow=true;
                const pid=index+1;
                //改变li 发送网络请求
                this.getSecNavDataFun(pid);
            },
            hiddenSecNav(){
                this.isShow=false
            },
            //发送网络请求
            getNavDataFun(){
               getNavData().then(res=>{
                   this.navData=[...res.data];
               })
            },
            getSecNavDataFun(pid){
                getSecNavData(pid).then(res=>{
                    this.navBellowData=res.data
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .navigation{
        width:1024px;
        height:60px;
        background:#fff;
        font-size:16px;
        margin:0 auto;
        border:1px solid #dadada;
        border-radius: 3px;
        margin-top:20px;
        p{
            float: left;
            line-height: 62px;
        }
        ul{
            display: flex;
            .active{
                color: #a71e32;
            }
            li{
                text-align: center;
                display: inline-block;
                height:60px;
                line-height:60px;
                flex: 1;
                cursor: pointer;
            }
        }
    }
    .nav-bellow{
        position:absolute;
        left:0;
        right:0;
        top:80px;
        z-index:9;
        width:1024px;
        height:160px;
        background: #f0f0f0;
        margin:0 auto;
        border:1px solid #dadada;
        border-top: none;
        ul{
            padding:20px 0;
            .active{
                color: #BA2636;
            }
            li{
                text-align: center;
                float: left;
                width:25%;
                border-right:1px solid #000;
                height: 30px;
                line-height: 30px;
                cursor: pointer;
            }
        }
    }
</style>