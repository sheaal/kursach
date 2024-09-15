<script setup>
import SidebarBlock from "@/components/SidebarBlock.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import { delUser } from "@/api/user";

async function delUserSubmit(){
  delUser()
}
</script>

<template>
  <HeaderApp />
  <section class="container">
    <SidebarBlock></SidebarBlock>
    <main class="main">
      <div class="edit-sett">
        <h2 style="color: #7F85BC; padding: 19px 0 0 20px;">Аккаунт</h2>
        <div class="acc-block">
          <p style="color: #7F85BC;">Изменить свои данные</p>
          <input style="width: 210px; margin-top: 10px;" class="form__input input-default" type="text" placeholder="Имя" required />
          <input style="width: 210px; margin-top: 10px;" class="form__input input-default" type="text" placeholder="Фамилия" required />
          <input style="width: 210px; margin-top: 10px;" class="form__input input-default" type="text" placeholder="Статус" required />
        </div>
         <p style="color: #7F85BC; padding: 9px 0 0 20px;">Дата рождения*</p>
        <div style="display: flex;" class="form__birthday">
          <input style="width: 100%; margin: 10px 10px 0 20px;" class="form__input input-default" min="1" max="31" type="number" placeholder="День" required />
          <input style="width: 100%; margin: 10px 10px;" class="form__input input-default" min="1" max="12" type="number" placeholder="Месяц" required />
          <input style="width: 100%; margin: 10px;" class="form__input input-default" min="1800" type="number" placeholder="Год" required />
        </div>
        <div class="appearance-block">
          <h2 style="color: #7F85BC; padding: 50px 0 0 20px;">Внешний вид</h2>
          <div class="profile-header__content">
          </div>
          
        </div>
        <ButtonDefault style="margin: 20px; width:200px; height: 40px; color: #984261;"  type="submit" @click="delUserSubmit()">Удалить аккаунт</ButtonDefault>
      </div>
      
    </main>
  </section>
</template>

<style>
.edit-sett{
  background-color: var(--block-background-color);
  width: 920px;
  height: 597px;
  border-radius: 10px;
}
.acc-block{
  flex-direction: column;
  display: flex;
  
  padding: 62px 0 0 20px;
}
</style>