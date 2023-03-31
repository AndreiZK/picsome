import { useContext } from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Photos from './pages/Photos'
import Cart from './pages/Cart'
import Header from './components/Header'
import { AppContext } from './appContext'

function App() {

  const context = useContext(AppContext)

  return (
    <div>
        <Header />
        
        <Routes>
            <Route path='/' element={<Photos />}/>
            <Route path='/cart' element={<Cart />}/>
        </Routes>
    </div>
  )
}

export default App
