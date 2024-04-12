import Link from "next/link"
import Back from "../icons/Back"
import styles from "./Back.module.scss"

function GoBack() {
  return (
    <div className={styles.container}>
        <Link href="/cars">
            <button><Back /> back</button>
        </Link>
    </div>
  )
}

export default GoBack