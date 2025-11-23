<script setup lang="ts">
const { href } = defineProps(['href'])
function scroll() {
  console.log(href)
  document.querySelector(href).scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<template>
  <a :href="href" @click.prevent="scroll" tabindex="-1">
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: unset;
  display: flex;
}
</style>
