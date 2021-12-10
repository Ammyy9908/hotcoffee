import Link from 'next/link'
import React from 'react'
import styles from './PostCard.module.css'
function PostCard({image}) {
    return (
        <div className={styles.post_card}>
            <div className={styles.post_card_thumb}>
                <img src={image} alt="card-thumb" />
                <div className={styles.post_card_gradient}></div>
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_title}>
                long established
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem magni earum esse tenetur qui distinctio rerum labore consequatur similique veritatis obcaecati, beatae voluptatum enim! Mollitia vero maiores quae dolore.</p>
                <div className={styles.card_controls}>
                    <span>May 20th 2020</span>
                    <Link href="/more">
                    <a>Read more</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard
