'use client'

import { useEffect } from 'react'

import { activateRemoteConfig } from '@/lib/firebase.browser'

export function RemoteConfigLoader() {
  useEffect(() => {
    activateRemoteConfig()
  }, [])

  return null
}
