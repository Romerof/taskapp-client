import styled from 'styled-components';

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 2em;
    background: ${ ({ theme }) => theme.dark };
    color: ${ ({ theme }) => theme.wt };
`;


function Header() {
    return(
        <HeaderStyled>
            <h2><span>Hola</span> javier</h2>
            <nav>
                <a href="#!" >Cerrar Sesión</a>
            </nav>
        </HeaderStyled>
    )   
}

export default Header;