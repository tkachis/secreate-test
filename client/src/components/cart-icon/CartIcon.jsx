import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.scss'

const CartIcon = ({ toggleCartHidden, cartItems }) => {
	// похорошему бы добавить redux и reselect и вынести
	// эту функцию в селекторы, ну так как это тестовое, не
	// буду усложнять структуру приложения

	const cartItemsCount = () => {
		return cartItems.reduce(
			(accumalatedQuantity, cartItem) =>
				accumalatedQuantity + cartItem.quantity,
			0
		)
	}
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{cartItemsCount()}</span>
		</div>
	)
}

export default CartIcon
