import styled, {createGlobalStyle, ThemeProvider, theme} from '../utils/ThemedComponent';

const GlobalStyle = createGlobalStyle`
    body
    {
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-image: url('static/bike.jpg');
        background-color: ${props => props.theme.color.blue.standard};

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
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