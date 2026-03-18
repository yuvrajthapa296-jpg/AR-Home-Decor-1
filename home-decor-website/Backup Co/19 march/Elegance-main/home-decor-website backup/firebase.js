import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBqkaLpP30JtPFyijsLZftBLbNLWUdhOPk",
  authDomain: "elegance-ar-home-decor.firebaseapp.com",
  projectId: "elegance-ar-home-decor",
  storageBucket: "elegance-ar-home-decor.firebasestorage.app",
  messagingSenderId: "916741627820",
  appId: "1:916741627820:web:31597034f1794aabb4e409"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Auth functions
export async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
}

export async function signInUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
}

export async function sendVerificationEmail(user) {
  try {
    await user.sendEmailVerification();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function logoutUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Legacy export for compatibility
export const createUser = createUserWithEmailAndPassword;

