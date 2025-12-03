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
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setIsReady(true)
    })

    return unsubscribe
  }, [auth])

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
