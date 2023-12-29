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

  async function handleLikePlanoFree(id) {
    try {
      if (!id) {
        console.error("ID do plano não disponível.");
        return;
      }
      const response = await likesPlanoFreeById(id);
      console.log("Deu like");
      // Faça algo com a resposta, se necessário
    } catch (error) {
      console.log(error);
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
          {planofree.map((item) => {
            return (
              <CurtidosCard
              key={item.id}
              id={item.id} 
              categoria={item.categoria}
              likes={item.likes.length}
              funcionamento={item.funcionamento}
              name={item.name}
              avatar={item.avatar}
              redessociais={item.redessociais}
              contatos={item.contatos}
              endereco={item.endereco}
              onClickLike={async (id) => await handleLikePlanoFree(id)}  // Altere esta linha
            />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Curtidos;
