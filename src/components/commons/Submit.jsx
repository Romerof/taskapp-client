import styled from 'styled-components';

const Submit = styled.input.attrs({
    type:"submit"
})`
    width: 100%;
    margin: 1em 0;
    padding: .9em;
    background:${ ({ theme }) => theme.dark };
    color:${ ({ theme }) => theme.wt };
    border-radius: 3px;
    border: none;
    cursor: pointer;
`;


export default Submit;