<template>
  <div style="width:400px;height:690px;border:1px solid black;margin:0 auto;">
    제목 : <input type="text" v-model="title"><br>
    참여인원 : <input type="text" v-model="max"><br>
    회사명 : <input type="text" v-model="company">
    <div style="width:100%;height:50px;background:yellow;border-radius: 10px;" @click="addChat">추가</div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        title:'',
        max:'',
        company:''
      }
    },
    methods:{
      addChat(){
        this.$router.replace({name: 'roomList'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
