export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project, // spread operator in lieu of individual properties
            authorFirstName: 'Luigi',
            authorLastName: 'Campbell',
            authorId: '0000',
            createdAt: new Date()
        }).then(()=> {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            // console.log(err);
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });
    };
};
