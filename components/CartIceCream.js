export default function CartIceCream(props){

let urlPicture = props?.picture ? process.env.NEXT_PUBLIC_API+"/"+props?.picture :""

    return(
        <div>
            <img src={urlPicture}/>
            <h3>{props?.title}</h3>
        </div>
    )
}