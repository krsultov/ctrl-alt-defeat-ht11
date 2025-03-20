import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/ping', (req, res) => {
    return res.send('pong')
})

export { app }
