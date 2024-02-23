import { MenuItem } from "../../types/CommonTypes";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "@firebase/firestore";
import { firebaseDB } from "./firebase";

export const addData = async (data: MenuItem) => {
  const formValues = collection(firebaseDB, "items");
  await addDoc(formValues, data);
};

export const getData = async () => {
  try {
    const querySnapshot = await getDocs(collection(firebaseDB, "items"));
    const dataArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return dataArray;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const deleteData = async (id: string) => {
  const deleteItem = doc(firebaseDB, "items", id);
  await deleteDoc(deleteItem);
};

export const editData = async (data: MenuItem) => {
  const updateItem = doc(firebaseDB, "items");
  await updateDoc(updateItem, { data });
};
