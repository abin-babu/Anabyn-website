'use client';

// IMPORTANT: ALL EXPORTS FROM THIS FILE ARE CONSIDERED CLIENT-SIDE

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';

// This file is now purely for client-side exports.
// The server-safe getSdks function has been moved.
