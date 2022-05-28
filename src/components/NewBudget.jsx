import { useState } from 'react';
import Message from './Message';

const NewBudget = ({
  budget,
  setBudget,
  isAValidBudget,
  setIsAValidBudget
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!budget || budget < 0) {
      setMessage('Please enter a valid budget');
      return;
    }
    setMessage('');
    setIsAValidBudget(true);
  };

  return (
    <div className="container-budget container shadow">
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="budget">Set Budget:</label>
          <input
            className="new-budget"
            type="number"
            min=""
            name="budget"
            id="budget"
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
            placeholder="Amount"
          />
        </div>
        <input type="submit" value="Set Budget" />
        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

export default NewBudget;
