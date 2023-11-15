import { useState, useEffect } from "react";
import "../BusquePj/BusquePj.css";
import { BusquePjCard } from "../BusquePj/BusquePjCard";
import { getAllPlanoFree } from "../../services/planofreeServices";

function BusquePj() {
  const [planofree, setPlanoFree] = useState([]);

  //busque planofree
  async function findAllPlanoFree() {
    const planofreeResponse = await getAllPlanoFree();
    setPlanoFree(planofreeResponse.data.results);
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
