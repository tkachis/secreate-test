const express = require('express')

const app = express()

// Parse application/json
app.use(express.json({ extended: false }))

// Routes
app.use('/api/cart', require('./routes/api/cart'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`App listening on port: ${PORT}!`)
})
