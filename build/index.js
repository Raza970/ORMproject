"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const instructer_manager_1 = require("./entity/instructer_manager");
const location_1 = require("./entity/location");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    // const userRepo  = AppDataSource.getRepository(User);
    const locationRepo = data_source_1.AppDataSource.getRepository(location_1.Location);
    // const Form = AppDataSource.getRepository(CreateDemographicForm);
    const Form = data_source_1.AppDataSource.getRepository(instructer_manager_1.CreateInstructerManager);
    // for (let i = 0; i < 10; i++) {
    let loc = new location_1.Location();
    loc.City = "Karachi";
    loc.Alias = "RBS";
    loc.Country = "Pakistan";
    loc.LocationName = "East";
    loc.ExternalID = 1;
    loc.timeZone = 2;
    // user.age = Math.round(Math.random() * 30);
    locationRepo.save(loc);
    const instructerForm = new instructer_manager_1.CreateInstructerManager();
    instructerForm.First_Name = "Malik";
    instructerForm.Last_Name = "Malik";
    instructerForm.Email = "malik@gmail.com";
    // instructerForm.location = loc;
    Form.save(instructerForm);
    // const DemographicForm = new CreateDemographicForm();
    // DemographicForm.First_Name = "Malik";
    // // DemographicForm.Description = "Malik1";
    // DemographicForm.logoName = "Malik";
    // DemographicForm.Languages = "Malik";
    // DemographicForm.styleSheet = "Malik";
    // DemographicForm.resultPerPage = 10;
    // Form.save(DemographicForm);
    // const course = new Course();
    // course.title = "Course " + i;
    // course.url = "about";
    // course.description = "A Course description "
    // courseRepo.save(course);
    //AppDataSource.manager.save(user);
    // }
    // console.log('10 Users have been saved!')
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
