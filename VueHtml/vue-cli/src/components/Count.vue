<template>
    <div>
        <h1>当前的求和为：{{this.$store.state.sum}}</h1>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当和为奇数时加</button>
        <button @click="incrementWait">延时加</button>

    </div>
</template>
<script>
export default {
    name:"Count",
    data(){
        return{
            number:1
        }
    },
    methods:{
        increment(){
             
        },
        decrement(){

        },
        incrementOdd(){

        },
        incrementWait(){

        },
    },

}
</script>