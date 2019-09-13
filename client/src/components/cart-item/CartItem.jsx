import React, { useContext } from 'react'

import Context from '../../context'
import { REMOVE_SHOP_ITEM_IN_CART } from '../../constants'

import './cart-item.scss'

const CartItem = ({
	item: { imageUrl, price, name, quantity, currency, id },
}) => {
	const { dispatch } = useContext(Context)

	const removeShopItemInCart = () => {
		dispatch({ type: REMOVE_SHOP_ITEM_IN_CART, payload: id })
	}

	return (
		<div className="cart-item">
			<img src={imageUrl} alt="item" />
			<div className="item-details">
				<div className="delete-item" onClick={removeShopItemInCart}>
					x
				</div>
				<span className="name">{name}</span>
				<span className="price">
					{quantity} x {price} - {currency}
				</span>
			</div>
		</div>
	)
}

export default CartItem
