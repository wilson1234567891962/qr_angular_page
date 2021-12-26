import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ArchitectureTobeService = class ArchitectureTobeService {
    constructor() { }
    get dataToBe() {
        return this._dataToBe;
    }
    set dataToBe(value) {
        this._dataToBe = value;
    }
    get isLogin() {
        return this._isLogin;
    }
    set isLogin(value) {
        this._isLogin = value;
    }
};
ArchitectureTobeService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ArchitectureTobeService);
export { ArchitectureTobeService };
//# sourceMappingURL=architecture-tobe.service.js.map