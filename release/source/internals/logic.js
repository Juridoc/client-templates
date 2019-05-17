"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logic = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Logical = require("./logical");
/**
 * Template form logic, entity class.
 */
let Logic = class Logic extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Logic.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Logic.prototype, "contextId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Logic.prototype, "sectionId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(),
    Class.Public()
], Logic.prototype, "references", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(),
    Class.Public()
], Logic.prototype, "index", void 0);
__decorate([
    RestDB.Schema.Number(),
    Class.Public()
], Logic.prototype, "order", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Logic.prototype, "title", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Logic.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Object),
    Class.Public()
], Logic.prototype, "properties", void 0);
__decorate([
    RestDB.Schema.Boolean(),
    Class.Public()
], Logic.prototype, "required", void 0);
__decorate([
    RestDB.Schema.Boolean(),
    Class.Public()
], Logic.prototype, "public", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(Logical.Option),
    Class.Public()
], Logic.prototype, "optionsList", void 0);
Logic = __decorate([
    RestDB.Schema.Entity('templates/logic'),
    Class.Describe()
], Logic);
exports.Logic = Logic;
//# sourceMappingURL=logic.js.map