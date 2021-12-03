import AsyncStorage from '@react-native-async-storage/async-storage'

import { USER_STORAGE_KEY } from '@/constants'
import type { User } from '@/services/auth/sign-in/types'

export const saveUserToStorage = async (user: User) => {
  await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
}
