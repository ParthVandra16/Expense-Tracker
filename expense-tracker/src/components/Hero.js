import Input from './Input';
import Button from './Button';
import Alert from './Alert';
import uuid from "react-uuid";

const Hero = (props) => {
  const charge = props.charge
  const amount = props.amount
  const id = props.id

  const edit = props.edit
  const expenses = props.expenses

  const chargeErr = props.chargeErr
  const amountErr = props.amountErr

  //records each keyboard stroke for charge
  const handleChargeChange = (event) => {
    props.setCharge(event.target.value);
  }

  //records each keyboard stroke for amount
  const handleAmountChange = (event) => {
    props.setAmount(event.target.value);
  }
  

  const add = (event) => {
    event.preventDefault();
    if(charge !== ''){
      if(amount !== ''){
        if(amount <= 0){
          props.setAmountErr("Amount should be greater than zero.");
            setTimeout(() => {
              props.setAmountErr(null)
            }, 3000)
            props.setAmount("")
            return
        }
  
        if(edit){
          //to check if amount is number
          if(isNaN(amount)){
            props.setAlert("Amount should be a valid number.");
            setTimeout(() => {
              props.setAlert(null)
            }, 3000)
            props.setAmount("")
            return;
          }
  
          const newExpenses = expenses.map(expense => expense.id !== id ? expense : {...expense, charge, amount})
          props.setExpenses(newExpenses)
          props.setCharge('')
          props.setAmount('')
          props.setEdit(false)
          props.setMessage('Expense successfully edited.')
          setTimeout(() => {
            props.setMessage(null)
          }, 3000)
        }else{
          //to check if amount is number
          if(isNaN(amount)){
            props.setAlert("Amount should be a valid number.");
            setTimeout(() => {
              props.setAlert(null)
            }, 3000)
            props.setAmount("")
            return;
          }
  
          const expense = {
            id: uuid(),
            charge: charge,
            amount: amount
          }
          props.setExpenses(prevExpenses => {
            return (
              [...prevExpenses, expense]
            )
          })
          props.setCharge('');
          props.setAmount('');
          props.setMessage('Expense added.')
          setTimeout(() => {
            props.setMessage(null)
          }, 3000)
        }

      }else{
        props.setAmountErr("Amount is required..");
          setTimeout(() => {
            props.setAmountErr(null)
          }, 3000)
      }
    }else{
      props.setChargeErr('Title is required.')
        setTimeout(() => {
          props.setChargeErr(null)
        }, 3000)
      if(amount === ''){
        props.setAmountErr("Amount is required.");
          setTimeout(() => {
            props.setAmountErr(null)
          }, 3000)
      }
    }
  }

  return (
    <form className="hero--section" onSubmit={add}>
      <div className="inputs">
        <div className="input--hero">
          <Input
            placeHolder="EG: Rent"
            title="Title"
            onChange={handleChargeChange}
            value={charge}
          />
          <Alert error={chargeErr}/>
        </div>
        <div className="input--hero">
          <Input
            placeHolder="EG: 14000"
            title="Amount"
            onChange={handleAmountChange}
            value={amount}
          />
          <Alert error={amountErr}/>
        </div>
      </div>
      <Button 
        text={edit ? 'EDIT EXPENSE': "ADD EXPENSE"}
        className={edit ? 'fa-solid fa-pen plus': "fa-solid fa-plus plus"}
        class="btn btn--green"
      />
  </form>
  )
}

export default Hero;