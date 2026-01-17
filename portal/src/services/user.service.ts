import { firestore } from "../core/config/firebase";
import { collection as collectionRef, doc, getDoc } from "firebase/firestore";
import { CollectionID } from "../core/constants/collection-id";
import type { IUserDao } from "../core/dao/user.dao";

const collection = collectionRef(firestore, CollectionID.USERS);

const getUserFromAuthId = async (authId: string): Promise<IUserDao | null> => {
  try {
    const userDocRef = doc(collection, authId);
    const snap = await getDoc(userDocRef);

    if (!snap.exists()) {
      return null;
    }

    return {
      id: snap.id,
      ...snap.data(),
    } as IUserDao;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const UserService = {
  getUserFromAuthId,
};

export default UserService;
