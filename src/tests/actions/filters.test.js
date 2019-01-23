import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter,
  setCurrentProject
} from "../../actions/filters";
import moment from "moment";

test("should generate set state date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("should return sort by amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should return sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("should return set text filter action object with input string", () => {
  const action = setTextFilter("abc123");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "abc123"
  });
});

test("should return set text filter action object with no input to default parameter", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
