<template>
    <div>
        Hello from Component {{ test }}
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                test: 'test hello'
            }
        }
    }
</script>

<style></style>