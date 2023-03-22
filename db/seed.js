import db from "./firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import products from "../src/assets/products/products.js";

const itemsCollectionRef = collection(db, "items");

const promises = products.map((product) => addDoc(itemsCollectionRef, product));

Promise.all(promises).then(() => {
  console.log("All done!");
  process.exit(0);
});
