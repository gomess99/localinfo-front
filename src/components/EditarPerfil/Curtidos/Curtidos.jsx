import { useState, useEffect } from "react";
import "../Curtidos/Curtidos.css";
import { CurtidosCard } from "../Curtidos/CurtidosCard";
import { getAllPlanoFree } from "../../../services/planofreeServices";

function Curtidos() {
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
    <div className="curtidos">
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className="curtidos-frame">
          {planofree.map((item) => (
            <CurtidosCard
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

export default Curtidos;
