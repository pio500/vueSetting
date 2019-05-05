<template>
  <div style="width:400px;height:800px;border:1px solid black; margin:0 auto; position:relative">
    <div style="position:absolute;top:0;left:0;width:100%;height:40px;">
      <div style="width:50%;height:100%;float:left;cursor:pointer" @click="chatSwitch='chat'" :style="chatSwitch=='chat'? 'background:red':''">채팅 </div>
      <div style="width:50%;height:100%;float:left;cursor:pointer" @click="chatSwitch='poll'" :style="chatSwitch=='chat'? '':'background:red'"> 설문조사 </div>
    </div>
    <chatMode v-if="chatSwitch=='chat'"></chatMode>
    <pollMode v-else></pollMode>
  </div>
</template>
<script>
  import chatMode from './chatMode'
  import pollMode from './pollMode'
  export default {
    data(){
      return{
        chatSwitch:'chat'
      }
    },
    methods:{

    },
    components:{
      chatMode:chatMode,
      pollMode:pollMode
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
