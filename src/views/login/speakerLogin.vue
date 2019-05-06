<template>
  <div>
    <input style="width: 100%"  v-model="firstInput" type="text" placeholder="Enter ID"/><br>
    <input style="width: 100%"  v-model='secondInput' type="password" placeholder="Enter Password"/>
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
  div {
    position: fixed;
    top: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  input{
    margin-bottom: 15px;
    height: 30px;
    width: 200px;
  }

</style>
