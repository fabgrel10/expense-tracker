const BudgetControl = ({ budget }) => {
  const amountToCurrency = amount => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  return (
    <div className="container-budget two-columns container shadow">
      <div>
        <p>Graphics</p>
      </div>
      <div className="content-budget">
        <p>
          <span>Budget:</span> {amountToCurrency(budget)}
        </p>
        <p>
          <span>Available:</span> {amountToCurrency(0)}
        </p>
        <p>
          <span>Spent:</span> {amountToCurrency(0)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
