import Form from '../commons/Form';
import Field from '../commons/Field';
import Submit from '../commons/Submit';
import Page from '../commons/Page';
import { useState } from 'react';
import { Link } from 'react-router-dom'


function SignIn () {

    const [ user, setuser ] = useState({user: '', password: ''})

    const submitHandler = e =>{ 
        e.preventDefault();
        console.log(e) 
    };
    
    return(
        <Page>
            <Form title="Iniciar Sesion" onSubmit={ submitHandler }>
                <Field 
                    type= "email"
                    label= "Correo"
                    placeHolder= "Tu correo"
                    onChange={ v => setuser({ ...user, email: v })}
                />
                <Field
                    type= "password"
                    label= "Contraseña"
                    placeHolder= "Contraseña"
                    onChange={  v => setuser({ ...user, password: v })}
                />
                <Submit value="Iniciar Sesión"/>
                <Link to="/registro">Crear nueva cuenta</Link>
            </Form>
        </Page>

    )
}

export default SignIn;
