import { setCurrentProject } from "../../actions/project";

test("should setup logout action object", () => {
  const action = setCurrentProject("test");
  expect(action).toEqual({
    type: "SET_CURRENT_PROJECT",
    project: "test"
  });
});
