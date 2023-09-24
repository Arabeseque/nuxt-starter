<script setup>
import { ref } from 'vue'
/**
 * @description: https://auto-animate.formkit.com/#usage-vue
 */
const items = ref(["😏", "😐", "😑", "😒", "😕"])
function removeItem(toRemove) {
  items.value = items.value.filter((item) => item !== toRemove)
}
</script>

<template>
  <div>
    <h5 class="font-caveat text-title text-primary-500">Click emojis to remove them.</h5>
    <ul v-auto-animate class="flex gap-2">
      <!-- <div class="text-6xl">Hello !</div> -->
      <li v-for="item in items" :key="item" @click="removeItem(item)">
        <div class="border border-shadow rounded-md">
          {{ item }}
        </div>
      </li>
    </ul>
  </div>
</template>