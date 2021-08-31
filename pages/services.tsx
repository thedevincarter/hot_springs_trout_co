import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Services: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Troutfitters Services</title>
                <meta name="description" content="Services provided by troutfitters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Troutfitters Services</h1>
            </main>
        </div>
    );
};

export default Services;
