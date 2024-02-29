import './App.css'
import Navbar from './components/Navbar.tsx'
import Counter from './components/Counter.tsx'
// import Products from './components/Products.tsx'
import './components/products.css'
import { Home } from './components/menus/Home.tsx'
import { Contact } from './components/menus/Contact.tsx'
import { About } from './components/menus/About.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Products for Use State, Use Params, Props
// import { Products } from './components/dynamic-routes/Products.tsx'
// import { Product } from './components/dynamic-routes/Product.tsx'
import { DataReducer } from './components/data-reducer/DataReducer.tsx'
import { Products } from './components/ContextAPI/Pages/Products.tsx'
import { Product } from './components/ContextAPI/Pages/Product.tsx'
import { Cart } from './components/ContextAPI/Pages/Cart.tsx'


function App() {

  return (
    <div>
      <BrowserRouter>
        <div className="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Products for Use State, Use Params, Props
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} /> */}

          {/* Poducts for UseContext */}
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<DataReducer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
