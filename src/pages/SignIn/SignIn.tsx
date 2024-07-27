import { Link, useNavigate } from 'react-router-dom'
import { FormEvent } from 'react'
import { Input, Logo } from '../../components'
import { useSignIn } from '../../hooks'
import swal from 'sweetalert'

export const SignIn = () => {
  const navigate = useNavigate()
  const { loading, userLogin } = useSignIn()

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      await userLogin(email, password)
      navigate('/products')
    } catch (error) {
      swal('Error', 'Usuario o contraseña incorrectos', 'error')
    }
  }

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <Logo />
      <div className='mt-1 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form onSubmit={handelSubmit} className='space-y-6'>
          <Input
            title='Correo electronico'
            name='email'
            type='email'
            required
            autoComplete='email'
          />

          <Input
            title='Contraseña'
            name='password'
            type='password'
            required
            autoComplete='current-password'
          />

          <div>
            <button
              type='submit'
              disabled={loading}
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Enviar
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-500'>
          ¿No eres un usuario?{' '}
          <Link
            to='/signup'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
