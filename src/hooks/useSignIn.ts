import { useDispatch } from 'react-redux'
import { User } from '../models'
import { login } from '../services'
import useFetch from './useFetch'
import { createUser } from '../redux/states'

export const useSignIn = () => {
  const dispatch = useDispatch()
  const { loading, callEndpoint } = useFetch<User>()

  const userLogin = async (email: string, password: string) => {
    const response = await callEndpoint(login(email, password))
    dispatch(createUser(response.data))
  }

  return { loading, userLogin }
}

export default useSignIn
