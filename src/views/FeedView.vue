<script setup>
import SidebarBlock from "@/components/SidebarBlock.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import PostItem from "@/components/PostItem.vue";
import {onMounted, ref} from "vue";
import {getFeedPost} from "@/api/feed.js";

const userId = localStorage.getItem("userId");

const posts = ref([])

async function getFeed(userId) {
  try {
    const data = await getFeedPost(userId);
    posts.value = data;
  } catch (error) {
    if (error.response.status === 404) {
    } else {
      console.error("Error fetching user data:", error);
    }
  }
}

onMounted(() => {
  if (userId) {
    getFeed(userId);
  }
});
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
.post-block{
  justify-content: center;
  display: flex;
}
</style>
