import { User } from '@/types/Auth.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user: User | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.status = 'loading'
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.status = 'succeeded'
      state.user = action.payload
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.status = 'failed'
      state.error = action.payload
    },
    logout(state) {
      state.user = null
    },
  },
})

export const { loginStart, loginSuccess, loginFailed, logout } =
  authSlice.actions

export default authSlice.reducer
