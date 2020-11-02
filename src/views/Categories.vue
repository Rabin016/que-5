<template>
    <div class="container">
        <form
            @submit.prevent="submitCategory"
            class="py-5 d-flex justify-content-center align-items-center"
        >
            <input
                v-model="category"
                class="form-control mr-5"
                type="text"
                placeholder="Category name..."
            />
            <input class="btn btn-primary" value="Add Category" type="submit" />
        </form>

        <h3 class="pb-2">List of all Categories</h3>
        <div class="row g-4">
            <div
                class="col"
                v-for="(category, indexCategory) in getAllCategories"
                :key="indexCategory"
            >
                <div class="card">
                    <div class="card-body d-flex justify-content-between">
                        <h5 class="card-title">{{ category }}</h5>
                        <button
                            @click="delCategory(category)"
                            type="button"
                            class="btn-close"
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
    name: "Categories",
    data() {
        return {
            category: null,
        }
    },
    computed: {
        ...mapGetters(["getAllCategories"]),
    },
    methods: {
        ...mapActions(["addCategory", "deleteCategory"]),
        submitCategory() {
            if (this.category) {
                this.addCategory(this.category)
                this.category = ""
            } else {
                alert("Category name cannot be empty")
            }
        },
        delCategory(categoryName) {
            this.deleteCategory(categoryName)
        },
    },
}
</script>
