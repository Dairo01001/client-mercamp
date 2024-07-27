import axios from 'axios'
import { SignUp, SignUpResponse } from '../models/SignUp.model'
import { loadAbort } from '../../../utils'

export const signUp = (data: SignUp) => {
  const controller = loadAbort()
  return {
    call: axios.post<SignUpResponse>('/users', data),
    controller
  }
}
