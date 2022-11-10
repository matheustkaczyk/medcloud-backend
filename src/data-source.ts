import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from 'dotenv';
dotenv.config();

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
}).initialize().then(() => {
    console.log("Database connection established");
}).catch((error) => {
    console.error("Database connection failed", error);
});
