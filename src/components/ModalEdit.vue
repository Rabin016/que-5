<template>
    <div
        class="modal fade"
        id="modalEdit"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <form @submit.prevent="submitNewPost">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Add Post
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="postTitle" class="form-label"
                                >Post Title</label
                            >
                            <input
                                v-model="newPost.title"
                                type="text"
                                class="form-control"
                                placeholder="Entre Title here..."
                            />
                        </div>
                        <div
                            class=" d-inline-flex align-content-center align-items-center"
                        >
                            <label class="form-label mr-1">Categories</label>
                            <span
                                class=" d-inline-block"
                                tabindex="0"
                                data-toggle="tooltip"
                                title="Create new category"
                            >
                                <h5
                                    @click="
                                        showCategoryInput = !showCategoryInput
                                    "
                                    class="btn"
                                >
                                    <span class="badge bg-secondary">+</span>
                                </h5>
                            </span>
                            <div
                                v-if="showCategoryInput"
                                class=" d-flex align-items-center"
                            >
                                <input
                                    v-model="newCategory"
                                    type="text"
                                    class="mr-1 form-control form-control-sm"
                                    placeholder="Insert Category name..."
                                />

                                <div
                                    @click="submitNewCategory"
                                    class="btn btn-primary btn-sm"
                                >
                                    Add
                                </div>
                            </div>
                        </div>
                        <multiselect
                            v-model="newPost.categories"
                            :options="getAllCategories"
                            :multiple="true"
                            :close-on-select="false"
                            :clear-on-select="false"
                            placeholder="Select any category"
                            :hide-selected="true"
                        >
                        </multiselect>
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="submit" class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Multiselect from "vue-multiselect"
export default {
    name: "ModalEdit",
    components: {
        Multiselect,
    },
    props: ["postid"],
    data() {
        return {
            newPost: {
                title: null,
                categories: [],
                _id: null,
            },
            newCategory: null,
            showCategoryInput: false,
        }
    },
    methods: {
        ...mapActions(["addCategory", "updatePost", "loadPosts"]),
        submitPost() {
            console.log(this.categories)
        },
        submitNewCategory() {
            this.addCategory(this.newCategory)
            this.newCategory = ""
            this.showCategoryInput = false
        },
        submitNewPost() {
            if (this.newPost.title != "" && this.newPost.categories != []) {
                this.updatePost(this.newPost)
                this.loadPosts()
            } else {
                alert("Input field cannot be empty")
            }
        },
    },
    watch: {
        postid(newValue) {
            const post = this.getAllPosts.filter((post) => post._id == newValue)
            this.newPost.title = post[0].title
            this.newPost.categories = post[0].categories
            this.newPost._id = post[0]._id
        },
    },
    computed: {
        ...mapGetters(["getAllCategories", "getAllPosts"]),
        isInvalid() {
            return this.isTouched && this.selectedCategories.length === 0
        },
    },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
