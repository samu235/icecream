import { useId } from "react"
export default function ImgIceScream(props) {
    const imgDefault = "/gelado.png"
    let urlPicture = props?.src ? process.env.NEXT_PUBLIC_API + "/" + props?.src : imgDefault
    const idImg = "image" + useId()

    function Error() {
        document.getElementById(idImg).src = imgDefault
    }

    return (
        <picture>
            <img id={idImg} className={props?.styles} src={urlPicture} alt={urlPicture}  onError={Error} />
        </picture>
    )
}