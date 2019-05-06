<template>
  <div style="width:400px;height:690px;border:1px solid black; margin:0 auto; position:relative;padding-top:150px;">
    <div style="font-weight:bold;color:lightsalmon;position:absolute;top:0;left:0;width:100%;height:70px;background-color: dimgrey; line-height: 40px">
      Qplz
    </div>
    <div v-for="item in surveyList" :key="item.title">
      title : <input type="text" v-model="item.title" ><br>
      <div v-for="(item2,index) in item.questions" :key="item2">
        [[[[{{index+1}}]]] : <input type="text" v-model="item2.text" />
      </div>
      <br><br>
    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return{
        chatSwitch:'chat',
        surveyList:''
      }
    },
    created(){
      if(localStorage.getItem('surveyList')){
        this.surveyList=JSON.parse( localStorage.getItem('surveyList') )
        console.log(this.surveyList)
      }
    },
    methods:{

    },
    components:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
