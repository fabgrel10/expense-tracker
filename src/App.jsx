import { useState } from 'react';
import Header from './components/Header';

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
    </div>
  );
}

export default App;
