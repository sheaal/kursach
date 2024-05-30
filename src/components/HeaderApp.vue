<script setup>
import ButtonLite from "@/components/ui/ButtonLite.vue";
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import InputDefault from "@/components/ui/InputDefault.vue";
</script>

<template>
  <header class="header">

    <div class="header-item">
      <InputDefault type="text" class="search-input" placeholder="Поиск" required />
      <ButtonDefault class="post-create">Создать пост</ButtonDefault>
    </div>

    <div class="profile-info">

      <button-lite>
        <img class="header__theme-image" src="@/assets/img/icon/theme.png" alt="theme">
      </button-lite>

      <div class="profile__content">
        <p class="profile__name">Сергей Дульцев</p>
        <img class="profile__avatar" src="@/assets/img/семга.png" alt="avatar" >
        <div class="profile__dropdown-content">
          <RouterLink to="/settings" class="profile__dropdown-item">
            <img class="profile__dropdown-item-icon" src="@/assets/img/icon/settings.png" alt="settings">
            <a class="profile__dropdown-item-link">Настройки</a>
          </RouterLink>
          <RouterLink to="/" class="profile__dropdown-item">
            <img class="profile__dropdown-item-icon" src="@/assets/img/icon/exit.png" alt="exit">
            <a class="profile__dropdown-item-link">Выход</a>
          </RouterLink>
        </div>
      </div>

    </div>

  </header>
</template>

<style scoped>
.header-item{
  display: flex;
  gap: 10px;
  max-width: 540px;
  width: 100%;
  margin-right: 159px;
  height: 40px;
}

.search-input{
  max-width: 355px;
  width: 100%;
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
  flex-direction: column;
  padding: 10px;
  background-color: var(--block-background-color);
  border-radius: 0 0 10px 10px;
  max-width: 218px;
  width: 100%;
}

.profile__dropdown-content{
  display: none;
}

.profile__dropdown-item{
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0 10px 10px;
  width: 100%;
}

.profile__dropdown-item:hover{
  background: var(--block-hover-background-color);
  border-radius: 10px;
  cursor: pointer;
}

.profile__dropdown-item-link{
  font-weight: 700;
  font-size: 12px;
  color: var(--primary-color);
}

.profile__name{
  color: var(--primary-color);
  padding: 10px 13px;
  font-weight: 700;
  font-size: 12px;
}

.profile__avatar{
  border-radius: 10px;
}
</style>