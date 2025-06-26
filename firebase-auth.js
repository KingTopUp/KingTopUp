import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
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
const provider = new GoogleAuthProvider();

window.signInWithGoogle = async function () {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        balance: 0,
        createdAt: serverTimestamp()
      });
    }

    localStorage.setItem("user", JSON.stringify(user));
    location.reload();
  } catch (error) {
    alert("Login gagal: " + error.message);
  }
};

window.logout = function () {
  signOut(auth).then(() => {
    localStorage.removeItem("user");
    location.reload();
  });
};

onAuthStateChanged(auth, async (user) => {
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const userInfo = document.getElementById("user-info");

  if (user) {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    const data = userSnap.data();
    if (userInfo) {
      userInfo.innerHTML = `
        <p>👤 ${data.name}</p>
        <img src="${data.photo}" width="40" style="border-radius:50%;">
        <p>💰 Saldo: Rp${data.balance.toLocaleString('id-ID')}</p>
      `;
    }

    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    if (userInfo) userInfo.innerHTML = "";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
});
