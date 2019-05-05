<template>
  <div style="width:400px;height:690px;border:1px solid black;margin:0 auto;">
    <div @click="addRoom" style="width:80%;margin:10px auto;border:1px solid black;background:blue;color:white;">+</div>

    <div v-for="item in roomList" @click="goChatRoom" style="width:80%;margin:10px auto;border:1px solid black">
        제목 : {{item.title}}<br>
        참여자 수 : {{item.max}}<br>
        회사명 : {{item.company}}
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        roomList:[
          {
            title:'titlet22222ile',
            max:20,
            company:'카카오'
          },
          {
            title:'titl33333etile',
            max:50,
            company:'네이버'
          },
          {
            title:'title4444tile',
            max:80,
            company:'다음'
          },
          {
            title:'tit5555letile',
            max:52220,
            company:'삼성'
          },
          {
            title:'titlet6666ile',
            max:530,
            company:'ㅉㅈ'
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
