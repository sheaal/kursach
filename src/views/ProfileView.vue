<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
import SidebarBlock from "@/components/SidebarBlock.vue";
import PostItem from "@/components/PostItem.vue";
import { onMounted, ref } from "vue";
import { getUser } from "@/api/user.js";

const userData = ref({});
const posts = ref([]);
const userId = localStorage.getItem("userId");

async function getUserInfo(userId) {
  try {
    const data = await getUser(userId);
    userData.value = data[0];
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

function formatDate(data) {
  const date = new Date(data);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('ru-RU', options);
}

onMounted(() => {
  if (userId) {
    getUserInfo(userId);
  }
});
</script>

<template>
  <HeaderApp />
  <section class="container">
    <SidebarBlock></SidebarBlock>
    <main class="main profile">
      <section class="profile-header__block" v-if="userData">
        <div class="profile-header__content">
          <img class="profile-head-avatar" v-if="!userData.profile_head_avatar_url === null" src="#" alt="head-avatar"/>
          <img class="profile-head-avatar" v-show="userData.profile_head_avatar_url === null" src="@/assets/img/HeadAvatarDefault.png" alt="head-avatar"/>
          <img class="profile-avatar" v-if="userData.profile_avatar_url" src="#" alt="avatar"/>
          <img class="profile-avatar" v-show="!userData.profile_avatar_url" src="@/assets/img/UserAvatarDefault.png" alt="avatar"/>
        </div>
        <div class="profile-body__content">
          <h2 class="profile-body__name">{{ userData.name }} {{ userData.surname }}</h2>
          <div class="profile-body__list">
            <p class="profile-body__item">100 подписчиков</p>
            <p class="profile-body__item">100 подписок</p>
          </div>
        </div>
      </section>
      <section class="profile-body__block" v-if="userData">
        <div class="profile-about">
          <h2 class="profile-about__title">О себе</h2>
          <div class="profile-about__info">
            <p class="profile-about__item" v-if="userData.role === 1">Администратор</p>
            <p class="profile-about__item" v-if="userData.role === 2">Пользователь</p>
            <p class="profile-about__item" v-if="userData.about">{{ userData.about }}</p>
            <p class="profile-about__item" v-show="!userData.about">Пользователь не поставил статус</p>
            <div class="profile-about__block">
              <p class="profile-about__item">Создан аккаунт:</p>
              <p class="profile-about__item">{{ formatDate(userData.registration_date) }}</p>
            </div>
            <div class="profile-about__block">
              <p class="profile-about__item">День рождения:</p>
              <p class="profile-about__item">{{ formatDate(userData.birthdate) }} ({{ userData.age }} лет)</p>
            </div>
          </div>
        </div>
        <div class="post-list" v-if="posts.length > 0">
          <PostItem v-for="post in posts" :key="post.id" :post="post" />
        </div>
        <div class="post-list" v-else>
          <div class="posts-message">Постов нет</div>
        </div>
      </section>
    </main>
  </section>
</template>

<style>
.profile{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile-header__block{
  max-width: 920px;
  width: 100%;
  background-color: var(--block-background-color);
  border-radius: 10px;
}

.profile-header__content{
  position: relative;
}

.profile-head-avatar{
  width: 100%;
  height: 250px;
}

.profile-avatar{
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 120px;
  height: 120px;
}

.profile-body__content{
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.profile-body__list{
  display: flex;
  gap: 10px;
}

.profile-body__block{
  display: flex;
  align-items: self-start;
  gap: 20px;
}

.profile-body__name{
  color: var(--text-color);
  font-weight: 700;
}

.profile-body__item{
  color: var(--text-color);
  font-weight: 400;
  font-size: 12px;
}

.profile-about{
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 360px;
  width: 100%;
  background-color: var(--block-background-color);
  border-radius: 10px;
  padding: 20px;
}

.profile-about__title{
  color: var(--primary-color);
  font-weight: 700;
}

.profile-about__block{
  display: flex;
  justify-content: space-between;
}

.profile-about__info{
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 400;
  font-size: 12px;
  color: var(--text-color);
}

.posts-message{
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--block-background-color);
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  color: var(--primary-color);
}
</style>