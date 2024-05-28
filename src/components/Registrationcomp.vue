<template>
  <div class="register">
<!--    <h1>Регистрация</h1>-->
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input type="email" id="email" placeholder="Электронная почта" v-model="email" required>
      </div>
      <div class="form-group">
        <input type="text" id="firstName" placeholder="Имя" v-model="firstName" required>
      </div>
      <div class="form-group">
        <input type="text" id="lastName" placeholder="Фамилия" v-model="lastName" required>
      </div>
      <div class="form-group">
        <input type="password" id="password" placeholder="Пароль" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="birthdate">Дата рождения:</label>
        <input type="date" id="birthdate" v-model="birthdate" required>
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p style="text-align: center;">У вас есть аккаунт? <router-link style="color: #7F85BC;" to="/login">Авторизоваться</router-link></p>
  </div>
</template>

<style scoped>
.register {
  color: white;
  width: 600px;
  height: 300px;
  border-radius: 10px;
  margin: 30px auto 0;
  padding: 20px;
  background-color: #0F1118;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
form{
  //gap: 30px;
  //display: grid;
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
  margin-top: 30px;
}
.form-group {
  margin-bottom: 15px;
  height: 20px;
}
</style>
<script setup lang="ts">
</script>