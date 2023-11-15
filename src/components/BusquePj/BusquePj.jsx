import { useState, useEffect } from "react";
import "../BusquePj/BusquePj.css";
import { BusquePjCard } from "../BusquePj/BusquePjCard";
import { planofree } from "../../Data";
import { getAllPlanoFree } from "../../services/planofreeServices";

function BusquePj() {
  const [planofree, setPlanoFree] = useState([]);

  async function findAllPlanoFree() {
    const response = await getAllPlanoFree();
    setPlanoFree(response.data.results);
  }

  useEffect(() => {
    findAllPlanoFree();
  }, []);

  console.log(planofree);

  return (
    <div className="busquepj">
      <div className="busquepj-frame">
        {planofree.map((item) => (
          <BusquePjCard
            key={item.id}
            categoria={item.categoria}
            likes={item.likes.length}
            funcionamento={item.funcionamento}
            name={item.name}
            avatar={item.avatar}
            redessociais={item.redessociais}
            contatos={item.contatos}
            endereco={item.endereco}
          />
        ))}
      </div>
    </div>
  );
}

export default BusquePj;
