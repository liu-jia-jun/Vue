<template>
  <div>
    <div v-if="$route.query.id">
        <h3>query传参</h3>
      {{ $route.query.id }}
      AND
      {{ $route.query.title }}
    </div>
    <div v-if="$route.params.id">
        <h3>params传参</h3>
      {{ $route.params.id }}
      AND
      {{ $route.params.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Node",
};
</script>

<style></style>
