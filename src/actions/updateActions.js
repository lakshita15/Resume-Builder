export const updateState = (state) =>{
    return ( dispatch , getState ) =>{
        dispatch({type:"UPDATE_CONTACT" , contactDetails : state.contactDetails})
        dispatch({type:"UPDATE_EDUCATION" , educationDetails: state.educationDetails})
        dispatch({type:"CHANGE_SKIN" , skinCode : state.document.skinCode});
    }
}  