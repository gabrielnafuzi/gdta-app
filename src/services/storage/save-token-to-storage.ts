import AsyncStorage from '@react-native-async-storage/async-storage'

import { TOKEN_STORAGE_KEY } from '@/constants'

export const saveTokenToStorage = async (token: string) => {
  await AsyncStorage.setItem(TOKEN_STORAGE_KEY, token)
}
