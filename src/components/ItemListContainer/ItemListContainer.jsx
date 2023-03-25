import ActionAreaCard from '../Card/ActionAreaCard'
import SkeletonAreaCard from '../Card/SkeletonAreaCard'
import styles from './itemlistcontainer.module.css'
import { Link, useParams } from 'react-router-dom'


const ItemListContainer = ({ products, loading }) => {
  const cardProps={maxWidth:345,height:200,showRating:true,showPrice:true,showDescription:false,showActions: false, canHover: true  }
  const { cat } = useParams();
  if (cat) { products = products.filter((product) => product.category === cat) }
  const fakeproducts=[1,2,3,4,5,6,7,8,9,10,11,12,13];
  return (
    <div className={styles.container}>
      {loading ? 
      fakeproducts.map((product =>
          <SkeletonAreaCard key={product} cardProps={cardProps}/>
      ))
      :
      products.map((product =>
        <Link to={`/item/${product.id}`} key={product.id}>
          <ActionAreaCard key={product.id} product={product} cardProps={cardProps}/>
        </Link>
      ))}
    </div>
  )
}

export default ItemListContainer