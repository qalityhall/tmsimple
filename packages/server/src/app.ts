import 'reflect-metadata'
import * as bodyParser from 'body-parser'
import dotenv from 'dotenv'
import TYPES from './types'
import { AppDataSource } from './services/persistence/app-data-source'
import { InversifyExpressServer } from 'inversify-express-utils'
import container from './inversify.config'
import cors from 'cors'
import browserSync from 'browser-sync'

dotenv.config()

const server = new InversifyExpressServer(container)
server.setConfig((app) => {
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    )
    app.use(bodyParser.json())
    app.use(cors())
})

const appDataSource = container.get<AppDataSource>(TYPES.AppDataSource)
appDataSource.initialize()

const app = server.build()
const port = process.env['PORT'] ?? 3000
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const bs = browserSync.create()
bs.init({
    proxy: `http://localhost:${port}`,
    open: false,
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
