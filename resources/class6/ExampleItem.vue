<template>
    <div>
        <h1>Advanced Props</h1>
        
        <div>{{ title }}</div>
    </div>

    <!-- in App.vue -->
    <!-- <props title="Title for my props" :is-published="false" /> -->
</template>

<script>
    module.exports = {
        props: {
            title: String,
            isPublished: Boolean
        }
    }
</script>

<style>
    
</style>