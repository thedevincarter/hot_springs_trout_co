import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Flex, Heading, Box, Text } from '@chakra-ui/react';

import Layout from '../components/layout/Layout';

import troutJumping from '../public/trout_jump_one.jpeg';

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Troutfitters</title>
                <meta name="description" content="Wyomings's premier fly fishing guides" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Flex backgroundColor="green.500" w="90%" rounded="xl" p={6}>
                <Flex direction={{ base: 'column-reverse', md: 'row' }} w="full">
                    <Box flex={1} color="white">
                        <Heading as="h1" mb={6}>
                            Since 2021
                        </Heading>

                        <Text my={4}>
                            Do et non fugiat exercitation quis. Ea adipisicing mollit qui velit consectetur in pariatur
                            dolor. Nisi cupidatat veniam fugiat commodo pariatur. Duis quis qui ea enim irure nulla
                            consectetur ex aute in duis ex magna irure. Occaecat sit aliquip culpa eiusmod. Officia
                            proident irure irure tempor cupidatat cupidatat officia amet laborum. Cupidatat consequat
                            dolore velit laboris do. Aliquip amet exercitation laborum excepteur laboris ad officia
                            irure laborum.
                        </Text>

                        <Text my={4}>
                            Ea consequat excepteur consequat magna ullamco nisi nulla est magna ea proident esse
                            voluptate. Eiusmod anim ex ut dolor adipisicing excepteur. Mollit culpa magna pariatur
                            deserunt commodo nisi officia dolore aute sunt. In aliqua occaecat pariatur non. Irure
                            laborum et officia amet ipsum sint exercitation esse laboris ipsum laborum est sint sint.
                            Officia nulla anim esse elit nulla eiusmod deserunt sit consequat id ad.
                        </Text>
                    </Box>

                    <Box flex={1}>
                        <Image src={troutJumping} alt="trout jumping from river" />;
                    </Box>
                </Flex>
            </Flex>
        </Layout>
    );
};

export default Home;
