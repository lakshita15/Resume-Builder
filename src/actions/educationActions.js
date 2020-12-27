export const updateEducation = (educationDetails)=>{

    return (dispatch , getState)=>{
        
        // async calls



        dispatch({  type:"UPDATE_EDUCATION" , educationDetails:educationDetails })
    }
    
    
    
}