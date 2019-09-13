import React, { useContext, useReducer } from 'react'

import Header from './components/header/Header'
import ShopPage from './components/shop/ShopPage'

import Context from './context'
import reducer from './reducer'

const App = () => {
	const initialState = useContext(Context)
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<Context.Provider value={{ state, dispatch }}>
			<Header />
			<ShopPage />
		</Context.Provider>
	)
}

export default App
