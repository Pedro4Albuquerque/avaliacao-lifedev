import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"
import { useAuthValue } from '../context/AuthContext'
import { useAuthentication } from '../hooks/useAuthentication'

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication()
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links_list}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
          <li className={styles.brand}><span>Life</span></li>
        </NavLink>

        {!user && (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : ''}>
            <li>Login</li>
            </NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? styles.active : ''}>
            <li>Register</li>
            </NavLink>
          </>
        )}

        {user && (
          <>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.active : ''}>
            <li>Dashboard</li>
            </NavLink>
            <NavLink to="/post/new" className={({ isActive }) => isActive ? styles.active : ''}>
            <li>Novo Post</li>
            </NavLink>
            <button onClick={logout} className={styles.exit}>Sair</button>
          </>
        )}
      </ul>
    </nav>

  )
}

export default Navbar