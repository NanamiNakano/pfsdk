"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDevice = void 0;
const Device_1 = require("../Device");
class AdminDevice extends Device_1.Device {
    constructor(axiosInstance) {
        super(axiosInstance, true);
    }
    addTunnelDevice(_) {
        return __awaiter(this, void 0, void 0, function* () {
            return { Msg: "This method is not implemented yet", Ok: true };
        });
    }
    addNatDevice(_) {
        return __awaiter(this, void 0, void 0, function* () {
            return { Msg: "This method is not implemented yet", Ok: true };
        });
    }
    modifyTunnelDevice(_) {
        return __awaiter(this, void 0, void 0, function* () {
            return { Msg: "This method is not implemented yet", Ok: true };
        });
    }
    modifyNatDevice(_) {
        return __awaiter(this, void 0, void 0, function* () {
            return { Msg: "This method is not implemented yet", Ok: true };
        });
    }
    deleteTunnelDevice(_) {
        return __awaiter(this, void 0, void 0, function* () {
            return { Msg: "This method is not implemented yet", Ok: true };
        });
    }
    deleteNatDevice(_) {
        return __awaiter(this, void 0, void 0, function* () {
            return { Msg: "This method is not implemented yet", Ok: true };
        });
    }
}
exports.AdminDevice = AdminDevice;
