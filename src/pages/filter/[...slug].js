import { useRouter } from "next/router"
import carsData from "../../../data/carsData";
import CarsPage from "../../../components/template/CarsPage";
import { useState } from "react";
import GoBack from "../../../components/module/Back";
import Empity from "../../../components/module/Empity";


function filterCards() {
    const router = useRouter();
    const [min, max] = router.query.slug || [];

    const filter = carsData.filter(e => e.price >= min && e.price <= max)

    
    console.log(filter)
  return (
    <>
        <GoBack />
        
        {filter.length === 0 ? <Empity /> : <CarsPage data={filter} />}
    </>
  )
}

export default filterCards