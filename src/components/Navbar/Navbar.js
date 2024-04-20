import React, {useState} from 'react'
import  styles from './Navbar.module.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Ismail Drissi</a>
        <div className={styles.menu}>
          <button className={styles.btn_icon} onClick={()=>setShowMenu(!showMenu)}>{(showMenu)?<IoClose className={styles.icon}/>
:<RxHamburgerMenu className={styles.icon}/>}</button>
          <ul className={`${styles.menu_items} ${showMenu && styles.menu_open}`} onClick={()=>setShowMenu(false)}>
            <li><a href="#about" >About me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#languages">Languages</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
    </nav>
  )
}

