import Head from 'next/head';
import { Container } from '@chakra-ui/react';

export const DefaultLayout = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Demo Dapp</title>
        <meta name="description" content="Demo Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </Container>
  );
};
