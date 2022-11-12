import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './comps/Footer'
import Headers from './comps/Headers'
import SingleProduct from './comps/SingleProduct'
import CheckoutPage from './pages/CheckoutPage'
import Collections from './pages/Collections'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/collections/:id' element={<SingleProduct/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
