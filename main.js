// // /**
// //  * toan tu
// //  * == phep ss bằng so sánh giá trị
// //  */
// // const num1 = 5;
// // const num2 = "5";
// // console.log(num1 == num2);

// // /**
// //  * === phep ss bằng so sánh giá trị và kiểu dữ liệu
// //  */
// // const num3 = 2; //number
// // const num4 = "2"; //spring
// // console.log(num3 === num4);

// // /**
// //  * so sánh >
// //  */
// // const num5 = 8;
// // const num6 = 9;
// // console.log(num5 > num6);

// // /**
// //  *  so sánh >=
// //  */
// // const num7 = 7;
// // const num8 = 1;
// // console.log(num7 >= num8);

// // /**
// //  * so sánh <
// //  */
// // const num9 = 10;
// // const num10 = 11;
// // console.log(num9 < num10);

// // /**
// //  * so sánh !=
// //  */
// // const num11 = 13;
// // const num12 = 13;
// // console.log(num11 != num12);

// // /**
// //  * !== so sánh về gtri và kiểu dữ liệu
// //  */
// // const num13 = 13;
// // const num14 = "13";
// // console.log(num13 !== num14);

// // /**
// //  * phép ! phủ định
// //  */
// // const num15 = false;
// // console.log(!num15);

// // /**
// //  *! ""==> true  và ngược lại
// //  */
// // let address = "dang"; // ! ""==> true ngược lại
// // console.log(!address);

// // /**
// //  *  null flase ==> true
// //  * undefined flase = true
// //  * gia tri rỗng flase = true
// //  */
// // let age; // ! kh có gtri ==> flase
// // console.log(!age);

// // /**
// //  * biểu thức
// //  *&& và
// //  */

// // const bt1 = 5 > 2;
// // const bt2 = 1 > 2;
// // const bt = 9 != 5;
// // console.log(bt1 && bt2 && bt3); //true && true= true
// // /**
// //  * || hoặc
// //  */
// // const bt4 = 1 > 3;
// // const bt5 = 5 > 1;
// // const bt6 = 9 < 5;
// // console.log(bt4 || bt5 || (bt9 && bt1));

// // /**
// //  * câu dk ==> IF
// //  */

// // if (bt5) {
// //   console.log("dk dung");
// // }

// // /**
// //  * chuyen so am sang so duong
// //  * tạo input lấy number từ use
// //  * tạo button click vô
// //  */

// const chuyenSo = document.getElementById("chuyenSo");
// chuyenSo.onclick = function () {
//   let nhapSo = document.getElementById("nhapSo").value * 1;

//   if (nhapSo < 0) {
//     //chuyển số âm sang số dương
//     nhapSo = -nhapSo;
//   }
//   let result =
//     "<div class='alert alert-success'>ket qua la  " + nhapSo + "</div>";
//   console.log(result);

//   const txtChuyenSo = document.getElementById("txtChuyenSo");
//   txtChuyenSo.innerHTML = result;
// };

// const thanhToan = document.getElementById("thanhToan");
// thanhToan.onclick = function () {
//   let tienMuon = document.getElementById("tienMuon").value * 1;
//   let tienTra = document.getElementById("tienTra").value * 1;
//   const phantram = 1.5;
//   let tienLai = 0;
//   const tienNo = tienMuon - tienTra;

//   if (tienNo > 0) {
//     tienLai = (tienNo * phantram) / 100;
//   }
//   let result = "so tien lai la  " + tienLai;
//   console.log(result);

//   const inFo = document.getElementById("inFo");
//   inFo.innerHTML = result;
// };
// if (4 != 4) {
//   console.log("hd1");
// } else {
//   console.log("hd2");
// }

// /**
//  * tìm số lớn nhất trong 2 số
//  */

// const nhapHaiSo = document.getElementById("nhapHaiSo");
// nhapHaiSo.onclick = function () {
//   const so1 = document.getElementById("so1").value * 1;
//   const so2 = document.getElementById("so2").value * 1;
//   let SLN;
//   if (so1 > so2) {
//     SLN = so1;
//   } else {
//     SLN = so2;
//   }
//   let result =
//     "<div class=' alert alert-success '>so lon nhat la " + SLN + "</div>";

//   const inFoNhapSo = document.getElementById("inFoNhapSo");
//   inFoNhapSo.innerHTML = result;
// };

// /**
//  * tim so chan le
//  */

// const nhapHaiSoNguyen = document.getElementById("nhapHaiSoNguyen");
// nhapHaiSoNguyen.onclick = function () {
//   const soNguyen = document.getElementById("soNguyen").value * 1;
//   let content = "";
//   if (soNguyen % 2 == 0) {
//     content = "so " + soNguyen + " la so chan";
//   } else {
//     content = "so " + soNguyen + " la so le";
//   }

//   let result = "<div class='alert alert-success'> " + content + "</div>";

