'use client'

import {
  GoogleAuthProvider,
  User,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { getFirebaseApp } from '@/lib/firebase'
import { initializeAnalytics } from '@/lib/analytic.browser'
import { Analytics, setUserProperties } from 'firebase/analytics'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'

type AuthContextValue = {
  user: User | null
  isReady: boolean
  googleSignIn: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isReady, setIsReady] = useState(false)
  const auth = useMemo(() => getAuth(getFirebaseApp()), [])
  const provider = useMemo(() => new GoogleAuthProvider(), [])
  const analyticsRef = useRef<Analytics | null>(null)

  useEffect(() => {
    let isMounted = true

    initializeAnalytics(getFirebaseApp())
      .then(instance => {
        if (!isMounted) return
        analyticsRef.current = instance
      })
      .catch(error => {
        console.warn('Analytics not initialized:', error)
      })

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setIsReady(true)
    })

    return unsubscribe
  }, [auth])

  useEffect(() => {
    const analytics = analyticsRef.current
    if (!analytics) return

    // Any user that logged in using email @incentro.com is considered as internal user
    const isInternal = user?.email?.endsWith('@incentro.com') ?? false

    // Store as string to match analytics custom property expectations.
    setUserProperties(analytics, { is_internal_user: String(isInternal) })
  }, [user])

  const googleSignIn = useCallback(async () => {
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Failed to sign in with Google:', error)
    }
  }, [auth, provider])

  const logout = useCallback(async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Failed to sign out:', error)
    }
  }, [auth])

  const value = useMemo(
    () => ({
      user,
      isReady,
      googleSignIn,
      logout,
    }),
    [user, isReady, googleSignIn, logout]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
export default useAuth
