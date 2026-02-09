import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../core/config/firebase";
import { CollectionID } from "../core/constants/collection-id";
import type { Chore } from "../core/dao/chore.dao";

const getChores = async () => {
  try {
    const collectionRef = collection(firestore, CollectionID.CHORES);
    const snap = await getDocs(collectionRef);
    const choresData: Chore[] = [];

    snap.forEach((doc) => {
      const data = doc.data();
      choresData.push({
        uid: doc.id,
        name: data.name,
        reward: data.reward,
        assignedBy: data.assignedBy,
        assignedTo: data.assignedTo,
        complete: data.complete,
      });
    });

    return choresData;
  } catch (error) {
    console.error("Error fetching document:", error);
    throw error;
  }
};

const addChore = async (choreData: Chore) => {
  try {
    const collectionRef = collection(firestore, CollectionID.CHORES);
    const docRef = await addDoc(collectionRef, choreData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding chore in services:", error);
    throw error;
  }
};

const ChoresService = {
  getChores,
  addChore,
};

export default ChoresService;
