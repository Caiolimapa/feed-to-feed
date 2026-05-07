import React, { useEffect, useState } from "react";
import { getOngs } from "../services/api";

function Categorias() {
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    getOngs().then(setOngs);
  }, []);

  return (
    <div>
      <h2>Lista de ONGs</h2>
      {ongs.map(ong => (
        <div key={ong.id}>
          <h3>{ong.nome}</h3>
          <p>{ong.categoria}</p>
        </div>
      ))}
    </div>
  );
}

export default Categorias;