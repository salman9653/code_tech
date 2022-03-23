import React from 'react';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';

const Blog = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.blogItem}>
                    <Link href={'/blogpost/learn-reactjs'}>
                        <h2>Learn React.js</h2>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={styles.blogItem}>
                    <Link href={'/blogpost/learn-nextjs'}>
                        <h2>Learn Next.js</h2>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </main>
        </div>
    )
}

export default Blog