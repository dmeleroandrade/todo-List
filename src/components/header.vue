<template>
  <div class="header text-white text-center">
    <nav class="navbar bg-body-tertiary">
      <form class="container-fluid justify-content-start">
        <button class="btn btn-outline-success me-2" type="button">
          menu
        </button>
        <button class="btn btn-outline-success me-2" type="button">
          lists
        </button>
      </form>
    </nav>
  </div>
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