import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../models'

export const initialState: User = {
  id: '',
  name: '',
  email: '',
  token: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (_, action) => action.payload
  }
})

export const { createUser } = userSlice.actions

export default userSlice.reducer
