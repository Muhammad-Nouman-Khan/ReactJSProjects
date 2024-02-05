import { useState } from "react";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={styles.Navbar}>
      <img src={logo} alt="" className={styles.logo} />

      <ul className={styles.navItems}>
        <img src={toggle ? close : menu} alt="menuImg" className={`${styles.menuImg}`} onClick = {()=>setToggle(!toggle)} ></img>
        <div className={`${styles.linksContainer} ${toggle && styles.menuOpen}`}>
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a href={nav.id}>{nav.title}</a>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
