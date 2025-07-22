import React, { useState } from "react";
import Banner from "../components/banner";
import Select from "../components/select";
import TextArea from "../components/textArea";
import Modal from "../components/modal";
import data from "../assets/data.json";

function Home() {
  const [intention, setIntention] = useState("");
  const [descriptionI, setDescriptionI] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    array: [],
    actions: {},
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      title: "Form Submission",
      content: "Form data submitted successfully",
      array: [intention, descriptionI],
      actions: {
        intention: intention,
        descriptionI: descriptionI,
      },
    });
    setShowModal(true);
    resetForm();
  };
  async function resetForm() {
    setIntention("");
    setDescriptionI("");
  }
  return (
    <div>
      <Banner
        title="Assistant d'instruction générative (prompt)"
        subtitle="I.M.A.G.E.S"
      />
      <form className="content">
        <div className="form-group">
          <Select
            id="intention"
            label="intention"
            value={intention}
            onChange={(e) => (
              setIntention(e.target.value), setDescriptionI("")
            )}
            options={data.intention}
          />
          <TextArea
            id="description"
            label="Description"
            value={descriptionI}
            onChange={(e) => (
              setDescriptionI(e.target.value), setIntention("")
            )}
            placeholder="Détermine le but de l’image : Illustrer une émotion, transmettre une idée, capturer une ambiance ..."
          />
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" className="reset-button" onClick={resetForm}>
          Reset
        </button>
      </form>
      {showModal && (
        <Modal
          title={formData.title}
          content={formData.content}
          array={formData.array}
          actions={[formData.actions]}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default Home;
