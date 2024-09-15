<script setup>
import { likeUser } from "@/api/like";
import { delPost } from "@/api/post";
import ButtonLite from "@/components/ui/ButtonLite.vue";
import { defineProps } from 'vue';
import { RouterLink } from "vue-router";

const token = Сookie.get("token");
const props = defineProps({
  post: Object
});

const post = props.post;

async function likeUserSubmit(postId) {
  likeUser(postId);
}

async function delPostSubmit(postId){
  delPost(postId);
}
</script>

<template>
    <article class="post">
      <div class="post__header">
        <div class="post-head__content">
          <img class="user-avarar" src="@/assets/img/UserAvatarDefault.png" alt="photo"/>
          <p class="user-name">{{ post.user_name }}</p>
        </div>
        <ButtonLite class="sub-del">
          <img class="sub-menu" src="../assets/img/icon/menu.png" alt="menu"/>
          <DropdownBlock class="profile__dropdown-content">
          <div class="dropdown-item">
            <a type="submit" @click="delPostSubmit(post.post_id)">Удалить</a>
          </div>
        </DropdownBlock>
        </ButtonLite>
      </div>
      <div class="post__body">
        <p class="post__text">{{ post.text_content }}</p>
        <img v-if="post.media_content !== null" class="post__img" :src="post.media_content" alt="photo" />
      </div>
      <div class="post__footer">
        <div class="post__footer-item" @click="likeUserSubmit(post.post_id)">
          <img class="post__icon" src="@/assets/img/icon/like.png" alt="photo" />
          <p class="post__count">{{ post.count_like }}</p>
        </div>
        <RouterLink :to="'/post/' + post.post_id" class="post__footer-item">
          <img class="post__icon" src="@/assets/img/icon/comment.png" alt="photo" />
          <p class="post__count">{{ post.count_comment }}</p>
        </RouterLink>
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
.sub-del {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--main-background-color);
  background-color: var(--block-hover-background-color);
  border-radius: 10px;
  position: relative; /* Добавили position: relative */
}

.sub-del:hover {
  cursor: pointer;
}

.profile__dropdown-content {
  display: none;
  position: absolute;
  top: 0;
  left: 38px;
  z-index: 1;
}

.sub-del:hover > .profile__dropdown-content {
  display: block;
}

.dropdown-item {
  padding: 10px;

}
.dropdown-item a {
  color: var(--primary-color);
  font-size: 13px;
  text-decoration: none;
}
</style>