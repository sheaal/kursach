<script setup>
import SidebarBlock from "@/components/SidebarBlock.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import PostItem from "@/components/PostItem.vue";
import { ref } from "vue";

const posts = ref([])
</script>

<template>
  <HeaderApp />
  <section class="container">
    <SidebarBlock></SidebarBlock>
    <main class="main">
      <div class="post-list" v-if="posts.length > 0">
          <PostItem v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </main>
  </section>
</template>

<style scoped>

</style>