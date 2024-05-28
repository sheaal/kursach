<template>
  <Sidebarview></Sidebarview>
  <div class="container">
    <section class="content">

      <div class="feed">
        <div class="post">
          <div class="block-prof">
            <div style="display: flex">
              <img class="img-ava" src="../assets/img/семга.png" alt="семга">
              <p class="text-prof">Сергей Дульцев</p>
            </div>
            <img class="img-menu" src="../assets/img/memenushka.png" alt="подробнее"/>
          </div>
          <img class="img-post" src="../assets/img/post.png" alt="пост"/>

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
    </section>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  padding: 0 200px;
  background-color: #0C0E14;
}
.content{
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin: 0 auto;
  width: 540px;
  height: 700px;
  border-radius: 10px;
  display: flex;
  background-color: #141520;

}
.post {
  margin-bottom: 20px;
  padding: 20px;
}
.img-menu{
  width: 24px;
  height: 25px;
  margin: auto 0;
}
.img-post {
  width: 500px;
  border-radius: 10px;
}
.block-prof{
  width: 410px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.img-ava{
  border-radius: 10px;
  width: 40px;
  padding: 0 0 10px;
}
.text-prof {
  color: #7F85BC;
  padding: 10px;
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