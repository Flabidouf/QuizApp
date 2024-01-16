<script setup>

import {defineProps} from "vue"
const {
    quizQuestionLength,
    numberOfCorrectAnswers
} = defineProps([ 
    "quizQuestionLength",
    "numberOfCorrectAnswers"
])

</script>

<template>
    <div class="result">
        <p>Your results..</p>
        <h1>{{numberOfCorrectAnswers}}/{{ quizQuestionLength }}</h1>
    </div>
</template>

<style scoped>

    .result{
        text-align: center;
        padding: 100px 0
    }
    p{
        font-size: 30px;
    }

    h1{
        font-size: 50px;
    }
</style>