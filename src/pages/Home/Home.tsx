import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'

export const Home = () => {
  const user = useSelector((state: RootState) => state.user)
  console.log(user)

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <h1>Home</h1>
      <Link to='/products'>Products</Link>
      <Link to='/signin'>Sign In</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  )
}

export default Home
