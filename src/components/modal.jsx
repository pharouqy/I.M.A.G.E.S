import { useState } from "react";
import Button from "@/components/Button";

function Modal(props) {
  const [copied, setCopied] = useState(false);
  const handleAsideClick = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };
  const handleCopy = async () => {
    try {
      const arr = props.array
        .filter((element) => element !== "")
        .map((element) => element.split("-").join(" "));
      arr.unshift("Générer une image avec les mots suivants :");
      await navigator.clipboard.writeText(arr.join(" "));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error copying text: ", err);
    }
  };
  const updatedData = Object.fromEntries(
    Object.entries(props.actions).map(([key, value]) => [
      key,
      value && typeof value === "string" ? value.replace(/-/, " ") : value,
    ])
  );
  console.log("Updated Data:", updatedData);
  return (
    <aside className="modal-overlay" onClick={handleAsideClick}>
      <div className="modal">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <div className="modal-actions">
          {props.actions.map((action, index) => (
            <div key={index}>
              {action.intention && (
                <>
                  <span>Intention :</span> <h3>{action.intention}</h3>
                </>
              )}
              {action.descriptionI && (
                <>
                  <span>Intention :</span> <h3>{action.descriptionI}</h3>
                </>
              )}
              {action.motif && (
                <>
                  <span>Motif :</span> <h3>{action.motif}</h3>
                </>
              )}
              {action.descriptionM && (
                <>
                  <span>Motif :</span> <h3>{action.descriptionM}</h3>
                </>
              )}
              {action.ambiance && (
                <>
                  <span>Ambiance :</span> <h3>{action.ambiance}</h3>
                </>
              )}
              {action.descriptionA && (
                <>
                  <span>Ambiance :</span> <h3>{action.descriptionA}</h3>
                </>
              )}
              {action.grain && (
                <>
                  <span>Grain :</span> <h3>{action.grain}</h3>
                </>
              )}
              {action.descriptionG && (
                <>
                  <span>Grain :</span> <h3>{action.descriptionG}</h3>
                </>
              )}
              {action.esthetique && (
                <>
                  <span>Esthétique :</span> <h3>{action.esthetique}</h3>
                </>
              )}
              {action.descriptionE && (
                <>
                  <span>Esthétique :</span> <h3>{action.descriptionE}</h3>
                </>
              )}
              {action.style && (
                <>
                  <span>Style :</span> <h3>{action.style}</h3>
                </>
              )}
              {action.descriptionS && (
                <>
                  <span>Style :</span> <h3>{action.descriptionS}</h3>
                </>
              )}
            </div>
          ))}
        </div>
        <Button type="button" onClick={handleCopy}>
          {copied ? "Copié!" : "Copier le prompt"}
        </Button>
        <Button type="button" onClick={props.onClose}>
          Fermer
        </Button>
      </div>
    </aside>
  );
}

export default Modal;
