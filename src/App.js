import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [OpenModal, setOpenModal] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setOpenModal(true)} className="modalBtn">
          OpenModal
        </button>
        <Modal open={OpenModal} onClose={() => setOpenModal(false)} />
      </div>
    </>
  );
}

export default App;
