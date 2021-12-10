import React from 'react'
import styles from './Footer.module.css'
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <p><strong>hotcoffee</strong> 2020 copyright all rights reserved</p>
                <div className={styles.footer_social_links}>
                <a href="#">
                    <img src="/instagram.svg" alt="insta-icon" />
                </a>
                <a href="#">
                    <img src="/twitter.svg" alt="twitter-icon" />
                </a>
                <a href="#">
                    <img src="/linkedin.png" alt="linked-icon" />
                </a>
            </div>
            </div>
           
        </div>
    )
}

export default Footer
