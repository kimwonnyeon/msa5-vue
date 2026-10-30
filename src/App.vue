<script setup>
import { ref } from 'vue';


const count = ref(0); //변수에 값 할당


</script>

<template>
  <div @click="count++" class="btn-cnt">Count is {{ count }}</div>
  <button @click="count=0">Count Reset</button>
</template>

<style>
.btn-cnt{
  width: 100px;
  height: 100px;
  background-color: cadetblue;
}
</style>