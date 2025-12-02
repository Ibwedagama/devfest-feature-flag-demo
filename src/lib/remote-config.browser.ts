import { FirebaseApp } from 'firebase/app'
import { getRemoteConfig, isSupported, RemoteConfig } from 'firebase/remote-config'

let remoteConfigInstance: RemoteConfig | null = null

async function initializeRemoteConfig(app: FirebaseApp) {
  const supported = await isSupported()

  if (!supported) {
    return null
  }

  if (!remoteConfigInstance) {
    remoteConfigInstance = getRemoteConfig(app)

    const defaultInterval = process.env.NODE_ENV === 'development' ? 0 : 60_000
    const parsedInterval =
      Number(process.env.NEXT_PUBLIC_REMOTE_CONFIG_FETCH_INTERVAL) || defaultInterval

    remoteConfigInstance.settings.minimumFetchIntervalMillis = parsedInterval
  }

  return remoteConfigInstance
}

export { initializeRemoteConfig }
