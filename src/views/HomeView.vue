<script setup>

import q from "../data/quizes.json"
import {ref, watch} from "vue"
import Card from "../components/Card.vue"
  
const quizes = ref(q)
const search = ref("")

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

</script>

<template>

    <div>

      <header>
        <input v-model.trim="search" type="text" placeholder="Search...">
      </header>

    <div class="option-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
    
  </div>

</template>



<style scoped>

 header{
  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
 }

 header h1 {
  font-weight: bold;
  margin-right: 30px;  
 }

 header input{
  border:none;
  background-color: rgb(128,128,128, 0.1);
  padding: 10px;
  border-radius: 5px;
 }
 .option-container{
  display: flex;
  flex-wrap: wrap;
  margin-top:40px;
 }

</style>