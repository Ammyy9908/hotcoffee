import Link from 'next/link'
import React from 'react'
import styles from './UniquePost.module.css'
function UniquePost() {
    return (
        <div className={styles.unique_post}>
            <div className={styles.unique_post_wrapper}>
                <div className={styles.unique_post_content}>
                    <h2>What is Lorem Ipsum?</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
                    <div className="card_controls">
                        <span>May 20</span>
                        <Link href="/more"><a>Read more</a></Link>
                    </div>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt="" className={styles.unique_post_cover} />
        </div>
    )
}

export default UniquePost
