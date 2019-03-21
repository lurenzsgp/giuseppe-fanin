import Link from 'next/link';
import styled from 'styled-components';

const Text = styled.span`
    margin-right: 1rem;

    cursor: pointer;
`;

const Header = () => (<div>
    <Link href="/">
        <Text>Home</Text>
    </Link>
    <Link href="/about">
        <Text>About Page</Text>
    </Link>
</div>)

export default Header;