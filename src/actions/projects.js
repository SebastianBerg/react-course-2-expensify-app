import database from "../firebase/firebase";

// SET PROJECT
export const setCurrentProject = project => ({
  type: "SET_PROJECT",
  project
});

// ADD_PROJECT
export const addProject = project => ({
  type: "ADD_PROJECT",
  project
});

// START ADD PROJECT
export const startAddProject = (projectData = {}) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { name = "", initialFunds = "", endDate = 0, info = 0 } = projectData;
    const project = { name, initialFunds, endDate, info };

    return database
      .ref(`users/${uid}/projects`)
      .push(project)
      .then(ref => {
        dispatch(
          addProject({
            id: ref.key,
            ...project
          })
        );
      });
  };
};

export const removeProject = ({ id } = {}) => ({
  type: "REMOVE_PROJECT",
  id
});

export const startRemoveProject = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const projectId = getState().project.id;
    return database
      .ref(`users/${uid}/projects/${projectId}`)
      .remove()
      .then(() => {
        dispatch(removeProject({ id }));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
