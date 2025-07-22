import React, { useState } from "react";
import Banner from "../components/banner";
import Select from "../components/select";
import TextArea from "../components/textArea";
import data from "../assets/data.json";

function Home() {
  const [intention, setintention] = useState("");
  const [descriptionI, setDescriptionI] = useState("");
  console.log("descriptionI", descriptionI);
  console.log("intention", intention);
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
              setintention(e.target.value), setDescriptionI("")
            )}
            options={data.intention}
          />
          <TextArea
            id="description"
            label="Description"
            value={descriptionI}
            onChange={(e) => (
              setDescriptionI(e.target.value), setintention("")
            )}
            placeholder="Détermine le but de l’image : Illustrer une émotion, transmettre une idée, capturer une ambiance ..."
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
        <button type="reset" className="reset-button">
          Reset
        </button>
      </form>
    </div>
  );
}

export default Home;
