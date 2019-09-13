import React, { useContext } from 'react'

import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

import Context from '../../context'
import { TOGGLE_CART_HIDDEN } from '../../constants'

import './header.scss'

const Header = () => {
	const {
		state: { hidden, cartItems },
		dispatch,
	} = useContext(Context)

	const toggleCartHidden = () => {
		dispatch({ type: TOGGLE_CART_HIDDEN, payload: !hidden })
	}

	return (
		<header className="header">
			<div className="options">
				<CartIcon toggleCartHidden={toggleCartHidden} cartItems={cartItems} />
			</div>
			{!hidden && <CartDropdown cartItems={cartItems} />}
		</header>
	)
}

export default Header
