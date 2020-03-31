<template>
    <div class="import-notice">
        <div v-for="(item,index) in content">
            <h3>{{item.title}}</h3>
            <p v-html="item.content">
                {{item.content}}
            </p>
        </div>
    </div>
</template>

<script>
    import {conServiceBanner} from '@/network/home'
    export default {
        name: "ImportNotice",
        data(){
            return{
                content:[]
            }
        },
        created(){
            this.conServiceBanner()
        },
        methods:{
            conServiceBanner(){
                conServiceBanner({
                    bankCategoryId:'56'
                }).then(res=>{
                    this.content=[...res.data.content];
                })
            }
        }
    }
</script>

<style scoped>

</style>