// import Link from 'next/Link';
import {transparentize} from 'polished';
import styled from '../utils/ThemedComponent';
import Layout from '../components/Layout';
import Welcome from '../components/Welcome';

const TextContainer = styled.div`
    color: ${props => props.theme.color.dark_liver};
    background-color: ${props => transparentize(.5, props.theme.color.white)};

    padding: 2rem;
    border-radius: 10px;

    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;

    box-sizing: border-box;
    width: 60vw;
`;

const Index = () => (<Layout>
    <Welcome />
    <TextContainer>
        <h2>La strada di Giuseppe Fanin </h2>
        <h3>24 anni per la santità</h3>
        <p>Tratto dalla mostra a cura di Azione Cattolica e Movimento Cristiano lavoratori</p>
        <p>Una notte di novembre. È la sera del 4 novembre 1948. Un giovane sta tornando a casa in bicicletta, dopo essersi incontrato con la fidanzata. All'improvviso, lungo la strada che da San Giovanni in Persiceto porta la frazione di lorenzatico, e gli viene aggredito è colpito a morte con una spranga di ferro. Aveva 24 anni. Si chiamava Giuseppe Fanin</p>

    </TextContainer>
</Layout>)

export default Index;