<template>
  <div class="container">
    <div class="row">
      <div class="col task">Tarea</div>
      <div class="col-2 font-weight-bold text-center completed">Completed</div>
    </div>
    <div class="row" v-for="task in filterTasks" v-bind:key="task.description">
      <div class="col">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ task.description }}</li>
          <li class="list-group-item"></li>
        </ul>
      </div>
      <div class="col-2 text-center">
        <input
          type="checkbox"
          v-model="task.completed"
          class="form-check-input me-1"
        />{{ task.completed }}
      </div>
    </div>
    <div class="row bg-dark py-2 mt-2 text-whit">
      <div class="col text-center">
        <input
          type="checkbox"
          class="form-check-input me-1"
          v-model="completedTasks"
        />
        <label class="form-check-label text-white font-weight-bold">
          Hide completed tasks
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNavBar",
  data() {
    return {
      tasks: [
        { description: "eat", completed: false },
        { description: "drink", completed: false },
        { description: "meet", completed: false },
      ],
      completedTasks: true,
    };
  },
  computed: {
    //creo un method en el que paso una funcion que retorna que con el metodo filter me cree un array si las task no están competadas, si
    filterTasks() {
      return this.completedTasks
        ? this.tasks.filter((task) => !task.completed)
        : this.tasks;
    },
  },
};
</script>
<style>
.task {
  background-color: rgb(213, 214, 214);
}
.completed {
  background-color: rgb(137, 138, 138);
}
</style>