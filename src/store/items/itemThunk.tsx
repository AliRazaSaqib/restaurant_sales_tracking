import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "@firebase/firestore";
import { firebaseDB } from "../../firebase";
import { MenuItem } from "../../types/CommonTypes";

export const addDataThunk = createAsyncThunk(
  "firebase/addData",
  async (data: MenuItem) => {
    const formValues = collection(firebaseDB, "items");
    await addDoc(formValues, data);
  }
);

export const getDataThunk = createAsyncThunk("firebase/getData", async () => {
  try {
    const querySnapshot = await getDocs(collection(firebaseDB, "items"));
    const dataArray = querySnapshot.docs.map((doc): any => ({
      id: doc.id,
      ...doc.data(),
    }));
    return dataArray;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
});

export const deleteDataThunk = createAsyncThunk(
  "firebase/deleteData",
  async (id: string) => {
    const deleteItem = doc(firebaseDB, "items", id);
    await deleteDoc(deleteItem);
    return id;
  }
);

export const editDataThunk = createAsyncThunk(
  "firebase/editData",
  async (data: MenuItem | any) => {
    try {
      const updateItemRef = doc(firebaseDB, "items", String(data.id));
      await updateDoc(updateItemRef, data);
      return data;
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  }
);
