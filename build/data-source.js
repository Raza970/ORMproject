"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const location_1 = require("./entity/location");
const typeorm_1 = require("typeorm");
// import { User } from "./entities/Location";
// import { Course } from "./entities/Course";
const demographic_1 = require("./entity/demographic");
const instructer_manager_1 = require("./entity/instructer_manager");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Malik@321",
    database: "khi",
    synchronize: true,
    logging: true,
    entities: [location_1.Location, demographic_1.CreateDemographicForm, instructer_manager_1.CreateInstructerManager],
    subscribers: [],
    migrations: [],
});
