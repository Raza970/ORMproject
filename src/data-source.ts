import { Location } from './entity/location';
import { DataSource } from "typeorm";
// import { User } from "./entities/Location";
// import { Course } from "./entities/Course";
import { CreateDemographicForm } from './entity/demographic';
import { CreateInstructerManager } from './entity/instructer_manager';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Malik@321",
    database: "khi",
    synchronize: true,
    logging: true,
    entities: [Location,CreateDemographicForm,CreateInstructerManager],
    subscribers: [],
    migrations: [],
})
