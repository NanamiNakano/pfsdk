"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const User_1 = require("./User");
class Admin {
    constructor(axiosInstance) {
        this.user = new User_1.AdminUser(axiosInstance);
    }
}
exports.Admin = Admin;
