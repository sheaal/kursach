<script setup>
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import { ref } from "vue";
import { login } from "@/api/authorization.js";
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');
const errorMessage = ref('');

async function loginSubmit() {
  const loginData = {
    email: email.value,
    password: password.value
  };

  const { token, error } = await login(loginData);
  if (token) {
    router.push('/');
  } else {
    console.error("Login Error:", error);
    errorMessage.value = error;
  }

  loginData.email = "";
  loginData.password = "";
}
</script>

<template>
  <main class="main">
    <form class="form-auth" @submit.prevent="loginSubmit">
      <input class="form__input input-default" v-model="email" type="email" placeholder="Электронная почта" required />
      <input class="form__input input-default" v-model="password" type="password" placeholder="Пароль" required />
     <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      <div class="form__middle">
        <ButtonDefault type="submit" class="formbtn formauth">Авторизоваться</ButtonDefault>
        <router-link class="formlink formlink--password" to="/forgot-password">Забыли пароль?</router-link>
      </div>
      <p class="main__text">
        Впервые на сайте? <router-link class="formlink formlink--account" to="/register">Создать аккаунт</router-link>
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