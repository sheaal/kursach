<script setup>
import ButtonLite from "@/components/ui/ButtonLite.vue";
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import DropdownBlock from "@/components/ui/DropdownBlock.vue";
import { logout } from "@/api/logout.js";
import { toggleTheme } from "@//composables/useTheme.js"

const token = localStorage.getItem('token');
const userName = localStorage.getItem("userName");
const userSurname = localStorage.getItem("userSurname");

const changeTheme = () => {
  toggleTheme();
};
</script>

<template>
  <header class="header container">
    <div class="header__content">

      <div class="header-middle">
        <input type="text" class="input-default search-input" placeholder="Поиск" required />
        <ButtonDefault class="post-create" @click="$router.push('/create_post')">Создать пост</ButtonDefault>
      </div>

      <div class="profile-info">

        <button-lite @click="changeTheme()">
          <img class="header__theme-image" src="@/assets/img/icon/theme.png" alt="theme">
        </button-lite>

        <div class="profile__content" v-if="token">
          <p class="profile__name">{{ userName }} {{ userSurname }}</p>
          <img class="profile__avatar" src="@/assets/img/UserAvatarDefault.png" alt="avatar" >
          <DropdownBlock class="profile__dropdown-content">
            <RouterLink to="/settings" class="dropdown-item">
              <img class="profile__dropdown-item-icon" src="@/assets/img/icon/settings.png" alt="settings">
              <a class="profile__dropdown-item-link">Настройки</a>
            </RouterLink>
            <RouterLink to="/" class="dropdown-item" @click="logout">
              <img class="profile__dropdown-item-icon" src="@/assets/img/icon/exit.png" alt="exit">
              <a class="profile__dropdown-item-link">Выход</a>
            </RouterLink>
          </DropdownBlock>
        </div>

        <div class="profile__content" v-if="!token">
          <RouterLink to="/login" class="nav-item">
            <img class="nav-item__icon" src="@/assets/img/icon/exit.png" alt="login"/>
            <a class="nav-item__content">Авторизация</a>
          </RouterLink>
        </div>
      </div>

    </div>
  </header>
</template>

<style scoped>
.header{
  background: var(--block-background-color);
}

.header__content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 10px 0 10px 0;
}

.header-middle{
  display: flex;
  gap: 10px;
  flex-grow: 1;
  max-width: 540px;
  width: 100%;
  height: 40px;
}

.search-input{
  width: 355px;
  height: 40px;
  color: var(--primary-color);
  font-size: 14px;
  padding: 0 0 0 20px;
}

.search-input::placeholder{
  color: var(--primary-color);
  font-weight: 500;
  font-size: 14px;
}

.post-create{
  width: 100%;
  max-width: 174px;
  padding: 12px 43px;
  font-weight: 500;
  font-size: 14px;
  height: 40px;
}

.profile-info{
  position: relative;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.profile__content{
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--main-background-color);
  background-color: var(--block-hover-background-color);
  border-radius: 10px;
}

.profile__content:hover > .profile__dropdown-content{
  position: absolute;
  top: 40px;
  left: 0;
  display: flex;
}

.profile__dropdown-content{
  display: none;
}

.profile__content{
  display: flex;
}

.profile__dropdown-item-link{
  font-weight: 700;
  font-size: 12px;
  color: var(--primary-color);
}

.profile__name{
  display: inline-block;
  color: var(--primary-color);
  padding: 10px 13px;
  font-weight: 700;
  font-size: 12px;
  max-width: 120px;
  white-space: nowrap;
}

.profile__avatar{
  width: 40px;
  height: 40px;
  border-radius: 10px;
}



body[data-theme="light"] {
  background-color: #222;
  color: #fff;
}
/* body[data-theme="dark"] {
  background-color: #222;
  color: #fff;
} */



@media screen and (max-width: 768px) {
  .header-middle{
    padding: 0 30px;
  }
}
</style>