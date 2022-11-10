import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "medCloud",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
