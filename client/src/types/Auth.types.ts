export interface User {
  fullname: string
  email: string
  password: string
  id: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignUpCredentials {
  fullname: string
  email: string
  password: string
}
