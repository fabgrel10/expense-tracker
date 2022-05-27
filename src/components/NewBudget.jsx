import React from 'react';

const NewBudget = ({ budget, setBudget }) => (
  <div className="container-budget container shadow">
    <form className="form">
      <div className="field">
        <label htmlFor="budget">Set Budget:</label>
        <input
          className="new-budget"
          type="text"
          name="budget"
          id="budget"
          value={budget}
          onChange={e => setBudget(e.target.value)}
          placeholder="Amount"
        />
      </div>
      <input type="submit" value="Set Budget" />
    </form>
  </div>
);

export default NewBudget;
