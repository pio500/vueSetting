<template>
  <div style="width:400px;height:690px;border:1px solid black; margin:0 auto; position:relative">
    <div style="font-weight:bold;color:lightsalmon;position:absolute;top:0;left:0;width:100%;height:70px;background-color: dimgrey; line-height: 40px">
      Qplz
    </div>
    <div style="position:absolute;top:70px;left:0;width:100%;height:40px;">
      <div style="width:50%;height:100%;float:left;cursor:pointer; line-height: 40px" @click="chatSwitch='chat'" :style="chatSwitch=='chat'? 'color:coral':'background:lightgrey; color:darkgrey'">채팅 </div>
      <div style="width:50%;height:100%;float:left;cursor:pointer; line-height: 40px" @click="chatSwitch='poll'" :style="chatSwitch=='chat'? 'background:lightgrey; color:darkgrey':'color:coral'"> 설문조사 </div>
    </div>
    <chatMode v-if="chatSwitch=='chat'"></chatMode>
    <pollMode style="margin-top:90px" v-else></pollMode>
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
