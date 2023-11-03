
import './App.css'
import Navbar from './Componenets/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


function App() {
  const {pathname} = useLocation();

  return (
    <div className='page'>
      <Navbar/>
      <AnimatePresence initial={false}>
        <Routes key={pathname}>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
