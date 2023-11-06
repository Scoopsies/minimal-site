
import './App.css'
import Navbar from './Componenets/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import { Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();

  return (
    <div className='page'>
      <Navbar/>
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
