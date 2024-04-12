import { useRouter } from 'next/router'
import styles from './ShowAll.module.scss'

function ShowAll() {
    const router = useRouter()
  return (
    <div className={styles.container}>
        <button onClick={() => router.push(`/cars`)}>Show All Cars</button>
    </div>
  )
}

export default ShowAll