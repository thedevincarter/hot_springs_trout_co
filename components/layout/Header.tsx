import React from 'react';
import Link from 'next/link';
import { Heading, Flex, Box } from '@chakra-ui/react';

const Header = () => {
    return (
        <Flex
            direction={{ base: 'column', md: 'row' }}
            py={4}
            px={8}
            alignItems="center"
            justifyContent="space-between"
            backgroundColor="green.500"
        >
            <Flex alignItems="center">
                <Link href={'/'} passHref>
                    <Heading as="h1" cursor="pointer" color="white">
                        Got em!
                    </Heading>
                </Link>
            </Flex>

            <Flex alignItems="center">
                <Box px={4} fontSize="xl" fontWeight="semibold">
                    <Link href={'/about'} passHref>
                        About
                    </Link>
                </Box>
                <Box px={4} fontSize="xl" fontWeight="semibold">
                    <Link href={'/services'} passHref>
                        Services
                    </Link>
                </Box>
                <Box px={4} fontSize="xl" fontWeight="semibold">
                    <Link href={'/contact'} passHref>
                        Contact
                    </Link>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Header;
