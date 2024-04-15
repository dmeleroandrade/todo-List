<template>
  <div class="container">
    <div class="row">
      <div class="col-7 task">Tasks</div>
      <div class="col-5 font-weight-bold text-center completed">Completed</div>
    </div>
    <div class="row" v-for="(task,index) in filterTasks" v-bind:key="index">
      <div class="col-7">
        <ul class="list-group list-group-flush mt-2">
          <li class="list-group-item">{{ task.description }} </li>
        </ul>
      </div>
      <section class="col-5">  
        <div class="d-flex justify-content-end">
        <div class="mt-3 text-center">
          <input type="checkbox" v-model="task.completed" class="form-check-input mt-2"/>{{ task.completed ? 'Completed' : '' }}
        </div>
        <div class="">
          <button class="btn btn-primary button-add-board mt-2" v-on:click="editTask(task)">edit</button> 
        </div>
        <div class="">
          <button class="btn btn-danger button-add-board mt-2" v-on:click="deleteTask(task.id)">delete</button>
        </div>
      </div>
      </section>
    </div>

    <!-- aquí pongo el input para agregar una nueva tarea -->
    <section>
      <div class="row addtask">
        <div class="col-7">
          <input class="form-control mt-2" id="name" placeholder="Add another task..." v-model="newItem"/>
        </div>
        <div class="col-5">
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-success button-add-board mt-2" v-on:click="addTask"> Add</button>
          </div>
        </div>

      </div>
      <!-- hide -->
      <div class="row bg-dark py-2 mt-2 text-whit">
        <div class="col text-center">
          <input type="checkbox" class="form-check-input me-1" v-model="completedTasks"/>
          <label class="form-check-label text-white font-weight-bold"> Hide completed tasks </label>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import  {db} from "../dbConnection/config.js";

import { collection, getDocs, addDoc, deleteDoc,updateDoc, doc } from "firebase/firestore";

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
    // Añado las tareas de la db, y la sobrescribo el a interfaz
  async addTask() {
    // si obtiene espacios en blanco, es decir si no escriben nada, nos devuelve este warning
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

   // Borro las tareas de la db
   async deleteTask(taskId) {
   try {
       // elimina la tarea de la db
       await deleteDoc( doc(db, "tareas", taskId));

       // elimino la tarea de la lista local
       this.tasks = this.tasks.filter((task) => task.id !==taskId);

        console.log("se eliminó con exito de firebase");


      }catch(error) {
    console.error("Error al eliminar la tarea de firebase", error)
  }
},

  // Modificar la tarea
  async editTask(task) {
  // Abre un cuadro de diálogo o formulario para que el usuario edite la tarea

  // Realiza la actualización en la base de datos
  try {
    await updateDoc(doc(db, "tareas", task.id), {
      description: task.description,
      completed: task.completed,
    });

    console.log("Tarea actualizada con éxito en Firebase.");
  } catch (error) {
    console.error("Error al actualizar la tarea en Firebase:", error);
  }
},

  // Obtengo todas las tareas desde la base de datos
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