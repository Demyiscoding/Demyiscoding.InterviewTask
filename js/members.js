let membersApp = Vue.createApp({
	data() {
		return {
			groupData: [],
			membersData: [],
			mergeData: [],
		};
	},
	methods: {
		
		groupJson() {
			axios.get("/public/groups.json").then((response) => {
				this.groupData = response.data;
				// console.log(response.data);
				// console.log(this.groupData);
			});
		},
		membersJson() {
			axios.get("/public/members.json").then((response) => {
				this.membersData = response.data;
				// console.log(response.data);
				// console.log(this.membersData);
			});
		},
	},
// 合併資料未成功＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝  
	computed: {
		mergeJson() {
      const mergeData = [];
      //先從會員的陣列取出id
			for (let i = 0; i < this.membersData.length; i++) {
        const member = this.membersData[i];
				const hasgroupId = member.group_id;
        //再從社團的陣列出找到相對應得id值
        const group = this.groupData.find(group => group.id === hasgroupId);

        //當id相等 true 就呈現出 false就空值
        // let groupName = group ? group.name : " ";

        //將id有對應到的社團名稱推送到mergeData (推不進去！)
					if (group) {         
						mergeData.push({
							inGroup: group.name
						});

            return mergeData;
					}
				}
			},
		},
// 未成功＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝  
	async mounted() {
    await this.membersJson();
	this.groupJson();
	},
});
membersApp.mount("#membersApp");
