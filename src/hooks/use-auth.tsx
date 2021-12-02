import React, { useState, useContext, createContext, ReactNode } from 'react'

import { User } from '@/services/auth/sign-in/types'

export type AuthContextData = {
  user: User | null
  setUserData: (user: User) => void
}

export type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  const setUserData = (user: User) => setUser(user)

  return (
    <AuthContext.Provider value={{ user, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
