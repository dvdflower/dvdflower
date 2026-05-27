import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

const firebaseConfig = {
apiKey: "AIzaSyArdShAGDqUhY0wWRlGLO_FZRuabG4BNOs",
authDomain: "dvdflowers.firebaseapp.com",
projectId: "dvdflowers",
storageBucket: "dvdflowers.firebasestorage.app",
messagingSenderId: "454790351769",
appId: "1:454790351769:web:2e48a45c871ecc3a5b6108",
measurementId: "G-7TS2C2WFRM"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase connected 🌸");
