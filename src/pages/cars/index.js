import { useState } from "react"
import CarsPage from "../../../components/template/CarsPage"
import carsData from "../../../data/carsData"
import ShowMore from "../../../components/module/ShowMore"
import Categories from "../../../components/module/Categories"
import SearchBar from "../../../components/module/SearchBar"

function Details() {
    const [shortData, setShortData] = useState(carsData.slice(0, 6))
    const [isShow, setIsShow] = useState(false)
  return (
    <div>
        <SearchBar />
        <Categories />
        <CarsPage data={isShow ? carsData : shortData} />
        <ShowMore isShow={isShow} setIsShow={setIsShow} />
    </div>
  )
}

export default Details