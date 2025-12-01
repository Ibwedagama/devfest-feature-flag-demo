import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'
import { getRemoteConfig, fetchAndActivate, type RemoteConfig } from 'firebase/remote-config'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
}

let appInstance: FirebaseApp | null = null
let remoteConfigInstance: RemoteConfig | null = null

function assertBrowser() {
  if (typeof window === 'undefined') {
    throw new Error('Firebase browser SDK can only be initialized in the client')
  }
}

function getFirebaseApp(): FirebaseApp {
  assertBrowser()
  if (!appInstance) {
    appInstance = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
  }
  return appInstance
}

function getFirebaseRemoteConfig(): RemoteConfig {
  assertBrowser()
  if (!remoteConfigInstance) {
    remoteConfigInstance = getRemoteConfig(getFirebaseApp())
    // Set to 0 here so flag changes refresh every load during the demo. If you enable Firebase Remote
    // Config Realtime, updates will stream automatically and you should raise this interval (default
    // 60_000 ms) to avoid unnecessary polling in production.
    remoteConfigInstance.settings.minimumFetchIntervalMillis = 0
  }
  return remoteConfigInstance
}

async function activateRemoteConfig() {
  const rc = getFirebaseRemoteConfig()
  try {
    await fetchAndActivate(rc)
  } catch (err) {
    console.warn('Failed to activate remote config', err)
  }
  return rc
}

export { activateRemoteConfig, getFirebaseRemoteConfig }
