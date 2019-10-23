"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiLaborappControllers_1 = __importDefault(require("../controladores/apiLaborappControllers"));
class IndexLaborapp {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', apiLaborappControllers_1.default.get);
        this.router.post('/', apiLaborappControllers_1.default.post);
        this.router.put('/');
        this.router.delete('/');
    }
}
const indexLaborapp = new IndexLaborapp();
exports.default = indexLaborapp.router;
