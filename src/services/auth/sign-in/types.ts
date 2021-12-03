export type SignInPayload = {
  email: string
  password: string
}

export type User = {
  id: string
  email: string
}

export type SignInResponseData = {
  token: string | null
  user: User | null
}

export type SignInResponse = {
  data: SignInResponseData
  error: string | null
}
