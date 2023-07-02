let groupApp = Vue.createApp({
  data(){
    return{
      groupData: [],
  }
  },
  methods:{
    groupJson(){
      axios.get("/public/groups.json")
      .then(response => {
          this.groupData = response.data;
          // console.log(response.data);
          // console.log(this.groupData);
        }
      )
    }
  },
  mounted(){
    this.groupJson();
  }


}); groupApp.mount("#groupApp")


