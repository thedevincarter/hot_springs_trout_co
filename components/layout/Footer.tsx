import React from 'react';
import { Heading, Flex } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Flex py={4} px={8} alignItems="center" justifyContent="center" backgroundColor="green.500">
            <Heading as="h6" size="xs" color="white">
                Copyright Troutfitters 2021
            </Heading>
        </Flex>
    );
};

export default Footer;
