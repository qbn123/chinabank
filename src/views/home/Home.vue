<template>
    <div class="home">
        <home-swiper></home-swiper>
        <notice></notice>
    </div>
</template>

<script>
    import HomeSwiper from "./childComps/HomeSwiper";
    import Notice from "./childComps/Notice";
    export default {
        name: "Home",
        components:{
            HomeSwiper,
            Notice
        }
    }
</script>

<style scoped lang="scss">
    .home{
        width:1024px;
        margin:0 auto;
    }
</style>