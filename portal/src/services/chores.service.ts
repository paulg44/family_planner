import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../core/config/firebase";

const getChores = async () => {
  try {
    const collectionRef = collection(firestore, "chores");
    const snap = await getDocs(collectionRef);
    return snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching document:", error);
    throw error;
  }
};

const ChoresService = { getChores };

export default ChoresService;
