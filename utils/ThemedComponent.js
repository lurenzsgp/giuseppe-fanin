import * as styledComponents from 'styled-components';
import {withTheme} from 'styled-components';

export const theme = {
    color: {
        black: 'black',
        white: 'white',
        dark_liver: '#5b4b49',
        tuscan: '#e4d6a7',
        sandy_brown: '#fc9f5b',
        rajah: '#ffc15e',
        coyote_brown: '#8b5d33',
        black_bean: '#371A00'
    },
}

export const sizes = {
    hd: 1440,
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