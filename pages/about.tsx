import type { NextPage } from 'next';
import Head from 'next/head';
import { Center, Heading } from '@chakra-ui/react';

import Layout from '../components/layout/Layout';

const About: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>About Troutfitters</title>
                <meta name="description" content="A brief history of Troutfitters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Center>
                <Heading as="h1">Troutfitters About</Heading>
            </Center>
        </Layout>
    );
};

export default About;
