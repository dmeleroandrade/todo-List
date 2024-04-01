<template class="bg-primary">
  <div id="app" class="container-fluid">
    <Header />
    <NavBar/>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import NavBar from "./components/NavBar.vue";
 export default {
  name: "App",
  components: {
    Header,
    Footer,
    NavBar,
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
