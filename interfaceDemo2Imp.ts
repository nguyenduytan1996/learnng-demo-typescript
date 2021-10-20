import { nguoi2 } from "./interfaceDemo2";

export class nguoiImp implements nguoi2 {
  ten: string;
  tuoi: number;
  mota?: string;
  thuoctinh_Them: string;

  constructor(x: string, ...args: [ten: string, tuoi: number, mota?: string]) {
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

  xemthongtin(): void {
    console.log("Hàm xem thông tin Nguoi_Implement");
    //throw new Error("Method not implemented.");
  }
  ham1(): string {
    return "Ham 1 Nguoi_Implement";
    //throw new Error("Method not implemented.");
  }
}
