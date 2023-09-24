<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
    name: 'IndexPage',
})

const name = ref('')

const router = useRouter()
function go() {
    if (name.value)
        router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
    <div>
        <p>

            <a class="text-5xl font-caveat" rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
                Nuxt Starter
            </a>
        </p>
        <p class="pt-2">
            <em class="text-sm op75">Opinionated Vite Starter Template</em>
        </p>

        <div class="py-4" />

        <TheInput v-model="name" placeholder="What's your name?" autocomplete="false" @keydown.enter="go" />

        <div>
            <button class="m-3 text-sm btn" :disabled="!name" @click="go">
                Go
            </button>
        </div>
    </div>
</template>