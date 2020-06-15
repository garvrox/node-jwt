require('dotenv').config()
const express = require('express')
const router = require('./config/router')
const app = express()
app.use(express.json())
app.use('/api', router)
const PORT = process.env.APP_PORT || 3000
app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`))