

import './index.css'
import Services from './pages/Services'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Properties from './pages/Properties'

function App() {
 

  return (
    <div>
    
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/property' element={<Properties />} />
          <Route path='/service' element={<Services />} />
        </Routes>
      </BrowserRouter>

    

    </div>
  )
}

export default App
  {/* <Home /> */}
    {/* <Properties/> */}