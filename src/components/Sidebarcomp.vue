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
      <div class="nav-item" :class="{'nav-item__active': isActiveNavItem('/profile')}">
        <img class="nav-item__icon" src="../assets/img/person.png" alt="профиль"/>
        <a class="nav-item__content"><RouterLink to="/profile">Профиль</RouterLink></a>
      </div>
      <div class="nav-item" :class="{'nav-item__active': isActiveNavItem('/tape')}">
        <img class="nav-item__icon" src="../assets/img/web_asset.png" alt="лента"/>
        <a class="nav-item__content"><RouterLink to="/tape">Лента</RouterLink></a>
      </div>
      <div class="nav-item" :class="{'nav-item__active': isActiveNavItem('/')}">
        <img class="nav-item__icon" src="../assets/img/check_circle.png" alt="подписки"/>
        <a class="nav-item__content"><RouterLink to="/subscriptions">Подписки</RouterLink></a>
      </div>
      <div class="nav-item" :class="{'nav-item__active': isActiveNavItem('/')}">
        <img class="nav-item__icon" src="../assets/img/people.png" alt="подписчики"/>
        <a class="nav-item__content"><RouterLink to="/subscribers">Подписчики</RouterLink></a>
      </div>
      <div class="nav-item" :class="{'nav-item__active': isActiveNavItem('/')}">
        <img class="nav-item__icon" src="../assets/img/like.png" alt="понрав"/>
        <a class="nav-item__content"><RouterLink to="/likes">Понравившиеся</RouterLink></a>
      </div>
    </nav>
  </div>
</template>


<style>
.sidebar {
  position: sticky;
  top: 0;
  float: left;
  width: 200px;
  height: 100vh;
  padding: 20px;

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
  gap: 10px;
  padding: 10px 16px;
}
.nav-item__active{
  background-color: #141520;
  border-radius: 10px;
}
.nav-item{
  display: flex;
  gap: 10px;
  padding: 10px 16px;
}

.nav-item:hover{
  background-color: #141520;
  border-radius: 10px;
}
</style>
<script setup>
</script>