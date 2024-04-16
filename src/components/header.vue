<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid ms-4">
        <a class="navbar-brand" href="#"><i class="fa-solid fa-house"></i></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
              <router-link class="nav-link " to="/Home">Home</router-link>
              <router-link class="nav-link " to="/About">About</router-link>
          </div>
        </div>
      </div>
    </nav>  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
.header {
  background-color: rgb(213, 214, 214);
}
</style>