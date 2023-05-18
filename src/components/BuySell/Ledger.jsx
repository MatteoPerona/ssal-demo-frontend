import React, { useState, useContext } from 'react';

const Ledger = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionCount, setTransactionCount] = useState(1);
  
  const possibleNames = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry', 'Isabella', 'Jack',
    'Kate', 'Liam', 'Mia', 'Noah', 'Olivia', 'Peter', 'Quinn', 'Rachel', 'Sam', 'Thomas', 'Matteo', 'Taerim',
    'Alejandro', 'Winter'
    // ... add more names here ...
  ];
  
  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * possibleNames.length);
    return possibleNames[randomIndex];
  };
  
  const addTransaction = () => {
    const buyer = getRandomName();
    const seller = getRandomName();
    const transaction = `${buyer} purchased from ${seller}`;
    
    setTransactions((prevTransactions) => {
      const updatedTransactions = [transaction, ...prevTransactions.slice(0, 9)];
      return updatedTransactions;
    });
    setTransactionCount((prevCount) => prevCount + 1);
  };
  
  return (
    <div>
      <button className='checkout-button' onClick={addTransaction}>Checkout</button>
      <div className="ledger-container">
        <h1>Ledger</h1>
        <div className="ledger-table">
          <table>
            <thead>
              <tr>
                <th className="centered-header">Transaction History</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ledger;