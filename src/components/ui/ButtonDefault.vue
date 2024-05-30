<script setup>

</script>

<template>
  <button class="button-default">
    <slot></slot>
  </button>
</template>

<style scoped>
.button-default{
  color: var(--primary-color);
  font-size: 14px;
  display: inline-block;
  text-align: center;
  border-radius: 10px;
  background-color: var(--block-hover-background-color);
  cursor: pointer;
}
</style>