import styled from 'styled-components';
import Submit from '../../commons/Submit';

const FormStyled = styled.div`
    background:${ ({ theme }) => theme.darker }; 
    
    form{
        padding: 2em 0;
        margin: 0 auto;
        max-width: 600px;

        input:not([ type="submit" ]) {
            width: 100%;
            padding: .6em;
            margin-bottom: 1em;
            border: none;
            border-radius: 4px;
            background: ${ ({ theme }) => theme.wt };
        }


    }
`;


function TaskForm() {
    return(
        <FormStyled>
            <form>
                <input 
                    type="text"
                    placeholder="Nueva tarea...."
                />
                <Submit value="Agregar"/>
            </form>
        </FormStyled>
    )
}

export default TaskForm;