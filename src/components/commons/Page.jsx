import styled from 'styled-components';


const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    background: ${ props => props.theme.dark } ;
    
    a {
        color: currentColor;
        text-decoration: none;
    }
`;

export default Page;