<template>
  <div style="width:100%;height:650px;margin-top:120px;position:relative">
    <div  style="width:100%;height:600px;overflow:scroll;" id="chatBox">
      <container v-for="item in questions" style="color: gray;width:80%;float:left;background-color: #f1f1f1;border: 2px solid #dedede;  border-radius: 5px;padding: 10px;margin: 10px 0;">{{item}}</container>
    </div>
    <input type="text" style="position:absolute;bottom:0;left:0;width:80%;height:40px;" v-model="question">
    <button @click="submit" style="width:20%;height:40px;float: right;color: white;background-color: lightsteelblue">submit</button>
  </div>
</template>
<script>
  import 'expose-loader?$!expose-loader?jQuery!jquery'
  export default {
    data(){
      return{
        question:'',
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
