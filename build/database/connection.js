"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const credenciales_1 = __importDefault(require("./credenciales"));
const database = promise_mysql_1.default.createPool(credenciales_1.default.database);
//
database.getConnection()
    .then(connection => {
    //
    database.releaseConnection(connection);
    console.log('DB is connected');
    //
});
//
//
exports.default = database;
//
