import Form from '../commons/Form';
import Field from '../commons/Field';
import Submit from '../commons/Submit';
import Page from '../commons/Page';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp () {
    const [ user, setuser ] = useState({
        user: '',
        name:'',
        password: '',
        password2: '',
    })

    const submitHandler = e =>{ 
        e.preventDefault();
        console.log(e) 
    };

    const { email, name, password, password2 } = user;
    return(
        <Page>
            <Form title="Crear Cuenta" onSubmit={ submitHandler }>
                <Field 
                    type= "text"
                    label= "Nombre"
                    placeHolder= "Tu nombre"
                    onChange={ v => setuser({ ...user, name: v })}
                    value={ name }
                />
                <Field 
                    type= "email"
                    label= "Correo"
                    placeHolder= "Tu correo"
                    onChange={ v => setuser({ ...user, email: v })}
                    value={ email }
                />
                <Field
                    type= "password"
                    label= "Contraseña"
                    placeHolder= "Contraseña"
                    onChange={  v => setuser({ ...user, password: v })}
                    value={ password }
                />
                <Field
                    type= "password"
                    label= "Confirmar contraseña"
                    placeHolder= "vuelva a introducir la contraseña"
                    onChange={  v => setuser({ ...user, password2: v })}
                    value={ password2 }
                />
                <Submit value="Registrar"/>
                <Link to="/">Iniciar Sesión</Link>
            </Form>
        </Page>

    )
}

export default SignUp;