import Image from "next/image";
import { Inter } from "next/font/google";
import SearchBar from "../../components/module/SearchBar";
import Categories from "../../components/module/Categories";
import CarsPage from "../../components/template/CarsPage";
import carsData from "../../data/carsData";
import ShowAll from "../../components/module/ShowAll";
import Slider from "../../components/module/Slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const three = carsData.slice(0, 3)
  return (
    <>
      <Slider />
      <SearchBar />
      <Categories />
      <CarsPage data={three} />
      <ShowAll />
    </>
  );
}
