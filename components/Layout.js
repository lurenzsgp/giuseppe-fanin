// import Header from './Header';
import styled, {createGlobalStyle, ThemeProvider, theme} from '../utils/ThemedComponent';

const GlobalStyle = createGlobalStyle`
    body 
    {
        height: 100vh;
        padding: 1.5rem;
        background-color: ${props => props.theme.color.blue.standard};

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-smooth: antialiased;
    }
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
`;

const Layout = (props) => (<ThemeProvider theme={theme}>
    <>
        <GlobalStyle />
        {/* <Header /> */}
        <Body>{props.children}</Body>
    </>
</ThemeProvider>)

export default Layout;