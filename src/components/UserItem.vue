<script setup>
import ButtonLite from "@/components/ui/ButtonLite.vue";
</script>

<template>
  <div class="sub-item">
    <div class="sub-info">
      <img class="sub-avatar" src="../assets/img/sub-one.png" alt="sub">
      <p class="sub-name">Алиса Шев</p>
    </div>
    <ButtonLite>
      <img class="sub-menu" src="../assets/img/icon/menu.png" alt="menu"/>
    </ButtonLite>
  </div>
</template>

<style scoped>
.sub-item{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.sub-info{
  display: flex;
  align-items: center;
  gap: 10px;
}

.sub-avatar{
  width: 40px;
  height: 40px;
}

.sub-name{
  color: var(--primary-color);
  font-weight: 600;
  font-size: 12px;
}

.sub-menu{
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>