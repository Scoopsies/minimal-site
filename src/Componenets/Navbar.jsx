import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const {pathname} = useLocation();

  return (
    <nav>
        <ul>
            <Link to={'/'} className={pathname === '/' ? 'selectedNav' : null}>
                <li>Home</li>
            </Link>
            <Link to={'/contact'} className={pathname === '/contact' ? 'selectedNav' : null}>
                <li>Contact</li>
            </Link>
            <Link to={'/projects'} className={pathname === '/projects' ? 'selectedNav' : null}>
              <li>Projects</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar