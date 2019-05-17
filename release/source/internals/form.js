"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const context_1 = require("./context");
const content_1 = require("./content");
const section_1 = require("./section");
const field_1 = require("./field");
const logic_1 = require("./logic");
/**
 * Template form, entity class.
 */
let Form = class Form extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Map(content_1.Content),
    Class.Public()
], Form.prototype, "contentMap", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Map(context_1.Context),
    Class.Public()
], Form.prototype, "contextMap", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Map(section_1.Section),
    Class.Public()
], Form.prototype, "sectionMap", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Map(logic_1.Logic),
    Class.Public()
], Form.prototype, "logicMap", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Map(field_1.Field),
    Class.Public()
], Form.prototype, "fieldMap", void 0);
Form = __decorate([
    RestDB.Schema.Entity('templates/form'),
    Class.Describe()
], Form);
exports.Form = Form;
//# sourceMappingURL=form.js.map