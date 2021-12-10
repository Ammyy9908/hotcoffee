import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

function NotFound() {
    return (
        <div>
            <Navbar/>
            <div className='not-found'>
                <div className='not-found-content'>
                    <img src="/not_found.svg" alt="404-error"/>
                    <h2>Sorry, it looks like the page get lost</h2>
                    <Link href="/"><a>Back to Home</a></Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
