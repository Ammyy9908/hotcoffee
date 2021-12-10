import React from 'react'
import styles from './Hero.module.css'
function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                        <h1>Make better coffee <img src="/coffee.svg" alt="coffee-cup" className={styles.coffee} /></h1>
                        
                        <p>why learn how to blog?</p>
                </div>
                <img src="/blog_illustration.png" alt="illustartion" />
            </div>
        </div>
    )
}

export default Hero
