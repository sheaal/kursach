<script setup>
import SidebarBlock from "@/components/SidebarBlock.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import PostItem from "@/components/PostItem.vue";
import { ref, onMounted } from "vue";
import { getLikesPost } from "@/api/like";

const likes = ref([]);
const posts = ref([])
const token = Сookie.get("token");

onMounted(async () => {
  await getLike();
});

async function getLike() {
  try {
    const data = await getLikesPost();
    likes.value = data.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Посты не найдены для пользователя");
    } else {
      console.error("Ошибка получения данных о постах:", error);
    }
  }
}
</script>

<template>
  <HeaderApp />
  <section class="container">
    <SidebarBlock></SidebarBlock>
    <main class="main">
      <div class="post-list" v-if="likes.length > 0">
          <PostItem v-for="post in likes" :key="post.id" :post="post" />
        </div>
        <div class="post-list" v-else>
          <div class="posts-message">Постов нет</div>
        </div>
    </main>
  </section>
</template>

<style scoped>

</style>