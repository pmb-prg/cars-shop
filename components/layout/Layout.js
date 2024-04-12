import Link from "next/link"
import styles from "./Layoutt.module.scss"
import { IoCarSport } from "react-icons/io5";
function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <Link href="/">
                <h2>Cars Shop</h2>
                <span><IoCarSport /></span>
                <p>Choose an Buy your Car</p>
            </Link>
        </header>

        {children}

        <footer className={styles.footer}>
            <p>developed by pmbpg | with ❤️</p>
        </footer>
    </>
  )
}

export default Layout