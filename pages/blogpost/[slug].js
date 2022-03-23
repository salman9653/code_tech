import React from 'react';
import styles from '../../styles/BlogPost.module.css';
import { useRouter } from 'next/router';

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the page : {slug}</h1>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro incidunt cupiditate unde corporis aut perspiciatis nobis iusto praesentium amet eius!</div>
            </main>
        </div>
    )
}

export default slug;