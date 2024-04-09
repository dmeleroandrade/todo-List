<template>
  <div class="container">
    <div class="row">
      <div class="col task">Tasks</div>
      <div class="col-2 font-weight-bold text-center completed">Completed</div>
    </div>
    <div class="row" v-for="(task,index) in filterTasks" v-bind:key="index">
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
          <button
            class="btn btn-primary button-add-board mt-2"
            v-on:click="addTask"
          >
            edit
          </button>
          <button
            class="btn btn-primary button-add-board mt-2"
            v-on:click="addTask"
          >
            delete
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
import  {db} from "../dbConnection/config.js";

import { collection, getDocs, addDoc } from "firebase/firestore";

export default {
  name: "TaskList",
  data() {
    return {
      tasks: [],
      completedTasks: true,
      newItem: "",
    };
  },
  mounted() {
    this.getAll();
  },
  computed: {
    filterTasks() {
      return this.completedTasks ? this.tasks.filter((task) => !task.completed) : this.tasks;
    },
  },
  methods: {
  async addTask() {
    if (!this.newItem.trim()) {
      console.warn("La descripción de la tarea está vacía.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "tareas"), {
        description: this.newItem.trim(),
        completed: false,
      });

      this.tasks.push({
        id: docRef.id,
        description: this.newItem.trim(),
        completed: false,
      });

      this.newItem = "";
      console.log("Tarea agregada con éxito a Firebase.");
    } catch (error) {
      console.error("Error al agregar la tarea a Firebase:", error);
    }
  },
  async getAll() {
    const querySnapshot = await getDocs(collection(db, "tareas"));
    querySnapshot.forEach((doc) => {
      this.tasks.push({
        id: doc.id,
        description: doc.data().description,
        completed: doc.data().completed,
      });
    });
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