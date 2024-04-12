import { useRouter } from "next/router";
import carsData from "../../../data/carsData";
import CarDetail from "../../../components/template/CarDetail";

function CarDetails() {
    const router = useRouter();
    const {carId} = router.query;
    const carDetails =carsData[carId - 1]
  return <CarDetail { ...carDetails } />
}

export default CarDetails