// import Link from 'next/Link';
import * as React from 'react';
import styled, {media} from '../utils/ThemedComponent';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100%

    color: ${props => props.theme.color.white};
    background-color: transparent;

    font-size: 1rem;
    line-height: 1.5rem;

    a
    {
        color: ${props => props.theme.color.white};
        text-decoration: none;
    }

    ${media.tablet`
        flex-direction: row;

        span:nth-child(2)
        {
            margin-left: 2rem;
        }
    `}
`;

const Footer = () =>
{
    return (<Container>
        <span>Circolo MCL di Lorenzatico “G. Fanin”</span>
        <span>email: <a href='mailto:mcl.giuseppefanin@gmail.com'>mcl.giuseppefanin@gmail.com</a></span>
    </Container>);
}

export default Footer;