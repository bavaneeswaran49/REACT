import { useState } from 'react'
import './App.css'
import Navbars from './components/navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Products from './pages/products.jsx';
import Blog from './pages/blog.jsx';
import About from './pages/about.jsx';
import Login from './pages/login.jsx';
import Dropdown from './pages/dropdown.jsx';
import Dropdown1 from './pages/ddown1.jsx';
import Dropdown2 from './pages/ddown2.jsx';
import Dropdown3 from './pages/ddown3.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dropdown" element={<Dropdown />} />
        <Route path='/dropdown1' element={<Dropdown1 />} />
        <Route path='/dropdown2' element={<Dropdown2 />} />
        <Route path='/dropdown3' element={<Dropdown3 />} />
      </Routes>
    </>
  )
}

export default App
