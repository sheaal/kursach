<script setup>
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import InputDefault from "@/components/ui/InputDefault.vue";
</script>

<template>
  <main class="main">
    <form class="form-auth">
      <InputDefault class="form__input" type="email" placeholder="Электронная почта" required />
      <InputDefault class="form__input" type="password" placeholder="Пароль" required />
      <div class="form__middle">
        <ButtonDefault class="form__btn form__auth">Авторизоваться</ButtonDefault>
        <router-link class="form__link form__link--password" to="/forgot-password">Забыли пароль?</router-link>
      </div>
      <p class="main__text">
        Впервые на сайте? <router-link class="form__link form__link--account" to="/register">Создать аккаунт</router-link>
      </p>
    </form>
  </main>
</template>

<style>
.form__middle{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form__btn {
  width: 100%;
  padding: 12px 34px;
}

.form__auth {
  max-width: 176px;
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

.form__link {
  display: block;
  margin-top: 1em;
  text-align: center;
  color: var(--primary-color);
  text-decoration: none;
}

.form__link:hover {
  text-decoration: underline;
}

.main__text {
  color: var(--text-color);
  text-align: center;
}

.form__link--password,
.form__link--account {
  display: inline-block;
  margin-top: 1em;
}
</style>