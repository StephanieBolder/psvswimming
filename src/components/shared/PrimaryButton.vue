<template>
<button class="w-full flex justify-center px-3 py-2 border-solid border-2 border-black rounded text-xs text-center text-white bg-black">
    <slot></slot>
</button>
</template>

<script>
export default {
    props: {
        variant: {
       type: String,
       default: "primary",
    }
    }
}
</script>

<style scoped>

</style>