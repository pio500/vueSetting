<template>
  <div style="width:400px;height:800px;border:1px solid black; margin:0 auto; position:relative">
    <div style="position:absolute;top:0;left:0;width:100%;height:40px;">
      <div style="width:50%;height:100%;float:left;cursor:pointer" @click="chatSwitch='chat'" :style="chatSwitch=='chat'? 'background:red':''">채팅 </div>
      <div style="width:50%;height:100%;float:left;cursor:pointer" @click="chatSwitch='poll'" :style="chatSwitch=='chat'? '':'background:red'"> 설문조사 </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        chatSwitch:'chat'
      }
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
