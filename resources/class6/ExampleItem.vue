<template>
    <div>
        <h1>Advanced Props</h1>
        
        <div>{{ title }}</div>
        <!-- <div>{{ id }} {{ title }}</div>-->
    </div>

    <!-- in App.vue -->
    <!-- First solution-->
    <props title="Title for my props" :is-published="false" :views="123" 
                :id="post.id" :title="post.title"  /> 
    <!-- Final solution-->
    <props :is-published="false" :views="123" v-bind="post"/>
</template>

<script>
    module.exports = {
        props: {
            title: String,
            isPublished: Boolean,
            views: Number,
            post: Object    // It's not really necessary 
        }
    }
    /**
     * App.vue
     * post: {
            id: 1,
            title: 'My title',
        }
     */
</script>

<style>
    
</style>