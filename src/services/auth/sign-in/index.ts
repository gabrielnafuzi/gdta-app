import { AxiosError } from 'axios'

import { api } from '@/services'

import { Response, ResponseData, SignInPayload } from './types'

export const signIn = async ({
  email,
  password
}: SignInPayload): Promise<Response> => {
  try {
    const response = await api.post<ResponseData>('/sign-in', {
      email,
      password
    })

    return {
      error: null,
      data: { ...response.data }
    }
  } catch (e) {
    const error =
      (e as AxiosError).response?.status === 400
        ? 'Senha ou email incorretos'
        : 'Erro ao tentar logar'

    return {
      error,
      data: { token: null, user: null }
    }
  }
}
