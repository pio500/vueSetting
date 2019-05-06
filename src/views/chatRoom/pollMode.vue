<template>
  <div style="margin-top:400px;">
    <div v-for="item in surveyList" style="text-align:left;">
      title: {{item.title}}<br><br>
      <div v-for="(item2,index) in item.questions">
        [[[{{index+1}}]]] : {{item2}}<br>
      </div>
    <br><br><br>
    </div>
    <div @click="surveyAdd" style="cursor:pointer;position:absolute;bottom:20px;right:20px;width:40px;height:40px;background-color:dimgrey;color:white;border-radius: 50px;">+</div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        surveyList:[
          {
            title:'first',
            questions:[
              {text:'1111111'},
              {text:'2222222'},
              {text:'333333'},
              {text:'4444444'},
              {text:'55555'}
            ]
          },
          {
            title:'second',
            questions:[
              {text:'aaaaaa'},
              {text:'bbbbbb'},
              {text:'ccccc'},
              {text:'dddddd'},
              {text:'eeeee'},

            ]
          }
        ]
      }
    },
    created(){
      if(localStorage.getItem('surveyList').length){
        this.surveyList=JSON.parse( localStorage.getItem('surveyList') )
      }
      console.log(this.surveyList)
    },
    methods:{
      surveyAdd(){
        localStorage.setItem('surveyList', JSON.stringify(this.surveyList));
        this.$router.replace({name: 'surveyAdd',params: { surveyList: this.surveyList }})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
