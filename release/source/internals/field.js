"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
/**
 * Template form field, entity class.
 */
let Field = class Field extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Field.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Field.prototype, "contextId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Field.prototype, "sectionId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(),
    Class.Public()
], Field.prototype, "references", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(),
    Class.Public()
], Field.prototype, "index", void 0);
__decorate([
    RestDB.Schema.Number(),
    Class.Public()
], Field.prototype, "order", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Field.prototype, "title", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Field.prototype, "text", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Field.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Object),
    Class.Public()
], Field.prototype, "properties", void 0);
__decorate([
    RestDB.Schema.Boolean(),
    Class.Public()
], Field.prototype, "required", void 0);
__decorate([
    RestDB.Schema.Boolean(),
    Class.Public()
], Field.prototype, "public", void 0);
Field = __decorate([
    RestDB.Schema.Entity('templates/field'),
    Class.Describe()
], Field);
exports.Field = Field;
//# sourceMappingURL=field.js.map