<template>
    <div style="width:300px;height:400px;border:1px solid ; margin:0 auto; position:relative">
        <div style="font-weight:bold;color:lightsalmon;position:absolute;top:0;left:0;width:100%;height:40px;background-color: dimgrey; line-height: 40px">
            Qplz
        </div>
        <div style="position:absolute;margin-top:40px;width:100%;height:40px">
        <div style="width:50%;height:100%;float:left;cursor:pointer; line-height: 40px" @click="loginSwitch='listener'" :style="loginSwitch=='listener'? 'color:coral':'background:lightgrey; color:darkgrey'"> 개인 </div>
        <div style="width:50%;height:100%;float:left;cursor:pointer; line-height: 40px" @click="loginSwitch='speaker'" :style="loginSwitch=='listener'? 'background:lightgrey; color:darkgrey':'color:coral'"> 그룹 </div>
        <normalLogin  v-if="loginSwitch=='listener'" :firstInput.sync="firstInput" :secondInput.sync="secondInput" ></normalLogin>
        <speakerLogin v-else :firstInput.sync="firstInput" :secondInput.sync="secondInput"></speakerLogin>

      </div>
      <button @click="goMain" style="position:absolute;bottom:0;width:100%;height:40px;left:0;background-color: lightsteelblue;color: white; font-weight: bold" >JOIN</button>
    </div>
</template>
<script>
  import normalLogin from './normalLogin'
  import speakerLogin from './speakerLogin'
  export default {
    data(){
      return{
        loginSwitch:'listener',
        firstInput:'',
        secondInput:'',
        memberInfo:[
          {
            id:'speaker1',
            pwd:'1234',
          },
          {
            id:'speaker2',
            pwd:'1234',
          }
        ],
        codeSet:[
          'abc123',
          'aaa123'
        ],
      }
    },
    methods:{
      goMain(){
        if(this.loginSwitch=='listener'){
          for(let i=0;i<this.codeSet.length;i++){
            if(this.secondInput==this.codeSet[i]) {
              this.$router.replace({name: 'chatRoom'})
              return;
            }
          }
          alert("맞는코드없음")

       }else{
          for(let i=0;i<this.memberInfo.length;i++){
            if(this.firstInput==this.memberInfo[i].id && this.secondInput==this.memberInfo[i].pwd) {

              this.$router.replace({name: 'roomList'})
              return;
            }
          }
          alert("회원정보 불일치")

        }
      }
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
