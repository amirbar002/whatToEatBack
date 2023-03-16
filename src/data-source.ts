import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { RDBMS_MYSQL } from './constants'
import { Review } from './entity/Review'
import { Person } from './entity/Person'
import { Product } from './entity/Product'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: +8888,
  username: 'root',
  password: 'root',
  database:'sql_eat',
  synchronize: true,
  logging: false,
  entities: [Person, Product,Review], 
  migrations: [],
  subscribers: [],
})
