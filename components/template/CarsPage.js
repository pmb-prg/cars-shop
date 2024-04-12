import Card from "../module/Card"
import styles from "./CarsPage.module.scss"

function CarsPage({data}) {
  return (
    <div className={styles.container}>
        {data.map((i) => <Card key={i.id} {...i} />)}
    </div>
  )
}

export default CarsPage