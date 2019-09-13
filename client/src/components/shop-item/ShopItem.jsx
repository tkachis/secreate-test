import React, { useContext, useState } from 'react'

import Context from '../../context'
import { ADD_SHOP_ITEM_IN_CART } from '../../constants'

import './shop-item.scss'

const CollectionItem = ({ name, price, imageUrl, id, quantity }) => {
	const { dispatch } = useContext(Context)
	const [currency, setCurrency] = useState('RUB')

	const addShopItemInCart = () => {
		const shopItemData = {
			name,
			price,
			imageUrl,
			id,
			currency,
			quantity,
		}
		dispatch({ type: ADD_SHOP_ITEM_IN_CART, payload: shopItemData })
	}

	const handleChange = e => {
		setCurrency(e.target.value)
	}

	return (
		<div className="shop-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
				onClick={addShopItemInCart}
			/>
			<div className="shop-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
				<select onChange={handleChange} value={currency}>
					<option>RUB</option>
					<option>EUR</option>
					<option>USD</option>
				</select>
			</div>
		</div>
	)
}

export default CollectionItem
