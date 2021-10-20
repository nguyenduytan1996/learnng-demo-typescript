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
exports.cung_thu = void 0;
var parent_1 = require("./parent");
var cung_thu = /** @class */ (function (_super) {
    __extends(cung_thu, _super);
    function cung_thu(ten_nhan_vat, trangthai, donsatthu, vPrivate, vProtected) {
        var _this = _super.call(this, ten_nhan_vat, trangthai, vPrivate, vProtected) || this;
        _this.donsatthu = "aaa";
        _this.donsatthu = donsatthu;
        return _this;
    }
    cung_thu.prototype.hienthiten = function () {
        _super.prototype.hienthiten.call(this);
        console.log("===> Child.... Name: " + this.ten_nhan_vat + ", Donsatthu: " + this.donsatthu + " ===> Child");
    };
    return cung_thu;
}(parent_1.nhan_vat_game));
exports.cung_thu = cung_thu;
