import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const {pathname} = useLocation();
  console.log(pathname)

  return (
    <nav>
        <ul>
            <Link to={'/'} className={pathname === '/' ? 'selectedNav' : null}>
                <li>Home</li>
            </Link>
            <Link to={'/contact'} className={pathname === '/contact' ? 'selectedNav contact' : null}>
                <li>Contact</li>
            </Link>
            <Link to={'/projects'} className={pathname === '/projects' ? 'selectedNav projects' : null}>
              <li>Projects</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar