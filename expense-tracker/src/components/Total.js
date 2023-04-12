
const Total = ({expenses}) => {
    return (
        <div className="total">
            <h2>Total Spendings</h2>
            <p className='total--amt'>
                $ {expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0.0)}
            </p>
        </div>
    )
}

export default Total;