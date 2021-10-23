<template>
    <div>
        <div class="item"  v-for="item in itemlist" :key="item.id"  >
			<a :href="item.html_url" target="_blank">
				<img :src="item.avatar_url" style='width: 100px'/>
			</a>
			<p >{{item.login}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"ItemList",
    data(){
        return{
            itemlist:[]
        }
    },
    methods:{
        getItemList(items){

this.itemlist=items


        }
    },mounted() {
  this.$bus.$on('getItemList',this.getItemList)
}
}
</script>

<style scoped>
.item{
    float: left;
    margin: 5px;
}
</style>