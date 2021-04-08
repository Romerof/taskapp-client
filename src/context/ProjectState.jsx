import { useEffect, useReducer } from "react"
import projectContext from "./projectContext"
import projectReducer from "./projectReducer"
import * as types from "../types"

const projectstemp = [
    {id: 1, name: "tienda virtual"},
    {id: 2, name: "react app"},
    {id: 3, name: "single page aplication"},
    {id: 4, name: "landing page"},
]

const initialState = {
    formProject: false,
    projects: []
}

const { Provider } = projectContext;

function ProjectState ({ children }) {
    const [ state, dispatch ] = useReducer( projectReducer, initialState )
    const { formProject, projects } = state;

    useEffect(()=>{
        const timer = setTimeout(()=>{
            dispatch({
                type: types.LIST_PROJECT,
                payload: projectstemp
            })
        }, 2000)

        return ()=> clearTimeout(timer)
    }, [])


    const toggleFormProject = ()=>{
        dispatch({ type:  types.FORM_PROJECT })
    } 

    const value = {
        formProject: [ formProject, toggleFormProject ],
        projects: [projects]
    }

    return (
        <Provider value={ value }>
            { children }
        </Provider>
    )
}

export default ProjectState;