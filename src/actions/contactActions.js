export const updateContact = (contactDetails) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // aasync taskss
  
      // firebase => update doc
      let db = getFirestore();
      // console.log(getState());
      let uid = getState().firebase.auth.uid;
  
      db.collection("resumes").doc(uid).set(
        {
          contactDetails: contactDetails,
        },
        { merge: true }
      ).then(()=>{
          dispatch({ type: "UPDATE_CONTACT", contactDetails: contactDetails });
      })
      .catch(err =>{
          dispatch({ type: "FAILED_UPDATE_CONTACT", error : err.message });
      })
  
    };
  };
  