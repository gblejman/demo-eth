import type { NextPage } from 'next';
import { Text } from '@chakra-ui/react';
import { DefaultLayout } from '@/components/layout/DefaultLayout';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Text>Hi</Text>
    </DefaultLayout>
  );
};

export default Home;
