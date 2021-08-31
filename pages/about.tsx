import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Troutfitters</title>
                <meta name="description" content="A brief history of Troutfitters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Troutfitters About</h1>
            </main>
        </div>
    );
};

export default About;
