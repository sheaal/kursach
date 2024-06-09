<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
import SidebarBlock from "@/components/SidebarBlock.vue";
import ButtonDefault from "@/components/ui/ButtonDefault.vue";

</script>

<template>
  <HeaderApp />
  <section class="container">
    <SidebarBlock></SidebarBlock>
    <main class="main">
      <div class="form-post">
          <h2 class="post-title">Предоставление прав Администратора</h2> 
          <textarea class="form__input input-default textaria-default" type="number" placeholder="ID пользователя" required></textarea>
          <div class="form-bottom">
            <ButtonDefault style="margin-top: 10px; width: 159px; height: 40px;">Предоставить права</ButtonDefault>
          </div>
        </div>
    </main>
  </section>
</template>

<style scoped>
.form-post {
  padding: 10px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-title {
  color: #7F85BC;
  text-align: center;
  padding: 0 0 18px;
}

.form-bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>