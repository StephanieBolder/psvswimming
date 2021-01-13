<template>
<div class="flex">
    <h1 class="font-bold">
    <slot> </slot>
    <div class="border-4 border-blauw -mt-25 "></div>
    </h1>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .-mt-25 {
        margin-top: -10px;
    }
</style>