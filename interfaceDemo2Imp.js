"use strict";
exports.__esModule = true;
exports.nguoiImp = void 0;
var nguoiImp = /** @class */ (function () {
    function nguoiImp(x) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.ten = args[0]; // ten;
        this.tuoi = args[1]; //tuoi;
        this.mota = args[2]; //mota;
        this.thuoctinh_Them = x;
        // this.thuoctinh_Them = thuoctinh;
        // console.log("==========");
        // console.log(args);
        // console.log(`${args[0]}, ${args[1]}, ${args[2]}`);
        // console.log("==========");
    }
    nguoiImp.prototype.xemthongtin = function () {
        console.log("Hàm xem thông tin Nguoi_Implement");
        //throw new Error("Method not implemented.");
    };
    nguoiImp.prototype.ham1 = function () {
        return "Ham 1 Nguoi_Implement";
        //throw new Error("Method not implemented.");
    };
    return nguoiImp;
}());
exports.nguoiImp = nguoiImp;
