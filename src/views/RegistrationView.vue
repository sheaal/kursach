<script setup>
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import { register } from "@/api/registration.js";
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const name = ref('');
const surname = ref('');
const email = ref('');
const password = ref('');
const day = ref('');
const month = ref('');
const year = ref('');
const message = ref('');
const errorMessage = ref('');

async function registerSubmit(){
  const registerData = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    password: password.value,
    day: day.value,
    month: month.value,
    year: year.value,
  }

  const { message: successMessage, error } = await register(registerData);
  if (successMessage) {
    router.push('/login');
    message.value = successMessage;
  } else {
    errorMessage.value = error;
  }

  name.value = '';
  surname.value = '';
  email.value = '';
  password.value = '';
  day.value = '';
  month.value = '';
  year.value = '';
};
</script>

<template>
  <main class="main">
    <form class="form-auth" @submit.prevent="registerSubmit">
      <input class="form__input input-default" v-model="name" type="text" placeholder="Имя" required />
      <input class="form__input input-default" v-model="surname" type="text" placeholder="Фамилия" required />
      <input class="form__input input-default" v-model="email" type="email" placeholder="Электронная почта" required />
      <input class="form__input input-default" v-model="password" type="password" placeholder="Пароль" required />
      <div class="form__birthday">
        <input class="form__input input-default" v-model="day" type="number" placeholder="День" required />
        <input class="form__input input-default" v-model="month" type="number" placeholder="Месяц" required />
        <input class="form__input input-default" v-model="year" type="number" placeholder="Год" required />
      </div>
      <ButtonDefault type="submit" class="form__btn">Регистрироваться</ButtonDefault>
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