import { MdAddShoppingCart } from 'react-icons/md';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function ProductItem(product: Product) {
  return (
    <li>
        <img src={product.image} alt={product.title} />
        <strong>{product.title}</strong>
        <span>{product.price}</span>
        <button
          type="button"
          data-testid="add-product-button"
        // onClick={() => handleAddProduct(product.id)}
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />
            {/* {cartItemsAmount[product.id] || 0} */} 2
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
  )
}