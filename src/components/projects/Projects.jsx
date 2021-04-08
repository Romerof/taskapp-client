import styled from 'styled-components';
import Button from '../commons/Button';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import TaskForm from './Task/TaskForm';
import Tasklist from './Task/TaskList';

const ProjectsStyled = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 100%;

    h2 {
        margin: 2em; 
    }

`;



function Projects () {
    return(
        <ProjectsStyled>
            <Sidebar/>
            <div>
                <Header/>
                <main>
                    <TaskForm />
                    <Tasklist />
                    <Button $m="2em" variant="lg">
                        &times; Eliminar proyecto
                    </Button>
                </main>
            </div>
        </ProjectsStyled>
    )
}

export default Projects;