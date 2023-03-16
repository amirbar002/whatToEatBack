import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { RDBMS_MYSQL } from './constants'
import { Review } from './entity/Review'
import { Person } from './entity/Person'
import { Product } from './entity/Product'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'ec2-52-50-161-219.eu-west-1.compute.amazonaws.com',
  port: +5432,
  username: 'rccuvafrelxpwx',
  password: '8ee5bf93b2f270e87f66fb80cf8446a7f8cd81c39fa7989bdfa9f3bdc9366af5',
  database:'dbs8qr74skobgq',
  synchronize: true,
  logging: false,
  entities: [Person, Product,Review], 
  migrations: [],
  subscribers: [],
})
