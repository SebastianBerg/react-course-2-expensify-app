import projectReducer from "../../reducers/project";

test("should set current Project in state", () => {
  const project = { currentProject: "test" };
  const action = {
    type: "SET_CURRENT_PROJECT",
    project
  };
  const state = projectReducer(project, action);
  expect(state.currentProject).toEqual(action.currentProject);
  console.log(action.currentProject);
});
