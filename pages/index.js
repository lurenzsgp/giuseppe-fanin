// import Link from 'next/Link';
// import {transparentize} from 'polished';
// import styled, {media} from '../utils/ThemedComponent';
import Layout from '../components/Layout';
import Welcome from '../components/Welcome';
import Story from '../components/Story';

const Index = () => (<Layout>
    <Welcome />
    <Story />
</Layout>)

export default Index;