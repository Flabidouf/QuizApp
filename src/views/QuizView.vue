<script setup>

    import {useRoute} from "vue-router"
    import {ref, computed} from "vue"
    import Results from "../components/Results.vue"
    import Question from "../components/Question.vue"
    import QuizHeader from "../components/QuizHeader.vue"
    import quizes from "../data/quizes.json"

    const route = useRoute() // useRoute() is a function that returns the current route object. 
    const quizId = parseInt(route.params.id)
    const quiz = quizes.find(q => q.id === quizId )
    const currentQuestionIndex = ref(0)
    const numberOfCorrectAnswers = ref(0)
    const showResults = ref(false)

    const questionStatus = computed(() => {
        return `${currentQuestionIndex.value}/${quiz.questions.length}`
    })
    // Or const questionStatus = computed(() => `${currentQuestionIndex.value+1}/${quiz.questions.length}`)

    const barPercentage = computed(() => `${(currentQuestionIndex.value)/quiz.questions.length*100}%`)

    const onOptionsSelected = (isCorrect) => {
        if(isCorrect){
            numberOfCorrectAnswers.value++
        }

        if(currentQuestionIndex.value === quiz.questions.length - 1){
            showResults.value = true
        }

        currentQuestionIndex.value++
    }
    
</script>

<template>

    <div> 
        <QuizHeader 
            :questionStatus="questionStatus" 
            :barPercentage="barPercentage"
        />
        <div>
            <Question 
                v-if = "!showResults"
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionsSelected"
            />
            <Results 
                v-else
                :quizQuestionLength = 'quiz.questions.length'
                :numberOfCorrectAnswers = 'numberOfCorrectAnswers'
            />
        </div>
    </div> 

</template>
