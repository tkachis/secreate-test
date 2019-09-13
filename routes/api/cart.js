const express = require('express')

const getCbrData = require('../../middleware/getCbrData')

const router = express.Router()

// @route         POST api/sum-price
// @description   Get the total prices of the cart items
// @access        Public
router.post('/total', [getCbrData], (req, res) => {
	try {
		const cartItems = req.body.cartItems
		const { usdRate, eurRate } = req.usdAndEurRate

		// №1

		// const totalPrice = {
		// 	RUB: 0,
		// 	EUR: 0,
		// 	USD: 0,
		// }

		// cartItems.forEach(({ currency, quantity, price }) => {
		// 	sum = quantity * price

		// 	switch (currency) {
		// 		case 'RUB':
		// 			totalPrice.RUB += sum
		// 			totalPrice.EUR += sum / eurRate
		// 			totalPrice.USD += sum / usdRate
		// 			break
		// 		case 'EUR':
		// 			totalPrice.RUB += sum * eurRate
		// 			totalPrice.EUR += sum
		// 			totalPrice.USD += (sum * eurRate) / usdRate
		// 			break
		// 		case 'USD':
		// 			totalPrice.RUB += sum * usdRate
		// 			totalPrice.EUR += (sum * usdRate) / eurRate
		// 			totalPrice.USD += sum
		// 			break
		// 		default:
		// 			break
		// 	}
		// })

		//res.json(totalPrice)

		// №2

		totalPriceInRub = cartItems.reduce(
			(total, { quantity, currency, price }) => {
				switch (currency) {
					case 'RUB':
						return total + quantity * price
					case 'USD':
						return total + quantity * price * usdRate
					case 'EUR':
						return total + quantity * price * eurRate
					default:
						return total
				}
			},
			0
		)

		const totalPrice = {
			RUB: totalPriceInRub,
			EUR: totalPriceInRub / eurRate,
			USD: totalPriceInRub / usdRate,
		}

		res.json(totalPrice)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
})

module.exports = router
