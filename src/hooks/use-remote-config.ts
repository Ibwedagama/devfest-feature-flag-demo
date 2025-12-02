'use client'

import { FLAGS } from '@/lib/constant'
import { getFirebaseApp } from '@/lib/firebase'
import { initializeRemoteConfig } from '@/lib/remote-config.browser'
import { activate, fetchAndActivate, getValue, onConfigUpdate } from 'firebase/remote-config'
import { useEffect, useState } from 'react'

export default function useRemoteConfig() {
  const [isReady, setIsReady] = useState(false)
  const [isMaintenance, setIsMaintenance] = useState(false)

  useEffect(() => {
    async function loadConfig() {
      const app = getFirebaseApp()
      const rc = await initializeRemoteConfig(app)

      if (!rc) {
        return
      }

      await fetchAndActivate(rc)

      setIsReady(true)
      setIsMaintenance(getValue(rc, FLAGS.KILL_SWITCH_IS_MAINTENANCE).asBoolean())

      onConfigUpdate(rc, {
        next: configUpdate => {
          if (configUpdate.getUpdatedKeys().has(FLAGS.KILL_SWITCH_IS_MAINTENANCE)) {
            activate(rc).then(() => {
              setIsMaintenance(getValue(rc, FLAGS.KILL_SWITCH_IS_MAINTENANCE).asBoolean())
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
    }

    loadConfig()
  }, [])

  return {
    isReady,
    isMaintenance,
  }
}
