// export {};
// /************************
//  * tên_biến: kiểu_dử_liệu
//  */
// let chu: string;
// chu = "100";

// let so: number = 10;
// so = 100;

// let blean: boolean = true;
// let arrayNumber: number[] = [2, 3, 4, 5];
// let arrayString: string[] = ["a", "b", "c", "d"];
// for (let i = 0; i < arrayString.length; i++) {
//   console.log(arrayString[i]);
// }

// /** ENUM */
// enum trangthai {
//   chuadangky = 0,
//   dangdangky = 5,
//   dadangky = 10,
//   hoanthanh = 15,
// }
// console.log(trangthai.dadangky);

// /** TUPLE */
// let tuple1: [string, number, string, string];
// tuple1 = ["a", 1, "b", "c"];
// console.log(tuple1[2]);
// // Không cần define kiểu của các phần tử trước khi gán nửa ??? :)
// let tuple2 = ["hh", 5, "yyy"];
// console.log(tuple2[2]);

// /** ANY */
// let varAny: any;
// varAny = {
//   dongho: {
//     giatien: 200,
//     mausac: "den",
//     cannang: 50,
//   },
//   name: "G-Shock",
// };
// console.log(varAny);

// let varAny2 = ["a", 11, "b"];
// console.log(varAny2);

// /** TYPE RETURN FUNCTION */
// function speaking(): void {
//   console.log("Ham speaking() tra ve kieu Void");
// }

// function tinhtoan(): number {
//   console.log("Ham tinhtoan() => Number");
//   return 5;
// }

// speaking();
// console.log(tinhtoan() + 1);

// /** ÉP KIỂU - chỉ apply cho kiểu Any */
// let varAny3: any;
// varAny3 = "444";
// console.log((<string>varAny3).length); //// Cách: <kiểu_data>
// console.log((varAny3 as string).length); // Cách: as kiểu_data
// console.log(varAny3.length); //? Đéo hiểu! Auto-boxing!???
// // Cộng không được, mà nhân thì được???
// let varString1 = "10";
// console.log(varString1 + 60);
// //console.log(varString1 * 60); Không thể nhân như Javascript thuần
// console.log(parseInt(varString1) + 60); // Ép kiểu nguyên thủy qua Hàm
// console.log(parseInt(varString1) * 60); // Ép kiểu nguyên thủy qua Hàm
// // console.log(<number>varString1 + 60); //Sai! Không thể ép kiểu nguyên thủy vs nhau
// var x = "32";
// var y: number = +x;
// console.log({ x, y });

// /** FUNCTION */
// function traveString(): string {
//   return "a";
// }

// function traveNumber(): number {
//   return 3;
// }

// function traveArray(): string[] {
//   return ["a", "b"];
// }

// function traveObject(): any {
//   //any :))) => All => Object too
//   return ["a", "b"];
// }
// function traveObject2(): any {
//   return { ten: "Demo2", age: 25 };
// }

// /** FUNCTION CÓ THAM SO */
// function traveNumber2(x: number, y: number): number {
//   return x + y;
// }
// let g = 10;
// console.log(g);
// console.log(traveNumber2(g, 6));
// console.log(g);
// console.log("=> Function k làm thay đổi giá trị thực của biến truyền vào");

// /** Anonymous function */
// let varAnoFunc = function (x: number, y: string): string {
//   //Function name null
//   return `Hello ${y}, Năm nay bạn ${x} tuổi!?`;
// };
// console.log(varAnoFunc(25, "Tân"));

// let varAnoFunc2: (x: number, y: string) => string = function (x, y) {
//   return `Hello ${y}, Năm nay bạn ${x} tuổi!?`;
//   // thiết kế theo Interface:
//   // Vế trái: khai báo tham số + return type vế trái
//   // dấu =
//   // vế phải: define Function
// };
// console.log(varAnoFunc2(25, "Tân"));

// let varAnoFunc3 = (x: string): number => {
//   return parseInt(x) * 2;
//   // Arrow Function
//   // kèm Define kiểu dữ liệu tham số + kiểu return
// };
// console.log(varAnoFunc3("9"));

// console.clear();
// /** DEMO */
// import { nhan_vat_game } from "./parent";
// import { state } from "./common";

// let nv1 = new nhan_vat_game("name1", state.Create, "vPri1", "vPro1");
// console.log(`Are you human! ${nhan_vat_game.human}`); //Static
// nv1.hienthiten();

// /** ACCEES MODIFIER  */

// /** EXTENDS */
// import { cung_thu } from "./child";
// let nv2 = new cung_thu("Name1", state.Finish, "Donsatthu1", "vPri2", "vPro2");
// nv2.hienthiten();

// /** GETTER/SETTER */
// /** các hàm get/set là Properties => Không cần thêm dấu () khi gọi hàm setter/getter */
// // console.log(nv2._varPrivate); // Var Private có hàm Getter/Setter qua cho hàm con

// /** ABTRACT CLASS */
// import { Anroid } from "./abtractDemoImp";
// let anroid = new Anroid();
// console.log(anroid.goidienthoai());
// anroid.guitinnhan();

// /** GENERIC */
// function demoGeneric<T>(x: T): string {
//   return "x";
// }

// function demoGeneric2<T>(x: T[]): void {
//   console.log(x);
// }
// // console.log(demoGeneric<string>(5));
// console.log(demoGeneric<string>("5"));
// console.log(demoGeneric<string>("5dsad"));

// demoGeneric2<string>(["a", "b", "c"]);

// /** INTERFACE */
// import { nguoi } from "./interfaceDemo";
// function xemthongtin_Nguoi(x: nguoi): void {
//   console.log(`Xin chào ${x.ten}, bạn đã ${x.tuoi} tuổi!! ${x.mota}`);
// }
// xemthongtin_Nguoi({ ten: "Tên_Tân", tuoi: 25, mota: "có thể bỏ qua" });
// xemthongtin_Nguoi({ ten: "Tên_Tân", tuoi: 25 });

// import { nguoiImp } from "./interfaceDemo2Imp";
// let varNguoi = new nguoiImp("thuocTinhThêm", "Ten_nguoiImp", 25, "Mô tả - Imp");
// console.log(varNguoi);
// varNguoi.xemthongtin();

/** NAME SPACE - EXPORT */
module tempModule {
  export class String {
    ham1_String(): void {
      console.log("===> ham1_String");
    }
    ham2_String(): void {
      console.log("===> ham2_String");
    }
  }

  export class Number {
    ham1_Number(): void {
      console.log("===> ham1_Number");
    }
    ham2_Number(): void {
      console.log("===> ham2_Number");
    }
  }
}

let varNameSpace1 = new tempModule.String.prototype.ham1_String(); // ??? sao nó call như JS thuần
let varNameSpace2 = new tempModule.String();
console.log(varNameSpace1);
console.log("===========================================");
console.log(varNameSpace2);
console.log("===========================================");
varNameSpace2.ham2_String();
