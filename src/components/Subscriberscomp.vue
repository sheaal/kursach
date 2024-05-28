<template>
  <div class="sub-cont">
    <Sidebarcomp></Sidebarcomp>
    <div class="sub-block">
      <a href="#">Подписки 4</a>
      <a href="/subscribers">Подписчики 2</a>
    </div>
      <div class="sub-one">
        <img class="img-sub" src="../assets/img/sub-one.png" alt="первый подписчик">
        <p>Алиса Шев</p>
        <img class="img-menu3" src="../assets/img/memenushka.png" alt="подробнее"/>
      </div>
      <div class="sub-two">
        <img class="img-sub" src="../assets/img/sub-two.png" alt="второй подписчик">
        <p>Маша Орлеан</p>
        <img class="img-menu3" src="../assets/img/memenushka.png" alt="подробнее"/>
      </div>
  </div>
</template>

<style>
.sub-cont{
  background-color: #0C0E14;
  height: 100%;
  padding: 20px;
  margin: 0 auto;
}
.sub-block{
  width: 540px;
  height: 213px;
  background-color: #0F1118;
  margin: 0 auto;
  display: flex;
  border-radius: 10px;
}
.sub-block a{
  color: #7F85BC;
  display: flex;
  padding: 27px 20px 20px;
}
.sub-one{
  margin: 0 auto;
  width: 495px;
  height: 60px;
  background-color: #141520;
  border-radius: 10px;
  justify-content: left;
  display: flex;
  padding: 10px 0 0 10px;
}
.sub-two{
  margin: 0 auto;
  width: 495px;
  height: 60px;
  background-color: #141520;
  padding: 10px 0 0 20px;
  border-radius: 10px;
  justify-content: left;
  display: flex;
}
.sub-one p{
  padding: 0 0 0 10px;
  color: #7F85BC;
  align-items: center;
  display: flex;
}
.sub-two p{
  padding: 0 0 0 10px;
  color: #7F85BC;
  align-items: center;
  display: flex;
}
.img-sub{
  width: 40px;
  height: 40px;
}
.img-menu3{
  width: 24px;
  height: 25px;
}
</style>

<script setup lang="ts">
import Sidebarcomp from "@/components/Sidebarcomp.vue";
</script>