import * as types from '../types'
export default (state, action) =>{
    switch ( action.type ) {
        case types.FORM_PROJECT: 
            return {
                ...state,
                formProject: !state.formProject
            }
        case types.LIST_PROJECT:
            return {
                ...state,
                projects: action.payload
            }
        default:
            return state;
    }
}