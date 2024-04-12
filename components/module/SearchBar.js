import { useState } from "react"
import styles from "./SearchBar.module.scss"
import { useRouter } from "next/router"

function SearchBar() {
    const router = useRouter();

    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    const searchHandler = () => {
        if (maxPrice && minPrice){
            router.push(`/filter/${minPrice}/${maxPrice}`)
        } else{
            alert("Please Enter minimum and maximum price!");
        }
    }

  return (
    <div className={styles.container}>
        <div>
            <input 
            placeholder="Inter min-price" 
            value={minPrice} 
            onChange={e => setMinPrice(e.target.value)}/>

            <input  
            placeholder="Inter max-price" 
            value={maxPrice} 
            onChange={e => setMaxPrice(e.target.value)}/>
        </div>
        <button onClick={searchHandler}>Search</button>
    </div>
  )
}

export default SearchBar