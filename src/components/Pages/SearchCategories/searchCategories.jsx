import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import BusqueLocal from '../../BusqueLocal/BusqueLocal';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchLocals } from "../../../services/localServices";

export function SearchCategories() {
    const { categoria } = useParams();
    const [planofree, setPlanoFree] = useState([]);

    async function search(){
        try {
            const planofreeApi = await searchLocals(categoria);  
            setPlanoFree(planofreeApi);   
            console.log(planofreeApi)   ;     
        } catch (err) {
            console.log(err);
            setPlanoFree([]);
        }
    }

    useEffect(() => {
        search();
    }, [categoria])

    return (
        <div>
            <Navbar/>
            <BusqueLocal/>
            <h1>{categoria}</h1>
            <Footer/>
        </div>
    )

}

export default SearchCategories;