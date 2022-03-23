import React from 'react';
import styles from '../styles/BlogPost.module.css';
import Link from 'next/link';

const Blog = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.blogItem}>
                    <Link href={'/blogpost/learn-reactjs'}>
                        <h3>Learn React.js</h3>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className={styles.blogItem}>
                    <Link href={'/blogpost/learn-nextjs'}>
                        <h3>Learn Next.js</h3>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </main>
        </div>
    )
}

export default Blog