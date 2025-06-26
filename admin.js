import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBaOWjo1MiAYc0I9uaR12Viu1qLAimJEJ0",
  authDomain: "kingtopup-f30f4.firebaseapp.com",
  projectId: "kingtopup-f30f4",
  storageBucket: "kingtopup-f30f4.firebasestorage.app",
  messagingSenderId: "1060554841085",
  appId: "1:1060554841085:web:5586e62d163464bbabd794"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.addBalance = async function () {
  const email = document.getElementById("email").value;
  const amount = parseInt(document.getElementById("amount").value);
  const result = document.getElementById("result");

  if (!email || isNaN(amount)) {
    result.innerText = "❌ Harap isi email dan jumlah saldo.";
    return;
  }

  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      result.innerText = "❌ Pengguna tidak ditemukan.";
      return;
    }

    const userDoc = snapshot.docs[0];
    const userRef = doc(db, "users", userDoc.id);

    await updateDoc(userRef, {
      balance: increment(amount)
    });

    result.innerText = `✅ Berhasil menambahkan Rp${amount.toLocaleString("id-ID")} ke ${email}`;
  } catch (err) {
    result.innerText = "❌ Error: " + err.message;
  }
};
