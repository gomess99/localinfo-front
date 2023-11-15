import { useState, useEffect } from "react";
import "../BusquePj/BusquePj.css";
import { BusquePjCard } from "../BusquePj/BusquePjCard";
//import { planofree } from "../../Data";
import { getAllPlanoFree } from "../../services/planofreeServices";
import { getAllPessoaJuridica } from "../../services/pessoajuridicaServices";
import { getAllPessoaFisica } from "../../services/pessoafisicaServices";

function BusquePj() {
  const [planofree, setPlanoFree] = useState([]);
  const [pessoafisica, setPessoaFisica] = useState([]);
  const [pessoajuridica, setPessoaJuridica] = useState([]);

  //busque planofree
  async function findAllPlanoFree() {
    const response = await getAllPlanoFree();
    setPlanoFree(response.data.results);
  }

  //busque pessoa juridica
  async function findAllPessoaJuridica() {
    const response = await getAllPessoaJuridica();
    setPessoaJuridica(response.data.results);
  }

  //busque pessoa física
  async function findAllPessoaFisica() {
    const response = await getAllPessoaFisica();
    setPessoaFisica(response.data.results);
  }

  useEffect(() => {
    findAllPlanoFree();
    findAllPessoaFisica();
    findAllPessoaJuridica();
  }, []);

  console.log(planofree);
  console.log(pessoafisica);
  console.log(pessoajuridica);

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
