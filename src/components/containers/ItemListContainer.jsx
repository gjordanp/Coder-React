import ActionAreaCard from '../Card/ActionAreaCard'
import styles from './itemlistcontainer.module.css'
import { Link, useParams } from 'react-router-dom'


const ItemListContainer = ({ products }) => {
  const cardProps={maxWidth:345,height:200,showRating:true,showPrice:true,showDescription:false,showActions: false }
  const { cat } = useParams();
  if (cat) { products = products.filter((product) => product.category === cat) }
  return (
    <div className={styles.container}>
      {products.map((product =>
        <Link to={`/Coder-React/item/${product.id}`}>
          <ActionAreaCard key={product.id} product={product} cardProps={cardProps}/>
        </Link>
      ))}
    </div>
  )
}

export default ItemListContainer