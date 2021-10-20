"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Anroid = void 0;
var abtractDemo_1 = require("./abtractDemo");
var Anroid = /** @class */ (function (_super) {
    __extends(Anroid, _super);
    function Anroid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anroid.prototype.guitinnhan = function () {
        console.log("Implement guitinnhan()");
        // throw new Error("Method not implemented.");
    };
    return Anroid;
}(abtractDemo_1.DienThoai));
exports.Anroid = Anroid;
