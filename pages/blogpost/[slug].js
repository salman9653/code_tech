import React, { useEffect, useState } from 'react';
import styles from '../../styles/BlogPost.module.css';
import { useRouter } from 'next/router';

const slug = (props) => {
    const [blog, setBlog] = useState(props.blog);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1> {blog && blog.title}</h1>
                <div>{blog && blog.content}</div>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query;
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    let blog = await data.json();
    return {
        props: { blog },
    }
}

export default slug;