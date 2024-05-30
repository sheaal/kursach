<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
import SidebarBlock from "@/components/SidebarBlock.vue";
import PostItem from "@/components/PostItem.vue";
</script>

<template>
  <HeaderApp />
  <section class="container">
    <SidebarBlock></SidebarBlock>
    <main class="main profile">
      <section class="profile-header__block">
        <img class="profile-head-avatar" src="@/assets/img/back_photo.png" alt="head-avatar"/>
        <img class="profile-avatar" src="@/assets/img/семга.png" alt="avatar"/>
        <div class="profile-body">
          <h2 class="profile-body__name">Сергей Дульцев</h2>
          <div class="profile-body__content">
            <p class="profile-body__item">100 подписчики</p>
            <p class="profile-body__item">100 подписок</p>
          </div>
        </div>
      </section>
      <section class="profile-body__block">
        <div class="profile-about">
          <h2 class="profile-about__title">О себе</h2>
          <div class="profile-about__info">
            <p class="profile-about__item">Профессиональный алкаш</p>
            <div class="profile-about__block">
              <p class="profile-about__item">Cоздан аккаунт:</p>
              <p class="profile-about__item">1 сентября 2025</p>
            </div>
            <div class="profile-about__block">
              <p class="profile-about__item">День рождения:</p>
              <p class="profile-about__item">1 сентября 2004 (119 лет)</p>
            </div>
          </div>
        </div>
        <div class="post-list">
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
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
  position: relative;
  max-width: 920px;
  width: 100%;
  background-color: var(--block-background-color);
  border-radius: 10px;
}

.profile-head-avatar{
  width: 100%;
  height: 250px;
}

.profile-avatar{
  position: absolute;
  top: 60px;
  left: 400px;
  border-radius: 50%;
  width: 120px;
  height: 120px;
}

.profile-body{
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.profile-body__content{
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
</style>