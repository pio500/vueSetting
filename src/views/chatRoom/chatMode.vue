<template>
  <div style="width:100%;height:650px;margin-top:40px;position:relative">
    <div  style="width:100%;height:600px;overflow:scroll; " id="chatBox">
      <div v-for="item in questions" style="width:80%;float:right;background:yellow;margin-top:10px;">{{item}}</div>
    </div>
    <input type="text" style="position:absolute;bottom:0;left:0;width:100%;height:40px;" @keyup.enter="submit" v-model="question">
  </div>
</template>
<script>
  import 'expose-loader?$!expose-loader?jQuery!jquery'
  export default {
    data(){
      return{
        question:'',
        answers:[
                '1번답변',
          '2번답변',
          '3번답변',
          '4번답변',
          '5번답변',
          '6번답변',
          '7번답변'
        ],
        questions:[]
      }
    },
    methods:{
      submit(){
        if(this.question.length>0){
          this.questions.push(this.question)
          this.question=''

          $('#chatBox').animate({ scrollTop:10000000000000},300)
        }

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
