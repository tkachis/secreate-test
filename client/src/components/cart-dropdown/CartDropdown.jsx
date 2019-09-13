import React, { useState, useContext } from 'react'
import axios from 'axios'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

import Context from '../../context'
import { CLEAR_CART } from '../../constants'

import './cart-dropdown.scss'

const CartDropdown = () => {
	const {
		state: { cartItems },
		dispatch,
	} = useContext(Context)

	const [totalPrice, setTotalPrice] = useState(null)
	// в крупном приложении, желательно, вынести в actions ч/з
	// middleware redux, например, thunk или saga

	const getTotalPrice = async () => {
		try {
			const res = await axios.post('/api/cart/total', { cartItems })
			setTotalPrice({ ...res.data })
			dispatch({ type: CLEAR_CART })
		} catch (err) {
			console.error(err)
		}
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
