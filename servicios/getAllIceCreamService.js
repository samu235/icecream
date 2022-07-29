
export default async function getAllIceCreamService() {
    try {
        let response = await fetch(process.env.NEXT_PUBLIC_API+"/icecreams")
        let data = await response.json();
        return data
    } catch (error) {
        console.log("ERROR -- getAllIceCreamService -- error", error)
        return[]
        
    }
}

