<script setup>
import SidebarBlock from "@/components/SidebarBlock.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import UserItem from "@/components/UserItem.vue";
</script>

<template>
  <HeaderApp />
  <section class="container">
    <SidebarBlock></SidebarBlock>
    <main class="main">
      <div class="sub-content">
        <div class="sub-block">
          <div class="sub-btn">Подписки ({{}})</div>
          <div class="sub-btn">Подписчики ({{}})</div>
        </div>
        <UserItem>

        </UserItem>
      </div>
    </main>
  </section>
</template>

<style>
.sub-content{
  display: flex;
  flex-direction: column;
  max-width: 540px;
  width: 100%;
  gap: 10px;
  background-color: var(--block-background-color);
  border-radius: 10px;
  padding: 20px;
}

.sub-block{
  display: flex;
  gap: 10px;
}

.sub-btn{
  font-weight: 600;
  font-size: 12px;
  color: var(--primary-color);
  border-radius: 10px;
  padding: 7px 10px;
  cursor: pointer;
}

.sub-btn:hover{
  background-color: var(--block-hover-background-color);
}
</style>