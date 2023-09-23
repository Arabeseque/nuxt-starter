<script setup lang="ts">
const { data: dataFromApi } = await useFetch('/api/hello/nuxt')

</script>


<template>
  <div>
    <!-- <NuxtWelcome /> -->
    {{ dataFromApi }}
  </div>
</template>
