

function TextArea(props) {
    return (
        <div className="textarea-container">
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
