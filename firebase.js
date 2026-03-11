import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAokuh_ChYbf_6AMGnxZbiib0ZHxxPlG5s",
  authDomain: "e-commerce-website-aabd3.firebaseapp.com",
  databaseURL: "https://e-commerce-website-aabd3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-commerce-website-aabd3",
  storageBucket: "e-commerce-website-aabd3.firebasestorage.app",
  messagingSenderId: "778189699181",
  appId: "1:778189699181:web:233ab02023b285d2532764",
  measurementId: "G-15EM609ELN"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
