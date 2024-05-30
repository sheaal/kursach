<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const isActiveNavItem = (route) => {
  return router.currentRoute.value.path === route;
};
</script>

<template>
  <div class="sidebar">
    <nav class="nav-list">
      <RouterLink to="/profile" class="nav-item" :class="{'nav-item__active': isActiveNavItem('/profile')}">
        <img class="nav-item__icon" src="../assets/img/icon/person.png" alt="profile"/>
        <a class="nav-item__content">Профиль</a>
      </RouterLink>
      <RouterLink to="/" class="nav-item" :class="{'nav-item__active': isActiveNavItem('/')}">
        <img class="nav-item__icon" src="../assets/img/icon/web_asset.png" alt="feed"/>
        <a class="nav-item__content">Лента</a>
      </RouterLink>
      <RouterLink to="/subscribers" class="nav-item" :class="{'nav-item__active': isActiveNavItem('/subscribers')}">
        <img class="nav-item__icon" src="../assets/img/icon/people.png" alt="subscribers"/>
        <a class="nav-item__content">Подписки и Подписчики</a>
      </RouterLink>
      <RouterLink to="/likes" class="nav-item" :class="{'nav-item__active': isActiveNavItem('/likes')}">
        <img class="nav-item__icon" src="../assets/img/icon/like.png" alt="likes"/>
        <a class="nav-item__content">Понравившиеся</a>
      </RouterLink>
      <RouterLink to="/login" class="nav-item" :class="{'nav-item__active': isActiveNavItem('/login')}">
        <img class="nav-item__icon" src="@/assets/img/icon/exit.png" alt="login"/>
        <a class="nav-item__content">Авторизация</a>
      </RouterLink>
    </nav>
  </div>
</template>


<style>
.sidebar {
  position: sticky;
  top: 0;
  float: left;
  width: 100%;
  max-width: 210px;
  height: 100vh;
  padding: 20px 10px 0 0;
}

.nav-list {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
}

.nav-item{
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  width: 100%;
  font-weight: bold;
  font-size: 12px;
}

.nav-item__active{
  background-color: var(--block-hover-background-color);
  border-radius: 10px;
}

.nav-item{
  display: flex;
  gap: 10px;
  padding: 10px 16px;
}

.nav-item:hover{
  background-color: var(--block-hover-background-color);
  border-radius: 10px;
}
</style>
