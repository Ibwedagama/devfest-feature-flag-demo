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
    // Set fetch interval from env; default to 0 in development for rapid refresh, otherwise fall back to 60s.
    const envInterval = process.env.NEXT_PUBLIC_REMOTE_CONFIG_FETCH_INTERVAL
    const defaultInterval = process.env.NODE_ENV === 'development' ? 0 : 60_000
    const parsedInterval =
      envInterval !== undefined && !Number.isNaN(Number(envInterval))
        ? Number(envInterval)
        : defaultInterval
    remoteConfigInstance.settings.minimumFetchIntervalMillis = parsedInterval
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
