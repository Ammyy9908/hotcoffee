import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import {MdMenu} from "react-icons/md"
function Navbar() {
    return (
        <div className={styles.header}>
            <div className={styles.header_wrapper}>
                <Link href="/">
                    <a className={styles.logo}>HotCoffee</a>
                </Link>
                <div className={styles.nav__right}>
                    <div className={styles.searchbar}>
                        <img src="/lens.svg" alt="lens-icon" />
                        <input type="text" name="key" id="key" placeholder='Search...'/>
                    </div>
                    <nav className={styles.navbar}>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/about"><a>Articles</a></Link>
                        
                            <a href="#"><img src="/instagram.svg" alt="" /></a>
                            <a href="#"><img src="/twitter.svg" alt="" /></a>
                            <a href="#"><img src="/linkedin.png" alt="" /></a>
                       
                    </nav>
                </div>

                <button className={styles.menu_btn}>
                    <MdMenu/>
                </button>
            </div>
        </div>
    )
}

export default Navbar
