import 'dotenv/config'
import express, { Request, Response, Application } from 'express'
import { AppDataSource } from './data-source'
import customers from './routers/Person'
import review from './routers/Review'
import products from './routers/products'
import cors from 'cors'
;(async () => {
  try {
    await AppDataSource.initialize()

    console.log('Successfully connected to mysql')

    const app: Application = express()
    app.use(cors())

    app.use(express.json())

    app.use('/person', customers)
    app.use('/review', review)
    app.use('/products', products)

    app.use((req: Request, res: Response) => {
      res.status(400).send('Resource not found!')
    })

    app.listen(+8888, () =>
      console.log('Server is listening on port' + 8888)
    )
  } catch (error) {
    console.error(error)
  }
})()
