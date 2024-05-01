"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDemographicForm = void 0;
const typeorm_1 = require("typeorm");
let CreateDemographicForm = class CreateDemographicForm extends typeorm_1.BaseEntity {
    id;
    First_Name;
    // @Column()
    // Description: string;
    logoName;
    Languages;
    styleSheet;
    resultPerPage;
};
exports.CreateDemographicForm = CreateDemographicForm;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CreateDemographicForm.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateDemographicForm.prototype, "First_Name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateDemographicForm.prototype, "logoName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateDemographicForm.prototype, "Languages", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateDemographicForm.prototype, "styleSheet", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CreateDemographicForm.prototype, "resultPerPage", void 0);
exports.CreateDemographicForm = CreateDemographicForm = __decorate([
    (0, typeorm_1.Entity)()
], CreateDemographicForm);
