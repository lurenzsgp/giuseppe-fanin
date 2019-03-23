// import Link from 'next/Link';
import {transparentize} from 'polished';
import styled from '../utils/ThemedComponent';
import Layout from '../components/Layout';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;

    width: 70vw;
    height: 100vh;

    align-items: center;
`;

const Image = styled.img`
    border-radius: 50%;
`;

const TextContainer = styled.div`
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.color.black};
    background-color: ${props => transparentize(.5, props.theme.color.white)};

    padding: 2rem;

    border-radius: 10px;
`;

const Index = () => (<Layout>
    <Grid>
        <Image src='https://upload.wikimedia.org/wikipedia/it/7/7a/Giuseppe_Fanin.jpg' />
        <TextContainer>24 anni, una bicicletta sotto ai piedi e un rosario tra le mani.
            <br />Una laurea in agraria, una fidanzata, un ideale di vita cristiano.
            <br />Una famiglia numerosa, un progetto per i lavoratori agricoli, la speranza di una giustizia sociale.
            <br />La morte per omicidio sopraggiunta all’1.50 a fermare tutto. O a trasformare tutto...
            <br />Servo di Dio, luce e ispirazione per i giovani ad avere il coraggio di mettere tutto se stessi per cambiare il mondo.
        </TextContainer>
    </Grid>
</Layout>)

export default Index;