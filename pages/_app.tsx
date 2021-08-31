import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

const theme = extendTheme({
    colors: {
        gray: {
            '50': '#F2F2F3',
            '100': '#DBDBDC',
            '200': '#C4C3C6',
            '300': '#ADACAF',
            '400': '#959499',
            '500': '#7E7D82',
            '600': '#656468',
            '700': '#4C4B4E',
            '800': '#323234',
            '900': '#19191A',
        },
        pink: {
            '50': '#F7F0ED',
            '100': '#E9D4CD',
            '200': '#DBB9AD',
            '300': '#CE9D8D',
            '400': '#C0826D',
            '500': '#B2664D',
            '600': '#8E523E',
            '700': '#6B3D2E',
            '800': '#47291F',
            '900': '#24140F',
        },
        green: {
            '50': '#F0F4F3',
            '100': '#D6E1DE',
            '200': '#BBCDC8',
            '300': '#A1BAB3',
            '400': '#86A69E',
            '500': '#6C9388',
            '600': '#56766D',
            '700': '#415852',
            '800': '#2B3B36',
            '900': '#161D1B',
        },
        blue: {
            '50': '#EEF3F7',
            '100': '#CFDDE8',
            '200': '#B0C8D9',
            '300': '#91B2C9',
            '400': '#739CBA',
            '500': '#5487AB',
            '600': '#436C89',
            '700': '#325167',
            '800': '#213645',
            '900': '#111B22',
        },
    },
});

export default MyApp;
