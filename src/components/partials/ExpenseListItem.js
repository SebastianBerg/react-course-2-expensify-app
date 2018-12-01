import React from "react";
import { Link } from "react-router-dom";

export function ExpenseListItem({ id, description, amount, createdAt }) {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {" "}
        Amount: {amount} Created At: {createdAt}
      </p>
    </div>
  );
}

export default ExpenseListItem;
