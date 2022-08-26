// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqwRHxae7mzmtY4hk_NKdUiCxh1d2SE54",
    authDomain: "counter-likes-views.firebaseapp.com",
    projectId: "counter-likes-views",
    storageBucket: "counter-likes-views.appspot.com",
    messagingSenderId: "757464844886",
    appId: "1:757464844886:web:e392e49681403e637549f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;