

function TextArea(props) {
    return (
        <div className="textarea-container">
            <label htmlFor={props.id}>{props.label}</label>
            <textarea
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default TextArea;
