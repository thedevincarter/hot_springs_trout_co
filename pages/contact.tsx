import type { NextPage } from 'next';
import Head from 'next/head';
import { Center, Heading } from '@chakra-ui/react';

import Layout from '../components/layout/Layout';

const Contact: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Contact Troutfitters</title>
                <meta name="description" content="Contact Troutfitters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Center>
                <Heading as="h1">Troutfitters Contact</Heading>
            </Center>
        </Layout>
    );
};

export default Contact;
