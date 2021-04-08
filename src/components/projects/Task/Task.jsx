import styled from 'styled-components';
import Button from '../../commons/Button';

const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 8px;
    background: ${ ({ theme }) => theme.wt };

    box-shadow: 0 2px 7px #00000055;


    p{
        display: inline-block;
        margin: 0 auto 0 0;
    }

    span, ${Button} {
        margin: 0 4px;
    }

    span {
        color: ${ ({ state }) => state? "green" : "red" };
    }
`;

function Task({ task: { name, state} }){
    return(
        <Item state={ state }>
            <p>{name}</p>
            <span>{state? "listo": "pendiente"}</span>
            <Button> Editar</Button>
            <Button variant='secondary'>Eliminar</Button>
        </Item>
    )
}

export default Task;