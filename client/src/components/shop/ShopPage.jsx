import React, { useState } from 'react'

import FAKE_SHOP_DATA from './fakeShopData'
import ShopItem from '../shop-item/ShopItem'

import './shop-page.scss'

const ShopPage = () => {
	const [shopItems] = useState(FAKE_SHOP_DATA)

	return (
		<div className="shop-page">
			{shopItems.map(shopItem => (
				<ShopItem key={shopItem.id} {...shopItem} />
			))}
		</div>
	)
}

export default ShopPage
