const Button = (props) => {
    return (
        <button className={props.class}onClick={props.onClick}>
            {props.text}
            <i className={props.className}></i>
        </button>
    )
}

export default Button;