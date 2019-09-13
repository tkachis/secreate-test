import React, { useState } from 'react'
import axios from 'axios'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

import './cart-dropdown.scss'

const CartDropdown = ({ cartItems }) => {
	const [totalPrice, setTotalPrice] = useState(null)
	// в крупном приложении желательно вынести в actions ч/з
	// middleware redux, например thunk или saga

	const getTotalPrice = async () => {
		const res = await axios.post('/api/cart/total', { cartItems })
		setTotalPrice({ ...res.data })
	}

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
				{totalPrice && (
					<div className="total-coast">
						<span>RUB: {totalPrice.RUB.toFixed(2)}</span>
						<span>USD: {totalPrice.USD.toFixed(2)}</span>
						<span>EUR: {totalPrice.EUR.toFixed(2)}</span>
					</div>
				)}
			</div>
			<CustomButton onClick={getTotalPrice}>ПОСЧИТАТЬ</CustomButton>
		</div>
	)
}

export default CartDropdown
