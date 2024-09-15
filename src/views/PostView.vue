<script setup>

import SidebarBlock from "@/components/SidebarBlock.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import ButtonLite from "@/components/ui/ButtonLite.vue";
import PostItem from "@/components/PostItem.vue";
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import { createCom, getComment } from "@/api/comment";
import { getPost } from "@/api/post";
import { reactive, ref } from "vue";
import { onMounted, watch } from "vue";
import { useRoute } from 'vue-router';


const post = reactive({});
const newCommentText = ref("");
const postId = ref(null);
const route = useRoute();
const userData = ref({});
const comments = ref([]);

async function createComSubmit() {
  try {
    const response = await createCom(postId.value, newCommentText.value);
    if (response.error) {
      console.error("Ошибка создания комментария:", response.error);
      return;
    }
    newCommentText.value = ""; // Очистить поле ввода
  } catch (error) {
    console.error("Ошибка отправки комментария:", error);
  }
}

async function getPostComments(postId){
  try {
    const response = await getComment(postId);
    comments.value = response;
    if (response.error) {
      console.error("Ошибка создания комментария:", response.error);
      return;
    }
    newCommentText.value = ""; // Очистить поле ввода
  } catch (error) {
    console.error("Ошибка отправки комментария:", error);
  }
}

async function getpost(postId){
  try {
    const response = await getPost(postId);
    post.value = response;
    if (response.error) {
      console.error("Ошибка создания комментария:", response.error);
      return;
    }
  } catch (error) {
    console.error("Ошибка отправки комментария:", error);
  }
}

onMounted(() => {
    postId.value = route.params.postId;
    getpost(postId.value);
    getPostComments(postId.value);
  });
  watch(() => route.params, (newParams, oldParams) => {
    postId.value = newParams.postId;
  });
  
</script>

<template>
  <HeaderApp />
  <section class="container">
    <SidebarBlock />
    <main class="main-post">
      <div class="post-list">
        <PostItem :key="post.id" :post="post" />
      </div>
      <div class="comment">
        <div class="your-comm">
          <input style="width: 500px; height: 109px; background-color: #141520; color: white; border-radius: 10px;" class="comm-inp" type="text" v-model="newCommentText" placeholder="Ваш комментарий"/>
          <ButtonDefault style="margin: 10px;" type="submit" @click="createComSubmit">Отправить</ButtonDefault>
        </div>
        <div class="comment-list" v-for="comment in comments" :key="comment.comment_id">
          <div class="com1-block">
            <img class="profile-avatar" style="width: 40px; height: 40px;" v-if="comment.profile_avatar_url!==null" :src="comment.profile_avatar_url" alt="avatar"/>
            <img class="profile-avatar" style="width: 40px; height: 40px;" v-show="comment.profile_avatar_url==null" src="@/assets/img/UserAvatarDefault.png" alt="avatar"/>
            <p class="profile-body__name">{{ comment.full_name }}</p>
            <p>{{ comment.comment_content }}</p>
            <ButtonLite>
              <img class="sub-menu" src="../assets/img/icon/menu.png" alt="menu"/>
            </ButtonLite>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<style scoped>
.main-post {
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.post-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 70%;
}

.comment {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 30%;
  padding: 20px;
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.comment-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>