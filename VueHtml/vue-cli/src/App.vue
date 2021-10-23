<template>
    <div>
        <Search/>
        <ItemList/>
    </div>
</template>
<script>
import ItemList from './components/ItemList.vue'
 
import Search from "./components/Search.vue"
export default {
    name:"App",
    components:{Search, ItemList}
}
</script>