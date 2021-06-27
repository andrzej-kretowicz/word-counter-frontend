<template>
  <div v-if="stars > 0">
    <span v-for="star in stars" :key="star">
      <v-icon>fa-star</v-icon>
    </span>
  </div>
  <div v-else>
    -
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {stars: {type: Number, default: 0}}
};
</script>

<style scoped>

</style>
