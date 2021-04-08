import { Fragment } from "react";
import Task from "./Task";
import styled from 'styled-components';

const List = styled.ul`
    max-width: 600px;
    margin: 0 auto;
`;

function TaskList() {
    const tasks = [
        {name: "hacer mockup", state: false},
        {name: "hacer mockup", state: false},
        {name: "hacer mockup", state: false},
        {name: "hacer mockup", state: false},
    ]
    
    return(
        <>
            <h2>Tarea: tienda virtual</h2>
            <List>
                { tasks.length < 0
                    ? <li><p>No hay tareas</p></li>
                    : tasks.map( t =>(
                        <Task task={ t }/>
                    ))
                }
            </List>
        </>
    )
}

export default TaskList;