import Project from './Project'
import styled from 'styled-components';
import projectContext from '../../context/projectContext'
import { useContext } from 'react'

const ListStyled = styled.ul`
    margin-top: 1.5em;
`;

function ProjectList() {
    const { projects } = useContext( projectContext )
    const [ list ] = projects;

    if( list.length ===0 ) return null;
    return(
        <ListStyled>
            { list.map( p => <Project name={ p.name }/>)}
        </ListStyled>
    )
}


export default ProjectList;