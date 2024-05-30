<script setup>

</script>

<template>
  <div class="button-lite">
    <slot></slot>
  </div>
</template>

<style scoped>
.button-lite{
  padding: 10px;
  border-radius: 10px;
}

.button-lite:hover{
  background-color: var(--block-hover-background-color);
  cursor: pointer;
}
</style>