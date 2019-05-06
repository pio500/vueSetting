<template>
  <div style="width:400px;height:690px;border:1px solid black;margin:0 auto;">
      <div style="width:400px;font-weight:bold;color:lightsalmon;margin-top:0;position:absolute;height:40px;background-color: dimgrey; line-height: 40px">
          Qplz
      </div>
      <div style="margin-top: 70px;">
          <h3>강연 정보</h3>
          <br>
          강연 주제 : <input type="text" v-model="title"><br>
          <br>
          참여 인원 : <input type="text" v-model="max"><br>
          <br>
          기업 이름 : <input type="text" v-model="company">
          <br><br><br>
      </div>

    <div style="width:100%;height:50px;background:lightsteelblue;color: white;font-weight: bold;line-height: 50px;margin-bottom: 0" @click="addChat">추가</div>
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
