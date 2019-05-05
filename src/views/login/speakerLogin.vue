<template>
  <div style="width:100%;margin:auto 0;">
    ID:<input v-model="firstInput" type="text"/><br>
    PWD:<input v-model='secondInput' type="password"/>
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
