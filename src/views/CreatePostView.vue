<script setup>
import SidebarBlock from "@/components/SidebarBlock.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import { ref } from "vue";
import ButtonDefault from "@/components/ui/ButtonDefault.vue";
import ButtonLite from "@/components/ui/ButtonLite.vue";
import { createPost } from "@/api/post";
import { useRouter } from 'vue-router';

const router = useRouter();
const textcont = ref('');
const file = ref('');
const message = ref('');
const errorMessage = ref('');

async function createPostSubmit(){
  const postData = {
    text_content: textcont.value,
    media_content: file.value
  }

  const { message: successMessage, error } = await createPost(postData);
  if (successMessage) {
    message.value = successMessage;
    router.push('/profile');
  } else {
    errorMessage.value = error;
  }

  textcont.value = '';
  file.value = '';
};

const fileInput = ref(null);

const openFilePicker = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
};
</script>

<template>
    <HeaderApp />
    <section class="container">
      <SidebarBlock></SidebarBlock>
      <main class="main">
        <div class="form-post">
          <h2 class="post-title">Создание поста</h2> 
          <textarea v-model="textcont" class="form__input input-default textaria-default" placeholder="Напишите что-нибудь!" required></textarea>
          <div class="form-bottom">
            <ButtonLite style="margin-top: 10px;" @click="openFilePicker">
              <img src="@/assets/img/icon/file.png" alt="Иконка файла">
            </ButtonLite>
            <input ref="fileInput" class="inp-file" type="file" accept="image/" @change="handleFileChange">
            <ButtonDefault @click="createPostSubmit" style="margin-top: 10px; width: 159px; height: 40px;">Выложить пост</ButtonDefault>
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

.inp-file {
  display: none;
  
}

.form-bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>

