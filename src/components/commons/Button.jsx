import styled, { css } from 'styled-components';

const Button = styled.button`
    width: ${ ({ $wmax }) => $wmax ? "100%" : "auto" };
    margin: ${ ({ $m }) => $m || "1em 0" };
    padding: .9em 1.5em;
    border-radius: 3px;
    border: none;
    ${ ({ variant }) => getVariant( variant )}
    cursor: pointer;
`;

const getVariant = variant =>{
    switch ( variant ) {
        case "lg":
            return css`
                color: ${ ({ theme }) => theme.dark };
                background: ${ ({ theme }) => theme.wt };
            `
        case "secondary":
            return css`
                color: ${ ({ theme }) => theme.dark };
                background: ${ ({ theme }) => theme.gray };
            `

        default:
            return css`
                color: ${ ({ theme }) => theme.wt };
                background: ${ ({ theme }) => theme.dark };
            `
    }
}


export default Button