"use strict";
exports.__esModule = true;
exports.nhan_vat_game = void 0;
var nhan_vat_game = /** @class */ (function () {
    function nhan_vat_game(ten_nhan_vat, trangthai, varPrivate, varprotected) {
        this.ten_nhan_vat = "Milo";
        this.varPrivate = "varPrivate";
        this.varprotected = "varprotected";
        this.ten_nhan_vat = ten_nhan_vat;
        this.trangthai = trangthai;
        this.varPrivate = varPrivate;
        this.varprotected = varprotected;
    }
    // public get _varPrivate(): string {
    //   return this.varPrivate;
    // }
    // public set _varPrivate(v: string) {
    //   this.varPrivate = v;
    // }
    nhan_vat_game.prototype.chay = function (x) {
        // Demo function
        return "a";
    };
    nhan_vat_game.prototype.chem = function (x) {
        // Demo function
        console.log("Hàm chém");
    };
    nhan_vat_game.prototype.hienthiten = function () {
        console.log("===> Parent... Name: " + this.ten_nhan_vat + ", Trangthai: " + this.trangthai + ", varprivate: " + this.varPrivate + ", varprotected: " + this.varprotected);
    };
    nhan_vat_game.human = true;
    return nhan_vat_game;
}());
exports.nhan_vat_game = nhan_vat_game;
