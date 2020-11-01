<template>
    <div class="container">
        <div class="d-flex justify-content-around py-5">
            <h3>List of all Posts</h3>
            <button
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
            >
                Add new
            </button>
        </div>
        <Modal />
        <PostList />
    </div>
</template>

<script>
import PostList from "../components/PostList"
import Modal from "../components/Modal"

export default {
    name: "Posts",
    components: {
        PostList,
        Modal,
    },
}
</script>
