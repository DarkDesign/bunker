<template>
    <nav>
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class App extends Vue {
}
</script>
<style scoped lang="scss"></style>
