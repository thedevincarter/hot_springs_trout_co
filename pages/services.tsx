import type { NextPage } from 'next';
import Head from 'next/head';
import { Center, Heading } from '@chakra-ui/react';

import Layout from '../components/layout/Layout';

const Services: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Troutfitters Services</title>
                <meta name="description" content="Services provided by troutfitters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Center>
                <Heading as="h1">Troutfitters Services</Heading>
            </Center>
        </Layout>
    );
};

export default Services;