//   const inFoNhapSoNguyen = document.getElementById("inFoNhapSoNguyen");
//   inFoNhapSoNguyen.innerHTML = result;
// };

// /**
//  * tinh luong nhan vien theo tuan
//  * cho phep use nhap vao so gio lam viec
//  * luong/1h 100.000
//  * lam viec hon 40h luong nhan1.5
//  */

// const tinhLuong = document.getElementById("tinhLuong");
// tinhLuong.onclick = function () {
//   const soGioLam = document.getElementById("soGioLam").value * 1;
//   let tongLuong = 0;
//   const luong = 100000;
//   const nhan = 1.5;
//   if (soGioLam > 40) {
//     tongLuong = (soGioLam - 40) * nhan * luong + 40 * luong;
//   } else {
//     tongLuong = soGioLam * luong;
//   }

//   let result =
//     " <div class='alert alert-success'> xep loai la " + tongLuong + "</div>";

//   const inFoLuong = document.getElementById("inFoLuong");
//   inFoLuong.innerHTML = result;
// };

// const numberProvide = 231;
// if (numberProvide === 1) {
//   console.log("la so 1");
// } else if (numberProvide === 2) {
//   console.log("la so 2");
// } else if (numberProvide === 3) {
//   console.log("la so 3");
// } else {
//   console.log("kh biet doc");
// }

// /**
//  * xep loai sinh vien
//  */

// const btnXepLoai = document.getElementById("btnXepLoai");
// btnXepLoai.onclick = function () {
//   const diemToan = document.getElementById("diemToan").value * 1;
//   const diemLi = document.getElementById("diemLi").value * 1;
//   const diemHoa = document.getElementById("diemHoa").value * 1;
//   const diemTB = (diemToan + diemLi + diemHoa) / 3;
//   let xepLoai = "";
//   if (diemTB >= 8 && diemTB <= 10) {
//     xepLoai = " gioi";
//   } else if (7 <= diemTB && diemTB < 8) {
//     xepLoai = " kha";
//   } else if (5 <= diemTB && diemTB < 7) {
//     xepLoai = " trung binh";
//   } else {
//     xepLoai = "kh hop le";
//     alert("kh hop le");
//   }
//   let result =
//     " <div class='alert alert-success'> dtb la " +
//     diemTB +
//     " XepLoai " +
//     xepLoai +
//     "</div>";

//   const inFoXepLoai = document.getElementById("inFoXepLoai");
//   inFoXepLoai.innerHTML = result;
// };

// /**
//  *shop
//  don gia 10.000
//  dk1: sl<50
//  sl*don gia

//   dk2 50<=sl <=100 8%
//   (sl-49*don gia)*0.08  +sl(49)*don gia

//   dk3 sl>100 12%
//   49*don gia + 51*don gia *0.08+  (sl-100)*0.12
//  */

// const btnTinhTong = document.getElementById("btnTinhTong");
// btnTinhTong.onclick = function () {
//   const tenHang = document.getElementById("tenHang").value;
//   const soLuong = document.getElementById("soLuong").value * 1;
//   const donGia = document.getElementById("donGia").value * 1;
//   let tongLuong = 0;
//   if (0 < soLuong && soLuong < 50) {
//     tongLuong = soLuong * donGia;
//   } else if (50 <= soLuong && soLuong <= 100) {
//     tongLuong = 49 * donGia + ((soLuong - 49) * donGia * (100 - 8)) / 100;
//   } else if (soLuong > 100) {
//     tongLuong =
//       49 * donGia +
//       ((soLuong - 49) * donGia * (100 - 8)) / 100 +
//       ((soLuong - 100) * (100 - 12)) / 100;
//   } else {
//     alert("số lượng âm kh hợp lệ");
//   }
//   let result =
//     " <div class='alert alert-success'> ten hang " +
//     tenHang +
//     " tổng là: " +
//     tongLuong +
//     "</div>";

//   const inFoTinhTong = document.getElementById("inFoTinhTong");
//   inFoTinhTong.innerHTML = result;
// };

function whatWeDo() {
  const toDay = 8;
  // if (toDay === 7) {
  //   console.log("di hoc");
  // } else {
  //   console.log("di choi");
  // }
  //toan tu 3 ngoi
  // dk ? log dung: log sai;

  toDay === 7 || toDay === 8 ? console.log("di hoc") : console.log("di choi");
  //true || flase ==> true
  //true && flase ==> flase
}

whatWeDo();

function demoSwitchCase() {
  const so = 1;

  switch (so) {
    case 1:
      console.log("day la so 1 ");
      break; // dừng hành động

    case 2:
      console.log("day la so 2 ");
      break;

    case 3:
      console.log("day la so 3 ");
      break;

    case "A":
      console.log("day la chua a");
      break;

    default:
      console.log(" kh biet doc");
      break;
  }
}

demoSwitchCase();
