import NewBudget from './NewBudget';

const Header = ({ budget, setBudget, isAValidBudget, setIsAValidBudget }) => (
  <header>
    <h1>Expense Tracker</h1>
    {isAValidBudget ? (
      <p>Control</p>
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
