// import Link from 'next/Link';
import {transparentize} from 'polished';
import styled, {media} from '../utils/ThemedComponent';
import Layout from '../components/Layout';

const TitleGrid = styled.div`
    display: grid;
    grid-template-rows: 20rem auto;
    grid-gap: 2.5rem;
    justify-items: center;

    box-sizing: border-box;
    padding: 1rem;
    min-height: 100vh;

    ${media.tablet`
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    `}

    ${media.hd`
        height: 100vh;
        width: 70vw;
    `}
`;

const Image = styled.img`
    height: 20rem;

    ${media.tablet`
        height: 34rem;
    `}

    ${media.hd`
        height: 45rem;
    `}
`;

const Title = styled.span`
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: bold;
    color: ${props => props.theme.color.black_bean};

    width: 100%;

    ${media.hd`
        font-size: 1.5rem;
        line-height: 2.25rem;
    `}

`;

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
    <TitleGrid>
        <Image src='static/ritratto_copertina.png' />
        <Title>24 anni,
            <br />una bicicletta sotto ai piedi
            <br />e un rosario tra le mani.
            <br />Una laurea in agraria,
            <br />una fidanzata,
            <br />un ideale di vita cristiano.
            <br />Una famiglia numerosa,
            <br />un progetto per i lavoratori agricoli,
            <br />la speranza di una giustizia sociale.
            <br />La morte per omicidio
            <br />sopraggiunta all’1.50 a fermare tutto.
            <br />O a trasformare tutto...
            <br />
            <br />Servo di Dio,
            <br />luce e ispirazione per i giovani
            <br />ad avere il coraggio di mettere tutto se stessi
            <br />per cambiare il mondo.
        </Title>
    </TitleGrid>
    <TextContainer>
        <h2>La strada di Giuseppe Fanin </h2>
        <h3>24 anni per la santità</h3>
        <p>Tratto dalla mostra a cura di Azione Cattolica e Movimento Cristiano lavoratori</p>
        <p>Una notte di novembre. È la sera del 4 novembre 1948. Un giovane sta tornando a casa in bicicletta, dopo essersi incontrato con la fidanzata. All'improvviso, lungo la strada che da San Giovanni in Persiceto porta la frazione di lorenzatico, e gli viene aggredito è colpito a morte con una spranga di ferro. Aveva 24 anni. Si chiamava Giuseppe Fanin</p>

    </TextContainer>
</Layout>)

export default Index;