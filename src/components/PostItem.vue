<script setup>

import ButtonLite from "@/components/ui/ButtonLite.vue";
</script>

<template>
  <article class="post">
    <div class="post__header">
      <div class="post-head__content">
        <img class="user-avarar" src="@/assets/img/UserAvatarDefault.png" alt="photo"/>
        <p class="user-name">Сергей Дульцев</p>
      </div>
      <ButtonLite>
        <img class="sub-menu" src="../assets/img/icon/menu.png" alt="menu"/>
      </ButtonLite>
    </div>
    <div class="post__body">
      <p class="post__text">Семга и Сосиска</p>
      <img class="post__img" src="@/assets/img/post.png" alt="photo" />
    </div>
    <div class="post__footer">
      <div class="post__footer-item">
        <img class="post__icon" src="@/assets/img/icon/like.png" alt="photo" />
        <p class="post__count">1</p>
      </div>
      <div class="post__footer-item">
        <img class="post__icon" src="@/assets/img/icon/comment.png" alt="photo" />
        <p class="post__count">2</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.post{
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--block-background-color);
  border-radius: 10px;
  padding: 20px;
}

.post__header{
  display: flex;
  justify-content: space-between;
}

.post-head__content{
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avarar{
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.user-name{
  font-weight: 700;
  font-size: 14px;
  color: var(--primary-color);
}

.post__body{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.post__text{
  font-size: 14px;
  font-weight: 400;
  color: var(--text-color);
}

.post__img{
  width: 500px;
  height: 500px;
}

.post__footer{
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.post__footer-item{
  display: flex;
  align-items: center;
  gap: 6px;
  border:1px solid var(--primary-color);
  border-radius:10px;
  padding: 7px 10px;
}
.post__footer-item{
  display: flex;
  align-items: center;
  gap: 6px;
  border:1px solid var(--primary-color);
  border-radius:10px;
  padding: 7px 10px;
}


.post__count{
  font-weight: 400;
  font-size: 14px;
  color: var(--primary-color);
}

.post__icon{
  width: 16px;
  height: 16px;
}
</style>