import { useState, useEffect } from "react";
import "../BusquePj/BusquePj.css";
import { BusquePjCard } from "../BusquePj/BusquePjCard";
import { getAllPlanoFree } from "../../services/planofreeServices";

function BusquePj() {
  const [planofree, setPlanoFree] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function findAllPlanoFree() {
    try {
      const planofreeResponse = await getAllPlanoFree();
      setPlanoFree(planofreeResponse.data.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar planos gratuitos:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    findAllPlanoFree();
  }, []);

  return (
    <div className="busquepj">
      {isLoading ? (
        <span className="loader"></span>
      ) : (
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
      )}
    </div>
  );
}

export default BusquePj;
