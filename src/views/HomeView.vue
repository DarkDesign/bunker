<template>
    <div class="home"></div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
    components: {
        HelloWorld
    }
})
export default class HomeView extends Vue {
}
</script>
<style scoped lang="scss"></style>
