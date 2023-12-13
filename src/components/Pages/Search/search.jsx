import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import BusqueLocal from "../../BusqueLocal/BusqueLocal";
import BusquePj from "../../BusquePj/BusquePj";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchLocals } from "../../../services/localServices";
import { BusquePjCard } from "../../BusquePj/BusquePjCard";

export function Search() {
  const { categoria } = useParams();
  const [planofree, setPlanoFree] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function search() {
    try {
      setIsLoading(true);
      const planofreeApi = await searchLocals(categoria);
      setPlanoFree(planofreeApi.data.foundPlanoFree);
      console.log(planofreeApi.data.foundPlanoFree);
    } catch (err) {
      console.log(err);
      setPlanoFree([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    search();
  }, [categoria]);

  return (
    <div>
      <Navbar />
      <BusqueLocal />
      <div className="busquepj">
        {isLoading ? (
          <div className="loading" style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="loader"></span>
          </div>
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
      <Footer />
    </div>
  );
}

export default Search;
