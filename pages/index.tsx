import type { NextPage } from 'next';
import Head from 'next/head';
import { Center, Heading } from '@chakra-ui/react';

import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Troutfitters</title>
                <meta name="description" content="Wyomings's premier fly fishing guides" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Center>
                <Heading as="h1">Troutfitters Home</Heading>
            </Center>
        </Layout>
    );
};

export default Home;
