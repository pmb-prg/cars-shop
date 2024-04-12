import styles from "./ShowMore.module.scss"
function ShowMore({isShow, setIsShow}) {
    const clickHandler = () => {
        setIsShow(!isShow);
    }
  return (
    <div className={styles.container}>
        <button onClick={clickHandler}>{isShow ? "Show Less" : "Show More"}</button>
    </div>
  )
}

export default ShowMore