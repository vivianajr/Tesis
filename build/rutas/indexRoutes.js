"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routesLaborapp_1 = require("./routesLaborapp");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
    }
    config() {
        this.router.get('/api/laborapp', routesLaborapp_1.routesLaborapp);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
