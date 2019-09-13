import {
	TOGGLE_CART_HIDDEN,
	ADD_SHOP_ITEM_IN_CART,
	REMOVE_SHOP_ITEM_IN_CART,
} from './constants'
import { addItemToCart, removeItemFromCart } from './utils'

export default function reducer(state, { type, payload }) {
	switch (type) {
		case TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: payload,
			}
		case ADD_SHOP_ITEM_IN_CART:
			return {
				...state,
				hidden: false,
				cartItems: addItemToCart(state.cartItems, payload),
			}
		case REMOVE_SHOP_ITEM_IN_CART:
			return {
				...state,
				hidden: false,
				cartItems: removeItemFromCart(state.cartItems, payload),
			}
		default:
			return state
	}
}
