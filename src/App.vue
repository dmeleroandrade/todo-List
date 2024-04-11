<template class="background">
  <div id="app" class="container-fluid">
    <Header />
    <TaskList/>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import TaskList from "./components/TaskList.vue";
 export default {
  name: "App",
  components: {
    Header,
    Footer,
    TaskList,
    },
  data() {
    return {
      usuario: "David",
    };
  },
};
</script>

<style>
.background{
  background-color: rgb(255, 255, 255);
}
</style>
