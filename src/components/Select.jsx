function Select(props) {
  return (
    <div className="select-container">
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id} value={props.value} onChange={props.onChange}>
        {props.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
