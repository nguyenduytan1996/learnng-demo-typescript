import { state } from "./common";

export class nhan_vat_game {
  ten_nhan_vat: string = "Milo";
  trangthai: state;
  static human: boolean = true;
  private varPrivate: string = "varPrivate";
  protected varprotected: string = "varprotected";

  constructor(
    ten_nhan_vat: string,
    trangthai: state,
    varPrivate: string,
    varprotected: string
  ) {
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

  chay(x: string) {
    // Demo function
    return "a";
  }

  chem(x: string): void {
    // Demo function
    console.log("Hàm chém");
  }

  hienthiten(): void {
    console.log(
      `===> Parent... Name: ${this.ten_nhan_vat}, Trangthai: ${this.trangthai}, varprivate: ${this.varPrivate}, varprotected: ${this.varprotected}`
    );
  }
}
