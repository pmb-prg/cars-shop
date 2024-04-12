import Calender from "../icons/Calender";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Suv from "../icons/Suv";
import styles from "./CarDetail.module.scss"

function CarDetail(props) {
    const {id, image, model, year, distance, price, location, description, name} = props;

  return (
    <div className={styles.container}>
        <img src={image} />
        <div className={styles.head}><h2>{`${name} ${model}`}</h2></div>
        <div className={styles.specifications}>
            <div className={styles.items}>
                <div>
                    <Company />
                    <p>{`Company`}</p>
                </div>
                <span>{name}</span>
            </div>
            <div className={styles.items}>                
                <div>
                    <Model/>
                    <p>{`Model`}</p>
                </div>
                <span>{model}</span>
            </div>
            <div className={styles.items}>
                <div>
                    <Calender />
                    <p> {`First Registration`}</p>
                </div>
                <span>{year}</span>
            </div>
            <div className={styles.items}>
                <div>
                    <Road />
                    <p>{`Kms Driving`}</p>
                </div>
                <span>{distance}</span>
            </div>
        </div>
        <div className={styles.loca}>
            <div>
                <Location />
                <p>{`Location`}</p>
            </div>
            <span>{location}</span>
        </div>
        <div className={styles.infor}>
            <h3>Extra Information</h3>
            <p>{description}</p>
        </div>
        <div className={styles.buy}>
        <div className={styles.price}>
            <div>
                <Money />
                <h3>Price:</h3>
            </div>
            <h4>{`$ ${price}`}</h4>
            </div>
            <button className={styles.btn}>Buy</button>
        </div>
    </div>
  )
}

export default CarDetail