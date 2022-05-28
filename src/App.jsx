import { useState } from 'react';

import NewExpenseIcon from './assets/images/new-expense.svg';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [budget, setBudget] = useState('');
  const [isAValidBudget, setIsAValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

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
          <img
            src={NewExpenseIcon}
            alt="New Expense"
            onClick={handleNewExpense}
          />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
        />
      )}
    </div>
  );
}

export default App;
