<template>
    <div>about page</div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { ref } from '@vue/reactivity';
export default {
    async setup() {
        const route = useRoute();


        const name = ref(`initial title`)
        const description = ref('title');

        useHead({
            title: route.name,
            meta: [
                {
                    name: name.value,
                    content: description.value,
                },
            ],
        })


        await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => {
                name.value = json.title
                description.value = json.body
            })


        return {

        }

    }
}

</script>

<style>
</style>