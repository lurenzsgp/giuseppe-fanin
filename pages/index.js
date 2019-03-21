// import Link from 'next/Link';
import styled, {keyframes} from 'styled-components';
import Layout from '../components/Layout';

const app_logo_spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.img`
    animation: ${app_logo_spin} infinite 20s linear;
    height: 60vmin;
    pointer-events: none;
`;

const Text = styled.p`
    color: #2b4570;
    font-size: 2.5rem;
    font-weight: 600;
`;

const Index = () => (<Layout>
    <Spinner src='/static/logo.svg' alt='logo' />
    <Text>Sito in costruzione.</Text>
</Layout>)

export default Index;