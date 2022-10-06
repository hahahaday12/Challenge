import { Product } from '../../types'
import { Link } from 'react-router-dom'

// products 의 index.tsx에 있는 api에서 받아오는 데이터의 모습을 적어준다. 그리고 타입을 설정해준다. 
const ProductItem = ({category,image,id,price,rating,title}: Product) => (
<li className='product-item'>
    <Link to={`/products/${id}`}>
    <p className='product-item__category'>{category}</p>
    <p className='product-item__title'>{title}</p>
    <img className='product-item__image' src={image} />
    <span className='product-item__price' >${price}</span>
    <span className='product-item__rating'>{rating.rate}</span>
    </Link>
</li>
)

export default ProductItem;