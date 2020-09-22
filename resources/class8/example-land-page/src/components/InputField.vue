<template>
    <div class="input-wrapper">
        <label :for="unique">{{ label }}</label>
        <input type="text" :id="unique" />
    </div>
</template>

<script>
    module.exports = {
        props: {
            label: String,
            unique: String,
        }
    }
</script>