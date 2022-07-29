import { useId } from "react"
import styles from "../styles/CartIceCream.module.css"

export default function CartIceCream(props) {

    const imgDefault = "/gelado.png"
    let urlPicture = props?.picture ? process.env.NEXT_PUBLIC_API + "/" + props?.picture : imgDefault
    const idImg = "image" + useId()

    function Error() {
        console.log("error imagen", idImg)
        document.getElementById(idImg).src = imgDefault
    }

    return (
        <div>
            <img id={idImg} className={styles.img} src={urlPicture} onError={Error} />
            <h3>{props?.title}</h3>
        </div>
    )
}