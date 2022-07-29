
export default async function getIceCreamByIdService(id) {
    try {
        let response = await fetch(process.env.NEXT_PUBLIC_API+"/icecreams/"+id)
        let data = await response.json();
        return data
    } catch (error) {
        console.log("ERROR -- getIceCreamByIdService -- error", error)
        return[]
        
    }
}

