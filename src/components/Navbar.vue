<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container font-weight-bold">
            <a class="navbar-brand" href="#">Post Categories</a>
            <div class="ml-auto">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link
                            class="nav-link"
                            aria-current="page"
                            to="/"
                            active-class="active"
                            exact
                            >Post</router-link
                        >
                        <router-link
                            class="nav-link"
                            to="/categories"
                            active-class="active"
                            >Categories</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
}
</script>
