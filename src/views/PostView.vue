<script setup>

import SidebarBlock from "@/components/SidebarBlock.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import ButtonLite from "@/components/ui/ButtonLite.vue";
import PostItem from "@/components/PostItem.vue";
</script>

<template>
  <HeaderApp />
  <section class="container">
    <SidebarBlock></SidebarBlock>
    <main class="main">
      <div class="post-list">
          <PostItem v-for="post in posts" :key="post.id" :post="post" />
      </div>
    <div class="comment">
      <div class="your-comm">
        <input class="comm-inp" type="text" placeholder="Ваш комментарий">
      </div>
      <div class="com1-block">
          <img class="user-avarar" src="@/assets/img/UserAvatarDefault.png" alt="photo"/>
          <p class="user-name">Алиса Шев</p>
          <p>какой-то коммент</p>
          <ButtonLite>
              <img class="sub-menu" src="../assets/img/icon/menu.png" alt="menu"/>
          </ButtonLite>
      </div>
    </div>
    </main>
  </section>
</template>

<style scoped>
.comment{
  margin-top: 650px;
}
.your-comm{
  width: 500px;
  height: 109px;
  background-color: #141520;
  border-radius: 10px;
  
}
</style>