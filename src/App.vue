<template>
    <div id="app">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from "./components/content/nav/Navigation";
    export default {
        name: "App",
        components:{
            Navigation
        }
    }
</script>

<style scoped>
    @import "assets/css/global.css";
    #app{
        width:1024px;
        margin:0 auto;
    }
</style>