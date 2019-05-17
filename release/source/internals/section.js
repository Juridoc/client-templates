"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
/**
 * Template form section, entity class.
 */
let Section = class Section extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Section.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(),
    Class.Public()
], Section.prototype, "index", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Array(String),
    Class.Public()
], Section.prototype, "inputsIdList", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Section.prototype, "title", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Section.prototype, "description", void 0);
__decorate([
    RestDB.Schema.Boolean(),
    Class.Public()
], Section.prototype, "page", void 0);
Section = __decorate([
    RestDB.Schema.Entity('templates/section'),
    Class.Describe()
], Section);
exports.Section = Section;
//# sourceMappingURL=section.js.map