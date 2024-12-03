
import { useState } from 'react'
import './App.css'
import AddTransaction from './Component/AddTransaction'
import Balance from './Component/Balance'
import Header from './Component/Header'
import IncomeExpenses from './Component/IncomeExpenses'
import TransactionList from './Component/TransactionList'

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction)=> {
    setTransactions([...transactions, transaction])
  }
  
  const calculateBalance = ()=> {
    return transactions.reduce((acc, transaction) => acc + transaction.amount, 0  )
  }

  const calculateIncome = ()=> {
      return transactions
      .filter((transaction)=> transaction.amount > 0 )
      .reduce((acc, transaction)=> acc + transaction.amount, 0 )
  }

  const calculateExpenses = () => {
    return transactions
    .filter((transaction)=> transaction.amount  < 0 )
    .reduce((acc, transaction)=> acc + transaction.amount, 0 )
  }

  return (
    <>
     <Header />
     <Balance balance={calculateBalance()} />
     <br /><br />
     <IncomeExpenses income={calculateIncome()}  expense={calculateExpenses()} />
     <br /> <br /> 
     <TransactionList transactions={transactions} />
     <br /><br />
     <AddTransaction addTransaction={addTransaction} />
    </>
  )
}

export default App