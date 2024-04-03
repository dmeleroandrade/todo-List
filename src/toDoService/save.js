import { db } from '../dbConnection/config.js'
import { collection, addDoc, getDocs} from "firebase/firestore";

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
const querySnapshot = await getDocs(collection(db, "tareas"));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});


