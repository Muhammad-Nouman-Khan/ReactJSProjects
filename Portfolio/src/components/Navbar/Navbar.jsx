import {useState} from 'react'
import { navLinks } from '../../constants'
import styles from './Navbar.module.css'
import menu from '../../assets/menu.png'
import cross from '../../assets/cross.png'


const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  return (
    <nav className={styles.Navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.NavMenu}>
            <img src={toggle ? cross : menu} onClick = {()=>setToggle(!toggle)} className = {`${styles.MenuBtn}`} alt="" />
            
            <ul className={`${styles.MenuItems} ${toggle && styles.MenuOpen}`} onClick={()=>setToggle(false)}>
                {navLinks.map((nav,index) => (
                    <li key={index}>
                        <a href={nav.id}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            
        </div>
    </nav>
  )
}

export default Navbar