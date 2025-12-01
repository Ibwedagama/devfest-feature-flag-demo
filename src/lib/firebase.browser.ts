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
    // Set the minimum fetch interval to 0 to fetch remote config on every page load for demo purposes
    // Please use a reasonable value in production environment, the default is 60_000 or 60 seconds
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
