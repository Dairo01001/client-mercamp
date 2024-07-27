import { lazy, StrictMode, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import Loading from './components/Loading/Loading'
import axios from 'axios'
import store from './redux/store'

axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const Home = lazy(() => import('./pages/Home/Home'))
const SignIn = lazy(() => import('./pages/SignIn/SignIn'))
const SignUp = lazy(() => import('./pages/SignUp/SignUp'))
const Products = lazy(() => import('./pages/Products/Products'))

export const App = () => {
  return (
    <StrictMode>
      <div className='container mx-auto flex min-h-full flex-col items-center justify-center shadow-xl'>
        <Suspense fallback={<Loading />}>
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/products' element={<Products />} />
              </Routes>
            </BrowserRouter>
          </Provider>
        </Suspense>
      </div>
    </StrictMode>
  )
}

export default App
