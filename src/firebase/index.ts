
import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
// This function can be used in both client and server components.
export function getSdks(firebaseApp?: FirebaseApp) {
  const app = firebaseApp || (!getApps().length ? initializeApp(firebaseConfig) : getApp());
  return {
    firebaseApp: app,
    auth: getAuth(app),
    firestore: getFirestore(app)
  };
}

// All exports from here are client-side only and will cause errors if used on the server.
export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';

// This function is for client-side initialization and should not be used on the server.
export function initializeFirebase() {
    'use client';
    return getSdks();
}
