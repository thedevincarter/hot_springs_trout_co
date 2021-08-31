import React from 'react';
import { Center, Flex } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

interface Props {
    children: any;
}

const Layout = ({ children }: Props) => {
    return (
        <Flex direction="column" height="100vh">
            <Header />

            <Center flexGrow={1}>{children}</Center>

            <Footer />
        </Flex>
    );
};

export default Layout;
