let selectApp = Vue.createApp({
  data(){
    return{
      selected:'desktop_1'
    }
  },
  methods:{
    // this.$router.push(location)  
    // ＝＝＝＝＝＝路由分頁 未成功＝＝＝＝＝＝
    currentPage(){
      switch(this.selected){
        case "desktop_1":
          this.$router.push("../desktop_1.html");
          break;
        case "desktop_2":
          this.$router.push("../desktop_2.html");
          break;
        case "desktop_3":
          this.$router.push("../desktop_3.html");
          break;
        default:
          this.$router.push("../desktop_1.html");
          break;
      }
    // ＝＝＝＝＝＝路由分頁 未成功＝＝＝＝＝＝      
    }
  },
  mounted(){
  }

}); 
selectApp.mount("#selectApp");