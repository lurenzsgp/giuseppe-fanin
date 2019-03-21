import * as styledComponents from 'styled-components';
import {withTheme} from 'styled-components';

export const theme = {
    color: {
        blue: {
            standard: '#51a3a3',
            light: '#a8d0db',
            dark: '#2b4570'
        }, 
        brown: '#a37a74',
        orange: 'e49273',
    },
}

export const sizes = {
    hd: 1220,
    desktop: 992,
    tablet: 768,
    phone: 576
};

export const media = Object.keys(sizes).reduce((acc, label) =>
{
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `;

    return acc;
}, {});

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider
} = styledComponents;

export {css, createGlobalStyle, keyframes, ThemeProvider, withTheme};
export default styled;