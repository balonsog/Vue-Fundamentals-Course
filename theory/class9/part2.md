### lang attributes
Part of what makes Vue so powerful is how it’s flexible and allows you to use alternatives to the traditional HTML, JS and CSS setup. For example, you could use Pug, TypeScript and SCSS instead by adding the appropriate lang attributes.

<template lang="pug">
    </template>
    
<script lang="ts">
</script>
    
<style lang="scss" scoped>
</style>


You’d just need to make sure you have the proper loaders setup and your Webpack is configured to handle these alternatives. Thanks to the helpful Vue CLI 3, this process is pretty simple.

For example, if we wanted to use SCSS, we’d need to make sure we install sass-loader and its peer dependency node-sass. We can quickly do this from the command line with:

    npm install --save-dev sass-loader node-sass