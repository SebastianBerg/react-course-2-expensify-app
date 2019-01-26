const projectReducerDefaultState = {};

const projectReducer = (state = projectReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return { ...state, ...action.project };
    case "REMOVE_PROJECT":
      return {};
    case "SET_PROJECT":
      return {
        ...state,
        ...action.project
      };
    default:
      return state;
  }
};

export default projectReducer;
