


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


export { changeLike, getAllLike }