import { FormEvent } from 'react'
import { Input, Logo } from '../../components'
import swal from 'sweetalert'
import useSignUp from './hooks/useSignUp'
import { useNavigate } from 'react-router-dom'
import { useSignIn } from '../../hooks'

export const SignUp = () => {
  const { userRegister } = useSignUp()
  const { userLogin } = useSignIn()
  const navigate = useNavigate()

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
      swal('Error', 'Las contraseñas no coinciden', 'error')
    } else {
      try {
        await userRegister({
          name: `${firstName} ${lastName}`,
          email,
          password
        })

        await userLogin(email, password)
        navigate('/products')
      } catch (error) {
        swal('Error', 'El usuario ya existe', 'error')
      }
    }
  }

  return (
    <form className='py-12' onSubmit={handelSubmit}>
      <div className='mb-10 border-b border-gray-900/10'>
        <div className='h-80'>
          <Logo />
        </div>
        <h2 className='text-base font-semibold leading-7 text-gray-900'>
          Registro de Usuarios
        </h2>

        <div className='mb-10 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <Input
              title='Nombres'
              name='firstName'
              type='text'
              required
              autoComplete='given-name'
            />
          </div>

          <div className='sm:col-span-3'>
            <Input
              title='Apellidos'
              name='lastName'
              type='text'
              required
              autoComplete='family-name'
            />
          </div>

          <div className='col-span-full'>
            <Input
              title='Direccion de correo'
              name='email'
              type='email'
              required
              autoComplete='email'
            />
          </div>

          <div className='sm:col-span-3'>
            <Input
              title='Contraseña'
              name='password'
              type='password'
              required
              autoComplete='current-password'
            />
          </div>

          <div className='sm:col-span-3'>
            <Input
              title='Confirmar contraseña'
              name='confirmPassword'
              type='password'
              required
              autoComplete='current-password'
            />
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900'
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default SignUp
