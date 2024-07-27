import axios from 'axios'
import { User } from '../models/User.model'
import { loadAbort } from '../utils/LoadAbort.utility'

export const login = (email: string, password: string) => {
  const controller = loadAbort()
  return {
    call: axios.post<User>('/auth/login', { email, password }),
    controller
  }
}
