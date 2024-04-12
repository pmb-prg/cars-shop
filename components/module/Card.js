import Link from "next/link";
import Location from "../icons/Location"
import styles from "./Card.module.scss"
function Card(props) {
    const {id, image, model, year, distance, price, location} = props;
    console.log(props)
  return (
    <Link href={`/cars/${id}`}>
        <div className={styles.container}>
            <div className={styles.topCard}>
                <img src={image} />
                <h4>{model}</h4>
            <p>{year} . {distance}km</p>
            </div>
            <div className={styles.bottomCard}>
                <span>$ {price}</span>
                <p>{location} <Location /></p>
            </div>
        </div>
    </Link>
  )
}

export default Card