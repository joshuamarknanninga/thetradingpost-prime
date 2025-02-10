const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const formRoutes = require('./routes/form')
const paymentRoutes = require('./routes/payment')
const mapRoutes = require('./routes/map')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/form', formRoutes)
app.use('/api/payment', paymentRoutes)
app.use('/api/map', mapRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
