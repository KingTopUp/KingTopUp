import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  increment,
  serverTimestamp
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
const auth = getAuth(app);
const db = getFirestore(app);

window.submitTopup = async function () {
  const game = document.getElementById("game").value;
  const price = parseInt(document.getElementById("price").value);
  const result = document.getElementById("topup-result");

  if (!game || isNaN(price)) {
    result.innerText = "❌ Masukkan nama game dan harga.";
    return;
  }

  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      result.innerText = "❌ Anda belum login.";
      return;
    }

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    const data = userSnap.data();

    if (data.balance < price) {
      result.innerText = "❌ Saldo tidak cukup.";
      return;
    }

    await updateDoc(userRef, {
      balance: increment(-price),
      transactions: arrayUnion({
        type: "topup",
        game,
        price,
        time: serverTimestamp()
      })
    });

    result.innerText = `✅ Berhasil top up ${game} senilai Rp${price.toLocaleString("id-ID")}`;
  });
};
