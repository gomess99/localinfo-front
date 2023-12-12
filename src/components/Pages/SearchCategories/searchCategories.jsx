import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import BusqueLocal from "../../BusqueLocal/BusqueLocal";
import BusquePj from "../../BusquePj/BusquePj";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchLocals } from "../../../services/localServices";
import { BusquePjCard } from "../../BusquePj/BusquePjCard";

export function SearchCategories() {
  const { categoria } = useParams();
  const [planofree, setPlanoFree] = useState([]);

  async function search() {
    try {
      const planofreeApi = await searchLocals(categoria);
      setPlanoFree(planofreeApi.data.foundPlanoFree);
      console.log(planofreeApi.data.foundPlanoFree);
    } catch (err) {
      const planofreeApi = await searchLocals(categoria);
      console.log(planofreeApi.data.foundPlanoFree);
      console.log(err);
      setPlanoFree([]);
    }
  }

  useEffect(() => {
    search();
  }, [categoria]);

  return (
    <div>
      <Navbar />
      <BusqueLocal />
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
      <Footer />
    </div>
  );
}

export default SearchCategories;
