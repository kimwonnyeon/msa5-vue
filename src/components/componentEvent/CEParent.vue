<script setup>
import { ref } from 'vue';
import CEChild from './CEChild.vue';

const count = ref(0);

const addCount = ()=>{
  count.value++;
}

const multiCount =(val)=>{
  count.value *= val
}
</script>

<template>
 <h2>CE Parent</h2>
 <p>Count : {{ count }}</p>
 <CEChild @addCount="addCount" @multiCount="multiCount"/>
</template>

<style scoped>

</style>
