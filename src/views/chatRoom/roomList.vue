<template>
  <div style="width:400px;height:690px;border:1px solid black;margin:0 auto;">
      <div style="width:400px;font-weight:bold;color:lightsalmon;margin-top:0;position:absolute;height:60px;background-color: dimgrey; line-height: 40px">
          Qplz
      </div>
      <div  @click="goChatRoom" style="height: 60px;"></div>
      <div @click="addRoom" style="padding-top:15px;padding-bottom:15px;width:80%;margin:10px auto;border:1px solid darkgrey;font-weight:bold;background-color: lightgrey;color:gray;font-size: 30px">+</div>

    <div v-for="item in roomList" @click="goChatRoom" style="line-height:1.6em;width:80%;height:80px; margin:10px auto;border: outset lightgrey; padding-top: 10px">
        <b style="float:left; margin-left: 10px;color: gray">제목</b> <b style="float: right;margin-right: 10px">{{item.title}}</b><br>
        <b style="float:left; margin-left: 10px;color: gray">참여자 수</b> <b style="float: right;margin-right: 10px">{{item.max}}</b><br>
        <b style="float:left; margin-left: 10px;color: gray">회사명</b> <b style="float: right;margin-right: 10px">{{item.company}}</b>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        roomList:[
          {
            title:'카카오프렌즈',
            max:200,
            company:'카카오'
          },
          {
            title:'네이버 메일',
            max:450,
            company:'네이버'
          },
          {
            title:'다음 카카오',
            max:280,
            company:'다음'
          },
          {
            title:'삼성 채용',
            max:220,
            company:'삼성'
          },
          {
            title:'채용설명회',
            max:350,
            company:'신한은행'
          },
        ]
      }
    },
    methods:{
      addRoom(){

          this.$router.replace({name: 'roomMake'})
      },
        goChatRoom(){
            this.$router.replace({name: 'chatRoom'})
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
