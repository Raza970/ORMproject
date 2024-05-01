import { AppDataSource } from "./data-source";
import { CreateInstructerManager } from "./entity/instructer_manager";
import { Location } from "./entity/location";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    // const userRepo  = AppDataSource.getRepository(User);

    const locationRepo = AppDataSource.getRepository(Location);
    // const Form = AppDataSource.getRepository(CreateDemographicForm);
    const Form = AppDataSource.getRepository(CreateInstructerManager);

    // for (let i = 0; i < 10; i++) {
    let loc = new Location();
    loc.City = "Karachi";
    loc.Alias = "RBS";
    loc.Country = "Pakistan";
    loc.LocationName = "East";
    loc.ExternalID = 1;
    loc.timeZone = 2;
    // user.age = Math.round(Math.random() * 30);
    locationRepo.save(loc);

    const instructerForm = new CreateInstructerManager();
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
