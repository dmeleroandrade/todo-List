<template class="bg-primary">
  <div id="app" class="container">
    <Header />
    <h2 class="text-center">Lista de tareas de {{ usuario }}</h2>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      usuario: "David",
    };
  },
};
</script>

<style>
</style>
