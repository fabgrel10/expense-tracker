import React from 'react';

const NewBudget = () => (
  <div className="container-budget container shadow">
    <form className="form">
      <div className="field">
        <label htmlFor="budget">Set Budget:</label>
        <input
          className="new-budget"
          type="text"
          name="budget"
          id="budget"
          placeholder="Amount"
        />
      </div>
      <input type="submit" value="Set Budget" />
    </form>
  </div>
);

export default NewBudget;
