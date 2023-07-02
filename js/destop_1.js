let desktop_1 = Vue.createApp({
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
          console.log(this.groupData);
          // console.log(this.groupData.name);
        }
      )
    }
  },
  mounted(){
    this.groupJson();
  }


}); desktop_1.mount("#desktop_1")


