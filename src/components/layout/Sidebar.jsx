import styled from 'styled-components';
import NewProject from './NewProject';
import ProjectList from './ProjectList';

const SidebarStyled = styled.aside`
    background: ${ props => props.theme.wt };
    padding: 0 1.5em;

    h1 {
        margin: .6em;
    }

    &>div {
        margin-top: 2em;

    }
`;


function Sidebar () {
    return (
        <SidebarStyled>
            <h1>MERN<span>Tasks</span></h1>

            <NewProject/>
            <div>
                <h2>Proyectos</h2>
                <ProjectList/>
            </div>

        </SidebarStyled>
    )
}

export default Sidebar;