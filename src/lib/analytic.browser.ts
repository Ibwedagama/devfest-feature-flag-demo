import { FirebaseApp } from 'firebase/app'
import { Analytics, getAnalytics, isSupported } from 'firebase/analytics'

let analytics: Analytics | null = null

async function initializeAnalytics(app: FirebaseApp) {
  const supported = await isSupported()

  if (!supported) {
    throw new Error('Analytics only supported in browser')
  }

  if (!analytics) {
    analytics = getAnalytics(app)
  }

  return analytics
}

export { initializeAnalytics }
