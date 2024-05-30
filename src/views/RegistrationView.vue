<script setup>
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import InputDefault from "@/components/ui/InputDefault.vue";
</script>

<template>
  <main class="main">
    <form class="form-auth">
      <InputDefault class="form__input" type="email" placeholder="Электронная почта" required />
      <InputDefault class="form__input" type="password" placeholder="Пароль" required />
      <div class="form__birthday">
        <InputDefault class="form__input" type="number" placeholder="День" required />
        <InputDefault class="form__input" type="number" placeholder="Месяц" required />
        <InputDefault class="form__input" type="number" placeholder="Год" required />
      </div>
      <ButtonDefault class="form__btn">Регистрироваться</ButtonDefault>
      <p class="main__text">
        У вас уже есть аккаунт <router-link class="form__link form__link--account" to="/login">Авторизоваться</router-link>
      </p>
    </form>
  </main>
</template>

<style scoped>
.form__btn {
  width: 100%;
  padding: 12px 34px;
}

.form__input {
  width: 100%;
  padding: 12px 10px;
  border-radius: 10px;
  color: var(--text-color);
  font-size: 14px;
  font-weight: 400;
}

.form__input::placeholder {
  color: var(--text-color);
}

.form__birthday {
  display: flex;
  gap: 10px;
}

.main__text {
  text-align: center;
}

.form__link--account {
  display: inline-block;
}
</style>