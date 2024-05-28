<template>
  <div class="container">
    <div class="sidebar">
      <ul>
        <li><RouterLink to="/profile">Профиль</RouterLink></li>
        <li><RouterLink to="/tape">Лента</RouterLink></li>
        <li><RouterLink to="/subscriptions">Подписки</RouterLink></li>
        <li><RouterLink to="/subscribers">Подписчики</RouterLink></li>
        <li><RouterLink to="/likes">Понравившиеся</RouterLink></li>
      </ul>
    </div>
    <div class="feed">
      <div class="post" v-for="post in posts" :key="post.id">
        <img src="../Downloads/Frame 18.png"/>
        <img />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.sidebar {
  width: 200px;
  background-color: #0F1118;
  padding: 20px;
  border-right: 1px solid #ddd;
  margin-right: auto;
}
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar li {
  margin-bottom: 10px;
}
.sidebar a {
  text-decoration: none;
  color: #337ab7;
}
.sidebar a:hover {
  color: #23527c;
}
.feed {
  width: 300px;
  padding: 20px;
  display: flex;
  background-color: #0F1118;
}
.post {
  margin-bottom: 20px;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}
.post img {
  width: 50%;
  margin: 10px;
  border-radius: 10px;
}
</style>
<script setup lang="ts">
</script>