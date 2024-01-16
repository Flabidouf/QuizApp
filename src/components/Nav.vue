<script setup>
    import {RouterLink} from 'vue-router'
</script>


<template>
    <div>
        <header>
        <RouterLink class="RouterLink" active-class="active" to="/">Home</RouterLink>
        <RouterLink class="RouterLink" active-class="active" to="/quiz">Liege Quiz</RouterLink>
        </header>
        
    </div>
</template>

<style scoped>
.active {
  font-weight: 900;
  color:rgb(56, 53, 53)
  }
div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .RouterLink{
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
  }
  
</style>