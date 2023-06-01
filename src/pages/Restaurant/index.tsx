import { useParams } from "react-router";
import ProfileHeader from "../../Components/ProfileHeader";
import Banner from "../../Components/RestBanner";
import ProductList from "../../Containers/ProductList";
import { useEffect, useState } from "react";
import { DadosRestaurante, MenuItem } from "../../Components/CardRestaurants";

const Restaurant = () => {
    const { id } = useParams()

    const [currentRest, setCurrentRest] = useState<DadosRestaurante>()
    
    useEffect(()=> {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setCurrentRest(res))

    }, [id])

    if (!currentRest) {
        return <h3>Carregando...</h3>
      }

    return(
        <>
            <ProfileHeader></ProfileHeader>
            <Banner capa={currentRest.capa} tipo={currentRest.tipo} titulo={currentRest.titulo}></Banner>
            <ProductList/>
        </>

    )
}

export default Restaurant