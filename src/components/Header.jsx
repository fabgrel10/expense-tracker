import BudgetControl from './BudgetControl';
import NewBudget from './NewBudget';

const Header = ({ budget, setBudget, isAValidBudget, setIsAValidBudget }) => (
  <header>
    <h1>Expense Tracker</h1>
    {isAValidBudget ? (
      <BudgetControl budget={budget} />
    ) : (
      <NewBudget
        budget={budget}
        setBudget={setBudget}
        setIsAValidBudget={setIsAValidBudget}
      />
    )}
  </header>
);

export default Header;
