<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input type="email" id="email" placeholder="Электронная почта" v-model="email" required>
      </div>
      <div class="form-group">
        <input type="password" id="password" placeholder="Пароль" v-model="password" required>
      </div>
      <button type="submit">Авторизоваться</button>
      <router-linkа class="pass-link" to="#">Забыли пароль?</router-linkа>
    </form>
    <p style="text-align: center;">Впервые на сайте? <router-link class="acc-link" to="/register">Создать аккаунт</router-link></p>
  </div>
</template>

<style scoped>
.login {
  color: white;
  width: 600px;
  height: 180px;
  border-radius: 10px;
  margin: 30px auto 0;
  padding: 20px;
  background-color: #0F1118;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.form-group {
  margin-bottom: 15px;
  height: 20px;
}
.pass-link{
  color: #7F85BC;
  text-decoration: none;
  margin-left: auto;
}
.acc-link{
  color: #7F85BC;
}
input{
  background-color: #141520;
  width: 540px;
  height: 30px;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 0 10px;
}
input::placeholder {
  color: #7F85BC;
}
button{
  background-color: #141520;
  border-radius: 10px;
  color: #7F85BC;
  width: 150px;
  height: 30px;
  border: none;
}
</style>
<script setup lang="ts">
</script>