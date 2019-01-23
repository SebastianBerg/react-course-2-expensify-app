import database from "../firebase/firebase";
// import expenses from "../tests/fixtures/expenses";

// components calls action generator
// action generator returns function
// component dipatches function (?)
// function runs (has the ability to dispatch other action and do whatever it wants)

// ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const projectId = getState().project.id;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref(`users/${uid}/projects/${projectId}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const projectId = getState().project.id;
    return database
      .ref(`users/${uid}/projects/${projectId}/expenses`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const projectId = getState().project.id;
    return database
      .ref(`users/${uid}/projects/${projectId}/expenses`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

export const startSetExpenses = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const projectId = getState().project.id;
    return database
      .ref(`users/${uid}/projects/${projectId}/expenses`)
      .once("value")
      .then(snapshot => {
        const expenses = [];

        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setExpenses(expenses));
      });
  };
};
