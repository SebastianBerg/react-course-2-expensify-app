import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../../components/partials/ExpensesSummary";

test("should correctly render ExpensesSummary with 1 expense", () => {
  const totalExpense = 200.23;
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={totalExpense} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with multiple expenses", () => {
  const totalExpense = 20064646164;
  const wrapper = shallow(
    <ExpensesSummary expensesCount={23} expensesTotal={totalExpense} />
  );
  expect(wrapper).toMatchSnapshot();
});
