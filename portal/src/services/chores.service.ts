import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../core/config/firebase";

export interface Chore {
  id: string;
  name: string;
  reward: number;
  assignedBy: string;
  assignedTo: string;
  complete: boolean;
}
// Change to collection like users
export const getChores = async () => {
  try {
    const collectionRef = collection(firestore, "chores");
    const snap = await getDocs(collectionRef);
    const choresData: Chore[] = [];

    snap.forEach((doc) => {
      const data = doc.data();
      choresData.push({
        id: doc.id,
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
