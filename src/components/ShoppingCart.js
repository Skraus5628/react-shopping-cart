import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';
import cartContext from '../contexts/CartContext';

const ShoppingCart = () => {
	const { cart, removeItem, clearCart } = useContext(cartContext);

	const getCartTotal = () =>{
		return cart
		.reduce((acc, value) =>{
			return acc+value.price;
		}, 0)
		.toFixed(2)
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem} />
			))}

			<div className="shopping-cart_checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
				<button onClick={() =>clearCart()}>Clear Cart</button>
			</div>
		</div>
	);
	
};

export default ShoppingCart;
