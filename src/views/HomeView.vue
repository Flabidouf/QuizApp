<script setup>

import q from "../data/quizes.json"
import {ref, watch} from "vue"
import Card from "../components/Card.vue"
import gsap from "gsap"
  
const quizes = ref(q)
const search = ref("")

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

const beforeEnter = (el) => {
  el.style.opacity = 0
  el.style.transform= "translateY(-50px)"
} 

const enter = (el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    delay: el.dataset.index * 0.15
  })
}


</script>

<template>

    <div>

      <header>
        <input v-model.trim="search" type="text" placeholder="Search...">
      </header>

    <div class="option-container">
      <TransitionGroup 
      appear
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @enter="enter"
      >
        <Card 
        v-for="(quiz, index) in quizes" 
        :data-index="index"
        :key="quiz.id" 
        :quiz="quiz"/>
      </TransitionGroup>
      
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