
const Card = (props) => {
    return (
        <div className="card">
            <div className="card--content">
                <h3 className="card--title">{props.title}</h3>
                <p className="card--amount">$ {props.amount}</p>
            </div>
            <div className="icons">
                <div className="icon edit" onClick={() => props.onEditClick(props.title, props.amount, props.id)}>
                    <i className="fa-sharp fa-solid fa-pen"></i>
                </div>
                <div className="icon delete" onClick={() => props.onDeleteClick(props.id)}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    )
}

export default Card;