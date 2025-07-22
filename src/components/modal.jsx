import React, { useState } from "react";

function Modal(props) {
  const [formData, setFormData] = useState(props.array);
  console.log(props.array);
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(formData));
      setFormData(props.array);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error copying text: ", err);
    }
  };
  return (
    <div className="modal">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <div className="modal-actions">
        {props.actions.map((action, index) => (
          <div key={index}>
            <p>{action.intention}</p>
            <p>{action.descriptionI}</p>
            <button onClick={handleCopy}>
              {copied ? "Copied!" : "Copy Data"}
            </button>
          </div>
        ))}
      </div>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}

export default Modal;
