<template>
    <div>
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from "./components/Navbar"
import { mapActions } from "vuex"
export default {
    components: {
        Navbar,
    },
    created() {
        this.loadCategories()
        this.loadPosts()
    },
    methods: {
        ...mapActions(["loadCategories", "loadPosts"]),
    },
}
</script>

<style></style>
