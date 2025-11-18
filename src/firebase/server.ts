// IMPORTANT: THIS FILE IS SERVER-SIDE ONLY

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore }from 'firebase/firestore';

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
// This function can be used in server components and server actions.
export function getSdks() {
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  return {
    firebaseApp: app,
    auth: getAuth(app),
    firestore: getFirestore(app)
  };
}
