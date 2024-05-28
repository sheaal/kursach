<script setup>
import { RouterLink, RouterView } from 'vue-router'

// const button = document.querySelector('.text-prof');
// const dropdown = document.querySelector('.dropdown-cont');
//
// button.addEventListener('click', () => {
//   dropdown.classList.toggle('active');
// });
</script>

<template>
  <nav>
    <div class="block-nav">
      <div class="form-group">
        <input type="text" id="search" placeholder="Поиск" v-model="firstName" required>
      </div>
      <button type="submit">Создать пост</button>
    </div>

    <div class="block-header">
      <div class="block-ph">
        <img src="../src/assets/img/theme.png" alt="тема">
      </div>
      <div class="block-prof">
        <img class="img-ava" src="../src/assets/img/семга.png" alt="семга">
        <div class="dropdown">
        <button class="text-prof">Сергей Дульцев</button>
          <div class="dropdown-cont">
            <div class="dropdown-item">
              <img class="img-drop" src="../src/assets/img/settings.png" alt="настройки">
              <a href="#">Настройки</a>
            </div>
            <div class="dropdown-item">
              <img class="img-drop" src="../src/assets/img/exit.png" alt="выход">
              <a href="/#">Выход</a>
            </div>
          </div>
        </div>
      </div>
    </div>

<!--    <ul>-->
<!--      <li><RouterLink to="/home">Home</RouterLink></li>-->
<!--      <li><RouterLink to="/about">About</RouterLink></li>-->
<!--      <li><RouterLink to="/register">Registration</RouterLink></li>-->
<!--      <li><RouterLink to="/login">Authorization</RouterLink></li>-->
<!--      <li><RouterLink to="/tape">Tape</RouterLink></li>-->
<!--      <li><RouterLink to="/comment">Comment</RouterLink></li>-->
<!--    </ul>-->
  </nav>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  background-color: #0F1118;
  padding: 10px 0 10px 41%;
  align-items: center;
  gap: 10px;

}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  padding: 7px 0;
  margin-right: 20px;
}
nav a {
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  color: #ccc;
}
.block-ph{
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #141520;
}
.block-ph img {
  padding: 10px;
}
input {
  background-color: #141520;
  width: 400px;
  height: 30px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
}

input::placeholder {
  color: #7F85BC;
}

.form-group {
  padding: 5px;
  height: 20px;
}
.form-group input {
  width: 300px;
}
.block-nav{
  justify-content: center;
  display: flex;
  margin-right: 17%;
}
.block-header{
  gap: 10px;
  display: flex;
  justify-content: space-between;
}
button {
  background-color: #141520;
  border-radius: 10px;
  color: #7F85BC;
  //justify-content: center;
  //align-items: center;
  //display: flex;
  width: 150px;
  height: 30px;
  border: none;
  margin: 5px 0 5px 6px;
}
.block-prof{
  display: flex;
  gap: 10px;
  background-color: #141520;
  border-radius: 10px;
  width: 180px;
  height: 35px;
}
.img-ava{
  border-radius: 10px;
  width: 21%;
}
.text-prof {
  color: #7F85BC;
  text-align: center;
  //text-align: right;
  vertical-align: middle;
  line-height: 25px;
  border: none;
}

/* Контейнер <div> - необходим для размещения выпадающего содержимого */
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
}
/* Выпадающее содержимое (скрыто по умолчанию) */
.dropdown-cont {
  display: none;
  position: absolute;
  border-radius: 10px;
  background-color: #1f2037;
  width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  top: 100%;
  left: 0;
}

.dropdown-cont.active {
  display: block;
}

/* Ссылки внутри выпадающего списка */
.dropdown-cont a {
  color: #7F85BC;
  padding: 10px 10px;
  text-decoration: none;
  //display: block;
}
.dropdown-cont a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-cont {display: block;}

.dropdown:hover .text-prof {background-color: #1f2037;}

.img-drop{
  width: 15%;
}
</style>
