import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useCallback
} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '@/constants'
import { api } from '@/services'
import { validateToken } from '@/services/auth'
import type { User } from '@/services/auth/sign-in/types'
import { parseJSON } from '@/utils'

export type AuthContextData = {
  user: User | null
  isInitializing: boolean
  setUserData: (user: User) => void
  setTokenToAuthorizationHeader: (token: string) => void
}

export type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isInitializing, setIsInitializing] = useState(true)

  const setUserData = (user: User) => setUser(user)

  const setTokenToAuthorizationHeader = (token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  const handleValidateToken = useCallback(async () => {
    setIsInitializing(true)

    const token = await AsyncStorage.getItem(TOKEN_STORAGE_KEY)
    const { isValid } = await validateToken(token!)

    if (isValid) {
      const storageUser = await AsyncStorage.getItem(USER_STORAGE_KEY)

      const parsedUser = parseJSON<User>(storageUser)

      setUserData(parsedUser!)

      setIsInitializing(false)
      setTokenToAuthorizationHeader(token!)

      return
    }

    setIsInitializing(false)
  }, [])

  useEffect(() => {
    handleValidateToken()
  }, [handleValidateToken])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUserData,
        isInitializing,
        setTokenToAuthorizationHeader
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
