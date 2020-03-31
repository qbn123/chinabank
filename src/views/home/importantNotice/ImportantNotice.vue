<template>
    <div class="import-notice">
        <div class="left">
            <el-select v-model="value1" placeholder="请选择">
                <el-option
                        v-for="item in navData"
                        :key="item.id"
                        :label="item.categoryName"
                        :value="item.id">
                </el-option>
            </el-select>
        </div>
        <div>
            <el-select v-model="value2" placeholder="请选择">
                <el-option
                        v-for="item in navBellowData"
                        :key="item.id"
                        :label="item.categoryName"
                        :value="item.id">
                </el-option>
            </el-select>
        </div>
        <div>
            <h1>{{title}}</h1>
            <p>
                {{content}}
            </p>
            <button @click="uploadContent">提交</button>
        </div>
    </div>
</template>

<script>
    import {getNavData, getSecNavData} from "@/network/nav";
    import {postcontent} from '@/network/addcontent'
    export default {
        name: "ImportantNotice",
        data(){
          return{
              navData:[],
              navBellowData:[],
              value1:'',
              value2:'',
              content:'<p> 近日，意大利米兰市市长萨拉致信中国银行米兰分行。萨拉先生代表米兰市政府和全体米兰人民，对中国银行慷慨捐赠抗疫物资表示感谢，对中国银行上下齐心、雪中送炭的义举表示感谢,对中国银行守望相助、休戚与共的深情表示感谢。</p><p> 意大利米兰市红十字会会长迦罗内向中国银行董事长刘连舸致信表达谢意。</p><p><br></p><p><br></p>',
              title:'意大利米兰市政府致信感谢中国银行捐赠抗疫物资'
          }
        },
        watch:{
            value1(){
                this.getSecNavDataFun(this.value1)
            }
        },
        created() {
            //调取一级类目
            this.getNavDataFun()
        },
        methods:{
            uploadContent(){
                console.log(this.value2);
                postcontent({bankCategoryId:this.value2,title:this.title,content:this.content}).then(res=>{
                    console.log(res);
                })
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
    .import-notice{
        display: flex;
    }
</style>