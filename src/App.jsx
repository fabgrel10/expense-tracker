import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [budget, setBudget] = useState(0);
  return (
    <div className="app">
      <Header budget={budget} setBudget={setBudget}/>
    </div>
  );
}

export default App;
