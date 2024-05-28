<template>
  <div class="profile-cont">
    <Sidebarview></Sidebarview>
    <div class="block-dec-img">
      <img class="img-decoration" src="../assets/img/back_photo.png" alt="оформление">
      <img class="img-ava2" src="../assets/img/Аватар.png" alt="ава">
    </div>
    <div class="ob-header-col">
      <div class="header-col">
        <b class="p-name">Сергей Дульцев</b>
        <div class="block-pod">
          <p class="p-signer" >100 подписчики</p>
          <p class="p-subscribe">100 подписок</p>
        </div>
        <div class="block-sett">
          <img class="img-drop" src="../assets/img/settings.png" alt="настройки">
        </div>
      </div>
    </div>
  <div class="ob-block-pr">
    <div class="block-prof2">
      <div class="about-block">
        <h1>О себе</h1>
        <div class="ob-p-block">
          <p>Профессиональный алкоголик</p>
          <div class="p-block">
            <p>Cоздан аккаунт:</p>
            <p class="p-creature">1 сентября 2025</p>
          </div>
          <div class="p-block">
            <p>День рождения:</p>
            <p class="p-birth">1 сентября 2004 (19 лет)</p>
          </div>
        </div>
      </div>
    </div>

    <div class="feed2">
      <div class="post2">
        <div class="block-prof3">
          <div style="display: flex">
            <img class="img-ava3" src="../assets/img/семга.png" alt="семга">
            <p class="text-prof2">Сергей Дульцев</p>
          </div>
          <img class="img-menu2" src="../assets/img/memenushka.png" alt="подробнее"/>
        </div>
        <img class="img-post2" src="../assets/img/post.png" alt="пост"/>

        <div class="ob-block-lc">
          <div class="block-like">
            <img src="../assets/img/like2.png" alt="лайкнуто">
            <p>10</p>
          </div>
          <div class="block-com">
            <img src="../assets/img/comment.png" alt="комент">
            <p>10</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<style>
.profile-cont{
  background-color: #0C0E14;
}
.block-dec-img{
  padding: 20px 0 0;
  align-items: center;
  justify-content: center;
  display: flex;
}
.img-decoration{
  gap: 20px;
  display: flex;
  position: relative;
}
.img-ava2{
  display: flex;
  position: absolute;
  box-shadow: 0 1px 80px #0B68F2;
  border-radius: 100px;
}
.img-drop{
  padding: 4px;
}
.ob-header-col{
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0 0 20px;
}
.header-col{
  background-color: #0F1118;
  width: 920px;
  height: 83px;
  border-radius: 10px;
  padding: 20px 0 0 20px;
  justify-content: left;
  display: flex;
}
.block-pod{
  display: flex;
}
.header-col b{
  color: white;
}
.header-col p{
  color: white;
  padding: 0 5px;
}
.block-sett{
  width: 30px;
  height: 30px;
  background-color: #141520;
  border-radius: 10px;
  padding: 1px 1px;
  justify-content: right;
  display: flex;
}
.ob-block-pr{
  display: flex;
  justify-content: center;
}
.block-prof2{
  background-color: #0F1118;
  border-radius: 10px;
  width: 360px;
  height: 145px;
  display: flex;
  padding: 10px;
}
.block-prof2 h1{
  color: #7F85BC;
  font-size: 17px;
}
.block-prof2 p{
  color: white;
}
.ob-p-block{
  display: inline-block;
  margin-top: 10%;
}
.p-block{
  display: flex;
}
.p-creature{
  padding: 0 0 0 120px;
}
.p-birth{
  padding: 0 0 0 60px;
}
.block-like p{
  color: #15ED11;
  text-align: right;
  padding: 0 1px 0 3px;
}
.block-like img{
  padding: 1px;
}

.block-com p{
  color: #7F85BC;
  text-align: right;
  padding: 0 2px 0 4px;
}
.block-com img{
  padding: 2px;
}



.feed2 {
  width: 540px;
  height: 700px;
  border-radius: 10px;
  display: flex;
  background-color: #141520;
  margin: 0 0 0 20px;
}
.post2 {
  margin-bottom: 20px;
  padding: 20px;
}
.block-prof3{
  width: 410px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.img-ava3{
  border-radius: 10px;
  width: 40px;
  padding: 0 0 10px;
}
.text-prof2 {
  color: #7F85BC;
  padding: 10px;
}
.img-menu2{
  width: 24px;
  height: 25px;
  margin: auto 0;
}
.img-post2 {
  width: 500px;
  border-radius: 10px;
}
.ob-block-lc{
  display: flex;
  justify-content: right;
  padding: 5px;
  gap: 5px;
}
.block-like{
  width: 57px;
  height: 30px;
  border: #15ED11 solid 2px;
  border-radius: 6px;
  justify-content: right;
  display: flex;
  padding: 0 5px;
}
.block-like p{
  color: #15ED11;
  text-align: right;
  font-size: 18px;
  padding: 2px 5px 0 4px;
}
.block-like img{
  padding: 3px 0 0 6px;
  width: 24px;
  height: 24px;
}
.block-com{
  width: 57px;
  height: 30px;
  border: #7F85BC solid 2px;
  border-radius: 6px;
  justify-content: right;
  display: flex;
}
.block-com p{
  color: #7F85BC;
  text-align: right;
  font-size: 18px;
  padding: 1px 5px 0 4px;
}
.block-com img{
  padding: 3px 0 0 6px;
  width: 25px;
  height: 24px;
}
</style>

<script setup lang="ts">
import Sidebarview from "@/components/Sidebarcomp.vue";
</script>