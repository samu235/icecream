
import { useEffect, useState } from 'react'
import CartIceCream from '../components/CartIceCream'
import getAllIceCreamService from '../servicios/getAllIceCreamService'
import styles from '../styles/Home.module.css'
import { isLike } from '../utilities/likeSystem'

export default function Home({ preIceCream }) {

  const [iceCreams, setIceCreams] = useState([])
  const [onlyFilter, setFilterLikes] = useState(false)
  const [filterText, setFilterText] = useState("")
  const [sortOption, setSortOption] = useState("A-Z")


  //there are two option for get elementen:
  /*
  // -this line only if ice cream is change any time 
  useEffect(() => {
    //there are two option for get elementen:

    getAllIceCreamService().then(data => setIceCreams(data))

  }, [])
  */
  // -this line, if ice cream is always the same
  useEffect(() => {
    setIceCreams(preIceCream)
  }, [preIceCream])

 

  function changeLikeFilter() {
    setFilterLikes($('#onlyLikes').is(":checked"))
  }

  function changeTextFilter() {
    setFilterText($('#filterText').val()?.toUpperCase())
  }

  function filter(item) {
    if (onlyFilter && !isLike(item.id)) {
      return false
    }
    if (filterText.length > 0) {
      if (item?.flavor?.toUpperCase().indexOf(filterText) >= 0) {
        return true
      }
      else {
        return false
      }
    }

    return true
  }

  function onClikSort() {
    if (sortOption === "A-Z") {
      setSortOption("Z-A")
    } else if (sortOption === "Z-A") {
      setSortOption("A-Z")
    }
  }

  function sortCompare(item1, item2) {
    if (sortOption === "A-Z") {
      if (item1.flavor > item2.flavor) {
        return 1
      } else {
        return -1
      }
    } else {
      if (item1.flavor < item2.flavor) {
        return 1
      } else {
        return -1
      }
    }
  }


 
  return (
    <div>
      <div>
        <div className={styles.container_filter}>
          <div className={styles.filter}>
            <input className="form-check-input" type="checkbox" id="onlyLikes" onChange={changeLikeFilter} />
            <label className="form-check-label" htmlFor="onlyLikes">Only Likes</label>
          </div>
          <div className={styles.filter}>
            <input type="text" className="form-control" id="filterText" placeholder="Filter name" onChange={changeTextFilter} />
          </div>
          <div>
            <button type="button" className={styles.filter + " btn btn-light"} onClick={onClikSort}>Short:{sortOption}</button>
          </div>
        </div>

      </div>
      <div className={styles.container + " container"}>
        <div className='row'>
          {
            iceCreams?.filter(item => filter(item))?.sort((a, b) => sortCompare(a , b))?.map(item => {
              return (
                <div key={item?.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CartIceCream title={item?.flavor} picture={item?.picture} id={item?.id} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const preIceCream = await getAllIceCreamService()

  return {
    props: {
      preIceCream,
    },
  }
}
