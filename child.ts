import { nhan_vat_game } from "./parent";
import { state } from "./common";

export class cung_thu extends nhan_vat_game {
  donsatthu: string = "aaa";

  constructor(
    ten_nhan_vat: string,
    trangthai: state,
    donsatthu: string,
    vPrivate: string,
    vProtected: string
  ) {
    super(ten_nhan_vat, trangthai, vPrivate, vProtected);
    this.donsatthu = donsatthu;
  }

  hienthiten(): void {
    super.hienthiten();
    console.log(
      `===> Child.... Name: ${this.ten_nhan_vat}, Donsatthu: ${this.donsatthu} ===> Child`
    );
  }
}
