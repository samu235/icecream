import Link from "next/link"

import styles from "../styles/CartIceCream.module.css"
import ImgIceScream from "./ImgIceScream"

export default function CartIceCream(props) {

    

   

    return (
        <Link href={"/helado/"+props.id}>
            <a className={styles.a}>
                <div className={styles.title}>
                    <ImgIceScream styles={styles.img} src={props?.picture}/>
                    <h5>{props?.title}</h5>
                </div>
            </a>
        </Link>

    )
}