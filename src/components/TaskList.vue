<template>
  <div class="container">
    <div class="row">
      <div class="col task">Tasks</div>
      <div class="col-2 font-weight-bold text-center completed">Completed</div>
    </div>
    <div class="row" v-for="task in filterTasks" v-bind:key="task.description">
      <div class="col">
        <ul class="list-group list-group-flush mt-2">
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

    <!-- aquí pongo el input para agregar una nueva tarea -->
    <section>
      <div class="row addtask">
        <div class="col">
          <input
            class="form-control mt-2"
            id="name"
            placeholder="Add another task..."
            v-model="newItem"
          />
        </div>
        <div class="col-2">
          <button
            class="btn btn-primary button-add-board mt-2"
            v-on:click="addTask"
          >
            Add
          </button>
        </div>
      </div>
      <!-- hide -->
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
    </section>
  </div>
</template>

<script>
import { save } from "../toDoService/save.js";

export default {
  name: "TaskList",
  data() {
    return {
      tasks: [
        { description: "eat", completed: false },
        { description: "drink", completed: false },
        { description: "meet", completed: false },
      ],
      completedTasks: true,
      newItem: "",
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
  methods: {
    addTask() {
      const task = {
        description: this.newItem,
        completed: false,
      };
      save(task);
      this.tasks.push({
        description: this.newItem,
        completed: false,
    })
      this.newItem = "";
   
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
.button-add-board {
  margin-left: 61px;
}
</style>