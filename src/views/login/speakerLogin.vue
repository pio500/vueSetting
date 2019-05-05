<template>
  <div >
    ID:<input v-model="firstInput" type="text"/><br>
    PWD:<input v-model='secondInput' type="password"/>
    <!--<router-link :to="{name:'main'}" tag="button">11111</router-link>-->
  </div>
</template>
<script>
  export default {
    props:['firstInput','secondInput'],
    data(){
      return{
      }
    },
    watch:{
      firstInput(){
        this.$emit('update:firstInput', this.firstInput)
      },
      secondInput(){
        this.$emit('update:secondInput', this.secondInput)
      }

    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
