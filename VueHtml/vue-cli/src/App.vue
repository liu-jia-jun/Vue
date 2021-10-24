<template>
  <div>
    <top />
    <hr>
    <context/>
  </div>
</template>
<script>
import Context from './components/Context.vue';
import Top from "./components/Top.vue";
export default {
  name: "App",
  components: { Top, Context },
};
</script>
