
import { useEffect, useState } from 'react'
import CartIceCream from '../components/CartIceCream'
import getAllIceCreamService from '../servicios/getAllIceCreamService'
import styles from '../styles/Home.module.css'
import { isLike } from '../utilities/likeSystem'

export default function Home() {

  const [iceCreams, setIceCreams] = useState([])
  const [onlyFilter, setFilterLikes] = useState(false)
  const [filterText, setFilterText] = useState("")

  useEffect(() => {
    getAllIceCreamService().then(data => setIceCreams(data))
  }, [])

  function changeLikeFilter() {
    setFilterLikes($('#onlyLikes').is(":checked"))
  }

  function changeTextFilter() {
    setFilterText($('#filterText').val()?.toUpperCase())
  }

  function filter(item) {
    console.log(item)
    if (onlyFilter && !isLike(item.id)) {
      console.log(item.id,isLike(item.id))
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

  return (
    <div>
      <div>
        <div className={styles.container_filter}>
          <div className={styles.filter}>
            <input className="form-check-input" type="checkbox" id="onlyLikes" onChange={changeLikeFilter} />
            <label className="form-check-label" htmlFor="onlyLikes">Only Likes</label>
          </div>
          <div className={styles.filter}>
            <input type="text" className="form-control" id="filterText" placeholder="add Filter" onChange={changeTextFilter} />
          </div>
        </div>

      </div>
      <div className={styles.container + " container"}>
        <div className='row'>
          {
            iceCreams?.filter(item => filter(item))?.map(item => {
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
