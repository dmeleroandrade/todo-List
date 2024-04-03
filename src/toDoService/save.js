import { db } from '../dbConnection/config.js'
import { collection, addDoc, } from "firebase/firestore";

export async function save(tarea) {
    try {
        const docRef = await addDoc(collection(db, "tareas"),
            tarea
        );
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

