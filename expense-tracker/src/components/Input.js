
const Input = (props) => {
    return (
        <div className="input">
            <label htmlFor={props.title} className='label'>{props.title}</label>
            <input 
                type="text" 
                placeholder={props.placeHolder} 
                className='input-field' 
                onChange={(event) => props.onChange(event)}
                value={props.value}
            />
        </div>
    )
}

export default Input;