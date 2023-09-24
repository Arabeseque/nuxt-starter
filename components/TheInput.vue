<script setup lang="ts">
const modelValue = defineModel()
</script>

<template>
    <input id="input" v-model="modelValue" type="text" v-bind="$attrs" autocomplete="off"
        class="px-4 py-2 w-250px text-center bg-transparent border rounded outline-none active:none" />
</template>