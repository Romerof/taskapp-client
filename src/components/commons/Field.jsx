import styled from 'styled-components';
import { useState } from 'react';

const FieldStyled = styled.div`
    display: flex;
    align-items:center;
    margin-bottom: 1em;

    label{
        width: 90px;
    }

    input{
        width: 260px;
        padding: .5em;
        background: transparent;
        border: 1px solid gray;
        border-radius: 3px;
    }
`;


function Field
({ type, placeHolder, label="", onChange}) 
{
    const [ value, setValue ] = useState("");

    const changeHandler = e =>{
        setValue(e.target.value);
        onChange(e.target.value);
    }

    return(
        <FieldStyled>
            { label && 
                <label htmlFor={ label }>
                    { label }
                </label>
            }
            <input 
                type={ type } 
                placeholder={ placeHolder }
                name={ label }
                onChange={ changeHandler }
                value={ value }
            />
        </FieldStyled>
    )
}

export default Field;