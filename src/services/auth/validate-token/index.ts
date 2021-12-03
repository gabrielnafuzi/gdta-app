import { api } from '@/services'

import { ValidateTokenResponse } from './types'

export const validateToken = async (
  token: string
): Promise<ValidateTokenResponse> => {
  try {
    const response = await api.post<ValidateTokenResponse>(
      '/validate-token',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    return { isValid: response.status === 200 }
  } catch (e) {
    return { isValid: false }
  }
}
