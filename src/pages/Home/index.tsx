import { useState, useEffect } from "react";
import { DadosRestaurante } from "../../Components/CardRestaurants";
import Header from "../../Components/Header";
import RestList from "../../Containers/RestaurantList";

const Home = () => {
    const [restaurante, setRestaurante] = useState<DadosRestaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

    return(
        <>
            <Header></Header>
            <RestList restaurants={restaurante}></RestList>
        </>
    )
}

export default Home