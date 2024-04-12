import { useRouter } from "next/router"
import CarsPage from "../../../components/template/CarsPage"
import carsData from "../../../data/carsData"
import GoBack from "../../../components/module/Back";


function category() {
    const router = useRouter();
    const { category } = router.query;
    const sedanCars = carsData.filter((i) => i.category === category)
  return (
    <>
        <GoBack/>
        <CarsPage data={sedanCars} />
    </>
  )
}

export default category