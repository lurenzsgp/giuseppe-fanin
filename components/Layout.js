import styled, {createGlobalStyle, ThemeProvider, theme} from '../utils/ThemedComponent';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700');

    body
    {
        height: 100vh;
        // background-position: center;
        // background-repeat: no-repeat;
        // background-attachment: fixed;
        // background-size: cover;
        // background-image: url('static/bike.jpg');
        background-color: ${props => props.theme.color.tuscan};
        margin: 0;

        font-family: 'Roboto Slab', serif;
        font-smooth: antialiased;
    }
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Layout = (props) => (<ThemeProvider theme={theme}>
    <>
        <GlobalStyle />
        <Body>{props.children}</Body>
    </>
</ThemeProvider>)

export default Layout;