import Button from "../commons/Button";
import styled from 'styled-components';

const Item = styled.li`

    ${Button} {
        font-size: 16px;
        text-align: left;
        margin: 0;
        background: transparent;
        color: currentColor;
        padding: .4em;
    }
`;

function Proyectos ({ name }) {
    return(
        <Item>
            <Button>
                { name }
            </Button>
        </Item>
    )
}

export default Proyectos;