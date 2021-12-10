import Link from 'next/link'
import React from 'react'
import styles from './LatestPostCard.module.css'
function LatestPostCard() {
    return (
        <div className={styles.latest_post_card}>
            <div className={styles.latest_post_meta}>
                <h3 className={styles.latest_post__title}>
                long established
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit assumenda facere fugit saepe! Voluptatibus quibusdam quis, provident, optio molestias vero maxime, dolorum esse culpa tempora odio ut commodi exercitationem.</p>
                <div className={styles.latest_post_time_and_controls}>
                    <span>May 20th 2020</span>
                    <Link href="/d/1"><a>Read more</a></Link>
                </div>
            </div>
            <img src="/firstpost.jpg" alt="" />
        </div>
    )
}

export default LatestPostCard
