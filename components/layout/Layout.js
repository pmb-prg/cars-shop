import styles from "./Layoutt.module.scss"
function Layout({children}) {
  return (
    <>
        <header>
            <h2>Cars Shop</h2>
            <p>Choose an Buy your Car</p>
        </header>

        {children}

        <footer>
            <p>developed by pmbpg | with ❤️</p>
        </footer>
    </>
  )
}

export default Layout