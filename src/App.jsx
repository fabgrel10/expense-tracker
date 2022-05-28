import { useState } from 'react';
import Header from './components/Header';
import NewExpenseIcon from './assets/images/new-expense.svg';

function App() {
  const [budget, setBudget] = useState();
  const [isAValidBudget, setIsAValidBudget] = useState(false);

  return (
    <div className="app">
      <Header
        budget={budget}
        setBudget={setBudget}
        isAValidBudget={isAValidBudget}
        setIsAValidBudget={setIsAValidBudget}
      />

      {isAValidBudget && (
        <div className="new-expense">
          <img src={NewExpenseIcon} alt="New Expense" />
        </div>
      )}
    </div>
  );
}

export default App;
