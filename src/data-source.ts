import "reflect-metadata";
import { DataSource } from "typeorm";

const { TYPEORM_HOST, TYPEORM_PORT, TYPEORM_USERNAME, TYPEORM_PASSWORD, TYPEORM_DATABASE } = process.env;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: TYPEORM_HOST,
    port: Number(TYPEORM_PORT),
    username: TYPEORM_USERNAME,
    password: TYPEORM_PASSWORD,
    database: TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
