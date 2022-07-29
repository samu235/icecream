
import { useEffect, useState } from 'react'
import CartIceCream from '../components/CartIceCream'
import getAllIceCreamService from '../servicios/getAllIceCreamService'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [iceCreams, setIceCreams] = useState([])

  useEffect(() => {
    getAllIceCreamService().then(data => setIceCreams(data))
  }, [])
  return (
    <div>
      
      <div className={styles.container + " container"}>
        <div className='row'>
          {
            iceCreams?.map(item => {
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
