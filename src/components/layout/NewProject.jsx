import styled from 'styled-components';
import { Fragment, useState, useContext } from 'react';
import Button from '../commons/Button';
import Submit from '../commons/Submit';
import Field from '../commons/Field';
import projectContext from '../../context/projectContext'

const FormSimple = styled.form`
    margin-top: 2em;
`;

function NewProject () {
    const { formProject } = useContext( projectContext )
    const [ isShowForm, setShowForm ] = formProject;

    const [ project,  setProject ] = useState({
        nombre: ''
    });

    const onSubmit = e =>{
        e.preventDefault();

        //validar

        //agregar state

        //reiniciar form
    }

    return(
        <Fragment>
            <Button 
                $wmax
                onClick={ setShowForm }
            >
                Nuevo proyecto
            </Button>
            { isShowForm &&
                <FormSimple onSubmit={ onSubmit }>
                    <Field
                        type= 'text'
                        placeHolder= 'nombre proyecto'
                        onChange = { v => setProject({ ...project, nombre: v })}
                    />
                    <Submit
                        value= 'Agregar proyecto'
                    />
                </FormSimple>
            }

        </Fragment>
    )
}


export default NewProject;