import './App.css';
import Hero from './components/Hero';
import Expenses from './components/Expenses';
import Total from './components/Total';
import { useEffect, useState } from 'react';

const initialExpenses = localStorage.getItem('expenses') 
  ? JSON.parse(localStorage.getItem('expenses'))
  : []

const App = () => {
  // all expenses, add/edit expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single charge (title)
  const [charge, setCharge] = useState('');
  // single amount
  const [amount, setAmount] = useState('');
  // edit
  const [edit, setEdit] = useState(false);
  // id of edit
  const [id, setId] = useState();
  // error
  const [alert, setAlert] = useState('');
  // success message
  const [message, setMessage] = useState('');
  // charge error
  const [chargeErr, setChargeErr] = useState('');
  //amount error
  const [amountErr, setAmountErr] = useState('');

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  return (
    <div className='wrapper'>
      <div className="container">
        <h1>Expense Tracker</h1>
        {alert ? <p className="alert">{alert}</p> : ''}
        {message ? <p className="message">{message}</p> : ''}
        <div className="content--container">
          <Hero
            expenses = {expenses}
            setExpenses = {setExpenses}
            charge = {charge}
            setCharge={setCharge}
            amount = {amount}
            setAmount={setAmount}
            edit={edit}
            setEdit={setEdit}
            id={id}
            setAlert={setAlert}
            setMessage={setMessage}
            chargeErr={chargeErr}
            setChargeErr={setChargeErr}
            amountErr={amountErr}
            setAmountErr={setAmountErr}
          />
          <Expenses
            expenses = {expenses}
            setExpenses={setExpenses}
            setCharge={setCharge}
            setAmount={setAmount}
            edit={edit}
            setEdit = {setEdit}
            setId={setId}
            setAlert={setAlert}
          />
        </div>
        <Total
          expenses={expenses}
        />
      </div>
    </div>
  )
}

export default App;
