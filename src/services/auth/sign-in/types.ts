export type SignInPayload = {
  email: string
  password: string
}

export type User = {
  id: string
  email: string
}

export type ResponseData = {
  token: string | null
  user: User | null
}

export type Response = {
  data: ResponseData
  error: string | null
}
