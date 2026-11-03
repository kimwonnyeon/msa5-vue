<script setup>
const props = defineProps({
  //'키값': 데이터타입
  'item' : Object,
  'str' : String
});
//구조분해 문법 사용 가능 
// const {item,str}= defineProps({
//   'item' : Object,
//   'str' : String
// });
</script>

<template>
  <h2>Child</h2>
  <!-- <p>{{ props.item.name }}</p> -->
   <p>{{ item.name}}</p>
</template>

<style>

</style>