<template>
  <div>
    nick name:<input v-model="id" type="text"/><br>
    eventCode:<input v-model='password' type="password"/>
    <!--<router-link :to="{name:'main'}" tag="button">11111</router-link>-->
  </div>
</template>
<script>
  export default {
    data(){
      return{
        id:'',
        password:''
      }
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
