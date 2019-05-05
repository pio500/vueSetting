<template>
    <div style="width:300px;height:400px;border:1px solid black; margin:0 auto; position:relative">
      <div style="position:absolute;top:0;left:0;width:100%;height:40px;">
        <div style="width:50%;height:100%;float:left;cursor:pointer" @click="loginSwitch='listner'" :style="loginSwitch=='listner'? 'background:red':''"> 개인 </div>
        <div style="width:50%;height:100%;float:left;cursor:pointer" @click="loginSwitch='speaker'" :style="loginSwitch=='listner'? '':'background:red'"> 그룹 </div>
        <normalLogin v-if="loginSwitch=='listner'"></normalLogin>
        <speakerLogin v-else></speakerLogin>

      </div>
      <router-link :to="{name:'chatRoom'}" tag="button" style="position:absolute;bottom:0;width:100%;height:40px;left:0" >join</router-link>
    </div>
</template>
<script>
  import normalLogin from './normalLogin'
  import speakerLogin from './speakerLogin'
  export default {
    data(){
      return{
        loginSwitch:'listner'
      }
    },
    methods:{

    },
    components:{
      normalLogin:normalLogin,
      speakerLogin:speakerLogin

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
