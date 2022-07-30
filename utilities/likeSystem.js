


function getArray() {
    let localArray = localStorage.getItem('like')
    try {
        if (localArray === null || localArray.length <= 0) {

            return []
        }
        else {
            return JSON.parse(localArray)
        }
    } catch (error) {
        return []
    }

}

function setArray(newArray) {
    let result = JSON.stringify(newArray)
    localStorage.setItem("like", result);
}

function changeLike(id) {

    let localArray = getArray()

    let isLike = localArray.findIndex(item => item === id)

    if (isLike === -1) {
        localArray.push(id)
        setArray(localArray)
    } else {
        setArray(localArray.filter(item => item !== id))
    }

}
function getAllLike() {
    return getArray()
}

function isLike(id){

    let localLike = getArray()
    console.log("is like",localLike, id,localLike.some(item => item === id))
    return localLike.some(item => item == id)

}


export { changeLike, getAllLike, isLike }