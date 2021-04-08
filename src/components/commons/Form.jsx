import styled from 'styled-components';


const FormStyled = styled.div.attrs({className:"shadow"})`
    display: inline-block;
    padding: 0 1.5em 1.5em;
    background-color: #e1e1e1;
    border-radius:8px;
    

    h2 {
        text-align: center;
        margin: 1em 0;
    }

    form{
        font-size: 14px;
    }
    
`;


function Form ({title, children, onSubmit}) {
    return (
        <FormStyled>
            <h2>{title}</h2>
            <form onSubmit={ onSubmit }>
                {children}
            </form>
        </FormStyled>
    )
}

export default Form;