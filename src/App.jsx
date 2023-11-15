
import './App.css'
import Navbar from './Componenets/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import Dev from './Pages/Dev'
import { Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence, motion as m } from 'framer-motion'


function App() {
  const location = useLocation();

  console.log(location)

  return (
    <div className={`page 
    ${location.pathname === '/contact' ? 'contact' 
    : location.pathname === '/projects' ? 'projects' 
    : null}`}>
      <Navbar/>
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/dev' element={<Dev/>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
