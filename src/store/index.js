import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allPosts: [
            {
                _id: "lgslghfsgf4g6fd4",
                title: "Hello World",
                categories: ["lorem"],
            },
            {
                _id: "fhdsfjdshf687f6ew4f",
                title: "Jone doe",
                categories: ["ipsam"],
            },
            {
                _id: "lfudsyf5454",
                title: "Lorem ipsam",
                categories: ["lorem", "ipsam"],
            },
        ],
        allCategories: ["lorem", "ipsam"],
    },
    getters: {
        getAllPosts: (state) => state.allPosts,
        getAllCategories: (state) => state.allCategories,
    },
    mutations: {
        setAllCategories(state, payload) {
            state.allCategories = payload
        },
        setAllPosts(state, payload) {
            state.allPosts = payload
        },
    },
    actions: {
        addCategory({ commit }, payload) {
            let categories
            if (localStorage.categories) {
                categories = JSON.parse(localStorage.categories)
                if (!categories.find((category) => category === payload)) {
                    categories.unshift(payload)
                } else {
                    alert("Warning: This Category is already there")
                }
            } else {
                categories = [payload]
            }
            localStorage.categories = JSON.stringify(categories)
            commit("setAllCategories", categories)
        },
        deleteCategory({ commit }, payload) {
            const categories = JSON.parse(localStorage.categories)
            const newCategories = categories.filter(
                (category) => category != payload
            )
            localStorage.categories = JSON.stringify(newCategories)
            commit("setAllCategories", newCategories)
        },
        loadCategories({ commit }) {
            if (localStorage.categories) {
                const categories = JSON.parse(localStorage.categories)
                commit("setAllCategories", categories)
            } else {
                localStorage.categories = JSON.stringify(
                    this.state.allCategories
                )
            }
        },
        addPost({ commit }, payload) {
            let posts
            if (localStorage.posts) {
                posts = JSON.parse(localStorage.posts)
                posts.unshift(payload)
            } else {
                posts = [payload]
            }
            localStorage.posts = JSON.stringify(posts)
            commit("setAllPosts", posts)
        },
        loadPosts({ commit }) {
            if (localStorage.posts) {
                const posts = JSON.parse(localStorage.posts)
                commit("setAllPosts", posts)
            } else {
                localStorage.posts = JSON.stringify(this.state.allPosts)
            }
        },
        deletePosts({ commit }, payload) {
            const posts = JSON.parse(localStorage.posts)
            const newPosts = posts.filter((post) => post._id != payload)
            localStorage.posts = JSON.stringify(newPosts)
            commit("setAllPosts", newPosts)
        },
        updatePost({ commit }, payload) {
            let posts
            if (localStorage.posts) {
                posts = JSON.parse(localStorage.posts)
                const updatedPost = posts.filter(
                    (post) => post._id != payload._id
                )
                updatedPost.unshift(payload)
                posts = updatedPost
            } else {
                posts = [payload]
            }
            localStorage.posts = JSON.stringify(posts)
            commit("setAllPosts", posts)
        },
    },
    modules: {},
})
