import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';

const Blog = (props) => {
    const [blogs, setBlogs] = useState(props.allBlogs);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {blogs.map((blogitem) => {
                    return (
                        <div className={styles.blogItem} key={blogitem.slug}>
                            <Link href={`/blogpost/${blogitem.slug}`}>
                                <h2>{blogitem.title}</h2>
                            </Link>
                            <p>{blogitem.content.substr(0, 150)}</p>
                        </div>
                    )
                })}

            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:3000/api/blogs');
    let allBlogs = await data.json();

    return {
        props: { allBlogs },
    }
}

export default Blog