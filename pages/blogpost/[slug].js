import React, { useEffect, useState } from 'react';
import styles from '../../styles/BlogPost.module.css';
import { useRouter } from 'next/router';

const slug = () => {
    const [blog, setBlog] = useState();
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setBlog(parsed)
            })
    }, [router.isReady])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1> {blog && blog.title}</h1>
                <div>{blog && blog.content}</div>
            </main>
        </div>
    )
}

export default slug;