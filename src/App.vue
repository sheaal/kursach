<script setup>
import {onMounted, ref} from "vue";

const theme = ref(localStorage.getItem('theme') || 'dark');

onMounted(() => {
  document.documentElement.setAttribute('theme', theme.value);
});
</script>

<template :class="{ 'dark': theme === 'dark', 'light': theme === 'light' }">
  <RouterView />
</template>

<style scoped>
.dark-theme {
  --primary-color: #7F85BC;
  --main-background-color: #0C0E14;
  --text-color: #FFFFFF;
  --block-background-color: #0F1118;
  --block-hover-background-color: #141520;
}

.light-theme {
  --main-background-color: #F3F4F7;
  --text-color: #141520;
  --block-background-color: #FFFFFF;
  --block-hover-background-color: #EBEDFF;
}
</style>
