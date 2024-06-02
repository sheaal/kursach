<script setup>
import ButtonLite from "@/components/ui/ButtonLite.vue";
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import DropdownBlock from "@/components/ui/DropdownBlock.vue";
import {useTheme} from "@/composables/useTheme.js";

const token = localStorage.getItem('token');

const { theme, setTheme } = useTheme();

const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
};
</script>

<template>
  <header class="header container">
    <div class="header__content">

      <div class="header-middle">
        <input type="text" class="input-default search-input" placeholder="Поиск" required />
        <ButtonDefault class="post-create">Создать пост</ButtonDefault>
      </div>

      <div class="profile-info">

        <button-lite>
          <img class="header__theme-image" @click="toggleTheme()" src="@/assets/img/icon/theme.png" alt="theme">
        </button-lite>

        <div class="profile__content" v-if="token">
          <p class="profile__name">Сергей Дульцев</p>
          <img class="profile__avatar" src="@/assets/img/UserAvatarDefault.png" alt="avatar" >
          <DropdownBlock class="profile__dropdown-content">
            <RouterLink to="/settings" class="dropdown-item">
              <img class="profile__dropdown-item-icon" src="@/assets/img/icon/settings.png" alt="settings">
              <a class="profile__dropdown-item-link">Настройки</a>
            </RouterLink>
            <RouterLink to="/" class="dropdown-item">
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
  padding: 10px 0 10px 620px;
}

.header-middle{
  display: flex;
  gap: 10px;
  flex-grow: 1;
  margin: 0 159px 0 0;
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
</style>