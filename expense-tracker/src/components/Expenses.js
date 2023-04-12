import Card from "./Card"
import Button from "./Button"

const Expenses = (props) => {
    const expenses = props.expenses
    const edit = props.edit
    
    
    const handleEditClick = (charge, amount, id) => {
        props.setCharge(charge);
        props.setAmount(amount);
        props.setEdit(true);
        props.setId(id);
    }

  
    const handleDeleteClick = (id) => {
        const expense = expenses.find(expense => expense.id === id)
        const confirm = window.confirm(`Confirm delete expense ${expense.charge}`);

        if(id && confirm){
            props.setExpenses(props.expenses.filter(expense => expense.id !== id))
            props.setAlert('Expense Deleted.');
            setTimeout(() => {
                props.setAlert(null)
            }, 3000)
            if(edit){
                props.setCharge('')
                props.setAmount('')
                props.setEdit(false)
            }
        }
    }

   
    const clearAll = () => {
        const confirm = window.confirm("Are you sure you want to clear all expenses?");
        if(confirm){
            props.setExpenses([]);
            props.setAlert('All Expenses Cleared.');
            setTimeout(() => {
                props.setAlert(null)
            }, 3000)
            if(edit){
                props.setCharge('')
                props.setAmount('')
                props.setEdit(false)
            }
        }
    }

    return (
        <div className="expenses">
            <h2>Expenses</h2>
            {expenses.map(expense => {
                return (
                    <Card 
                        key={expense.id}
                        id={expense.id}
                        title={expense.charge}
                        amount={expense.amount}
                        onEditClick={handleEditClick}
                        onDeleteClick={handleDeleteClick}
                    />
                )
            })}
            {expenses.length > 0 
                ? <Button 
                    text="CLEAR EXPENSES"
                    className="fa-sharp fa-solid fa-trash icon--white"
                    class="btn btn--red"
                    onClick={clearAll}
                  />
                : ''
            }
        </div>
    )
}

export default Expenses;