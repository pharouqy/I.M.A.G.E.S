import React, { useState } from "react";

function Modal(props) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(props.array));
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
            <p>{action.motif}</p>
            <p>{action.descriptionM}</p>
            <p>{action.ambiance}</p>
            <p>{action.descriptionA}</p>
            <p>{action.grain}</p>
            <p>{action.descriptionG}</p>
            <p>{action.esthetique}</p>
            <p>{action.descriptionE}</p>
            <p>{action.style}</p>
            <p>{action.descriptionS}</p>
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
