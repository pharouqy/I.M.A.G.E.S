import { useState } from "react";
import Banner from "@/components/Banner.jsx";
import Select from "@/components/Select.jsx";
import TextArea from "@/components/TextArea.jsx";
import Modal from "@/components/Modal.jsx";
import Button from "@/components/Button.jsx";
import data from "@/assets/data.json";
import "@/styles/_main.scss";

function Home() {
  const [intention, setIntention] = useState("");
  const [descriptionI, setDescriptionI] = useState("");
  const [motif, setMotif] = useState("");
  const [descriptionM, setDescriptionM] = useState("");
  const [ambiance, setAmbiance] = useState("");
  const [descriptionA, setDescriptionA] = useState("");
  const [grain, setGrain] = useState("");
  const [descriptionG, setDescriptionG] = useState("");
  const [esthetique, setEsthetique] = useState("");
  const [descriptionE, setDescriptionE] = useState("");
  const [style, setStyle] = useState("");
  const [descriptionS, setDescriptionS] = useState("");
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
      title: "Méthode I.M.A.G.E.S",
      content: "Voici les détails de votre prompt I.M.A.G.E.S :",
      array: [
        intention,
        descriptionI,
        motif,
        descriptionM,
        ambiance,
        descriptionA,
        grain,
        descriptionG,
        esthetique,
        descriptionE,
        style,
        descriptionS,
      ],
      actions: {
        intention: intention,
        descriptionI: descriptionI,
        motif: motif,
        descriptionM: descriptionM,
        ambiance: ambiance,
        descriptionA: descriptionA,
        grain: grain,
        descriptionG: descriptionG,
        esthetique: esthetique,
        descriptionE: descriptionE,
        style: style,
        descriptionS: descriptionS,
      },
    });
    intention ||
    descriptionI ||
    motif ||
    descriptionM ||
    ambiance ||
    descriptionA ||
    grain ||
    descriptionG ||
    esthetique ||
    descriptionE ||
    style ||
    descriptionS
      ? setShowModal(true)
      : (setShowModal(false),
        alert(
          "S'il vous plait remplissez tous les champs avant de soumettre."
        ));
    resetForm();
  };
  async function resetForm() {
    setIntention("");
    setDescriptionI("");
    setMotif("");
    setDescriptionM("");
    setAmbiance("");
    setDescriptionA("");
    setGrain("");
    setDescriptionG("");
    setEsthetique("");
    setDescriptionE("");
    setStyle("");
    setDescriptionS("");
  }

  return (
    <div>
      <Banner
        title="Assistant d'instruction générative (prompt)"
        subtitle="I.M.A.G.E.S"
      />
      <main>
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
              id="descriptionI"
              value={descriptionI}
              onChange={(e) => (
                setDescriptionI(e.target.value), setIntention("")
              )}
              placeholder="Détermine le but de l’image : Illustrer une émotion, transmettre une idée, capturer une ambiance ..."
            />
          </div>
          <div className="form-group">
            <Select
              id="motif"
              label="Motif"
              value={motif}
              onChange={(e) => (setMotif(e.target.value), setDescriptionM(""))}
              options={data.motif}
            />
            <TextArea
              id="descriptionM"
              value={descriptionM}
              onChange={(e) => (setDescriptionM(e.target.value), setMotif(""))}
              placeholder="Personnage, objet, scène, action. Plus c’est précis, mieux l’IA pourra cibler le résultat ..."
            />
          </div>
          <div className="form-group">
            <Select
              id="ambiance"
              label="Ambiance"
              value={ambiance}
              onChange={(e) => (
                setAmbiance(e.target.value), setDescriptionA("")
              )}
              options={data.ambiance}
            />
            <TextArea
              id="descriptionA"
              value={descriptionA}
              onChange={(e) => (
                setDescriptionA(e.target.value), setAmbiance("")
              )}
              placeholder="L’atmosphère générale, les émotions que l’image doit évoquer ..."
            />
          </div>
          <div className="form-group">
            <Select
              id="grain"
              label="Grain"
              value={grain}
              onChange={(e) => (setGrain(e.target.value), setDescriptionG(""))}
              options={data.grain}
            />
            <TextArea
              id="descriptionG"
              value={descriptionG}
              onChange={(e) => (setDescriptionG(e.target.value), setGrain(""))}
              placeholder="Le niveau de détail et de réalisme : minimaliste, hyperréaliste, peinture à l’huile, photo granuleuse, etc ..."
            />
          </div>
          <div className="form-group">
            <Select
              id="esthetique"
              label="Esthétique"
              value={esthetique}
              onChange={(e) => (
                setEsthetique(e.target.value), setDescriptionE("")
              )}
              options={data.esthetique}
            />
            <TextArea
              id="descriptionE"
              value={descriptionE}
              onChange={(e) => (
                setDescriptionE(e.target.value), setEsthetique("")
              )}
              placeholder="La composition visuelle : disposition, angle, cadrage, lumière, profondeur ..."
            />
          </div>
          <div className="form-group">
            <Select
              id="style"
              label="Style"
              value={style}
              onChange={(e) => (setStyle(e.target.value), setDescriptionS(""))}
              options={data.style}
            />
            <TextArea
              id="descriptionS"
              value={descriptionS}
              onChange={(e) => (setDescriptionS(e.target.value), setStyle(""))}
              placeholder="Le genre artistique ou l’inspiration visuelle : manga, surréaliste, futuriste, impressionniste, etc ..."
            />
          </div>
          <div>
            <Button type="submit" onClick={handleSubmit}>
              Valider
            </Button>
            <Button type="button" onClick={resetForm}>
              Réinitialiser
            </Button>
          </div>
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
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} I.M.A.G.E.S. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
