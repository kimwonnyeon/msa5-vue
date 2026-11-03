<script setup>
import { ref } from 'vue';
const activeTab=ref('proflie');

</script>

<template>
<h2>TabUI</h2>
<div class="container">
  <div class="tabMenu">
    <button @click="activeTab = 'proflie'" :class="{'active': activeTab ==='proflie'}">프로필</button>
    <button @click="activeTab = 'setting'" :class="{'active': activeTab==='setting'}">설정</button>
    <button @click="activeTab= 'notice'" :class="{'active': activeTab==='notice'}">게시판</button>
  </div>
  <p v-if="activeTab==='proflie'">프로필 페이지입니다.</p>
  <p v-else-if ="activeTab==='setting'">설정 페이지입니다</p>
  <p v-else>게시판 페이지입니다</p>
</div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;    
    align-items: center;
}
.tabMenu{
  display: flex;
  border-radius: 10px;
  gap: 20px;
}
button{
   background-color: rgb(109, 248, 248);
   border: none;
   border-radius: 10px;
   padding: 10px;
   width: 60px;
}
.active{
  background-color:aliceblue;
  border-bottom: 4px solid blue;
}
</style>