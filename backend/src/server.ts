import dotenv from "dotenv"
import { app } from "./app"

import { AppDataSource } from "../data-source"
import "reflect-metadata"

dotenv.config()

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080

AppDataSource.initialize().then(() => {
    console.info('database connected!')
    app.listen(PORT, () => {
        console.info(`server is running ${PORT}`)
    })

}).catch((err) => {
    console.error(err)
})
