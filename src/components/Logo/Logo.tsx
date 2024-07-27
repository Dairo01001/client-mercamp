import { Link } from 'react-router-dom'
import LogoImage from '../../assets/logo.png'

export const Logo = () => {
  return (
    <Link to='/' className='sm:mx-auto sm:w-full sm:max-w-sm'>
      <img alt='MerCamp' src={LogoImage} className='mx-auto h-full w-auto' />
    </Link>
  )
}

export default Logo
