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
          {planofree.length === 0 && <span className="message-error">Nenhum estabelecimento cadastrado...</span>}
          {planofree.map((item) => (
            <BusquePjCard
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
            />
          ))}
        </div>
      )}
      <div className="navPag">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-before" href="#" aria-label="Anterior">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only"></span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-after" href="#" aria-label="Próximo">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BusquePj;
