<script setup>

</script>

<template>
  <section class="dropdown-block">
    <slot></slot>
  </section>
</template>

<style scoped>
.dropdown-block{
  flex-direction: column;
  padding: 10px;
  background-color: var(--block-background-color);
  border-radius: 0 0 10px 10px;
  width: 100%;
}
</style>