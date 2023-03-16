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

    app.listen('postgres://rccuvafrelxpwx:8ee5bf93b2f270e87f66fb80cf8446a7f8cd81c39fa7989bdfa9f3bdc9366af5@ec2-52-50-161-219.eu-west-1.compute.amazonaws.com:5432/dbs8qr74skobgq', () =>
      console.log('Server is listening on port')
    )
  } catch (error) {
    console.error(error)
  }
})()
