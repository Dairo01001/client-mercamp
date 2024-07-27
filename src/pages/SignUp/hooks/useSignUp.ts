import { useFetch } from '../../../hooks'
import { SignUp, SignUpResponse } from '../models/SignUp.model'
import { signUp } from '../services/SignUp.service'

export const useSignUp = () => {
  const { loading, callEndpoint } = useFetch<SignUpResponse>()

  const userRegister = async (data: SignUp) => {
    const response = await callEndpoint(signUp(data))
    return response.data
  }

  return { loading, userRegister }
}

export default useSignUp
