import express from 'express'
import router from './routes/router.js'
import db from './database/database.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, function () {
  console.log('Listen to port 3000')
})

app.use('/', router)
