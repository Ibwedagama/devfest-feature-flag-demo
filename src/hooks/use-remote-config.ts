'use client'

import { FLAGS } from '@/lib/constant'
import { getFirebaseApp } from '@/lib/firebase'
import { initializeRemoteConfig } from '@/lib/remote-config.browser'
import { activate, fetchAndActivate, getValue, onConfigUpdate } from 'firebase/remote-config'
import { useEffect, useState } from 'react'

export default function useRemoteConfig() {
  const [isReady, setIsReady] = useState(false)
  const [isMaintenance, setIsMaintenance] = useState(false)
  const [isDiscounted, setIsDiscounted] = useState(false)

  useEffect(() => {
    async function loadConfig() {
      const app = getFirebaseApp()
      try {
        const rc = await initializeRemoteConfig(app)
        await fetchAndActivate(rc)

        setIsMaintenance(getValue(rc, FLAGS.KILL_SWITCH_IS_MAINTENANCE).asBoolean())
        setIsDiscounted(getValue(rc, FLAGS.RELEASE_DISCOUNTED_PRICING_SECTION).asBoolean())
        setIsReady(true)

        // Handle realtime config updates
        onConfigUpdate(rc, {
          next: configUpdate => {
            if (configUpdate.getUpdatedKeys().has(FLAGS.KILL_SWITCH_IS_MAINTENANCE)) {
              activate(rc).then(() => {
                setIsMaintenance(getValue(rc, FLAGS.KILL_SWITCH_IS_MAINTENANCE).asBoolean())
              })
            }

            if (configUpdate.getUpdatedKeys().has(FLAGS.RELEASE_DISCOUNTED_PRICING_SECTION)) {
              activate(rc).then(() => {
                setIsDiscounted(getValue(rc, FLAGS.RELEASE_DISCOUNTED_PRICING_SECTION).asBoolean())
              })
            }
          },
          error: error => {
            console.error('Config update error:', error)
          },
          complete: () => {
            console.warn('Listening stopped.')
          },
        })
      } catch (error) {
        console.error('Failed to initialize remote config:', error)
      }
    }

    loadConfig()
  }, [])

  return {
    isReady,
    isMaintenance,
    isDiscounted,
  }
}
