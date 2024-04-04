function sayHi(user) {
  console.log("hello " + user);
}
sayHi("dang");
sayHi("hung");

function addTwoNumber(a, b) {
  const total = a + b;
  return total;
}
const sum = addTwoNumber(5, 10);
console.log(sum * 2);

/////////////////////////////////////

// tính điểm trung bình
function tinhDTB(toan, li, hoa) {
  const dtb = (toan + li + hoa) / 3;
  return dtb;
}

// hàm xếp loại
function xepLoai(dtb) {
  let loai = "";
  if (dtb >= 8 && dtb <= 10) {
    loai = " gioi";
  } else if (7 <= dtb && dtb < 8) {
    loai = " kha";
  } else if (5 <= dtb && dtb < 7) {
    loai = " trung binh";
  }
  return loai;
}
// hàm nút button
function getEle(id) {
  return document.getElementById(id);
}
const btnXepLoai = getEle("btnXepLoai");
btnXepLoai.onclick = function () {
  const diemToan = getEle("diemToan").value * 1;
  const diemLi = getEle("diemLi").value * 1;
  const diemHoa = getEle("diemHoa").value * 1;

  const dtb = tinhDTB(diemToan, diemLi, diemHoa);
  console.log(dtb);
  const loai = xepLoai(dtb);

  let result =
    "<div class=' alert alert-success'> diem trung bình la " +
    dtb +
    "xep loai" +
    loai +
    "</div>";

  const inFoXepLoai = getEle("inFoXepLoai");
  inFoXepLoai.innerHTML = result;
};

//luong nhan vien theo gio
getEle("tinhLuong").onclick = function () {
  const soGioLam = document.getElementById("soGioLam").value * 1;
  let tongLuong = 0;
  const luong = 100000;
  const nhan = 1.5;

  if (soGioLam > 40) {
    tongLuong = tinhLuongHon40Gio(luong, nhan, soGioLam);
  } else {
    tongLuong = tinhLuongNhoHon40Gio(luong, soGioLam);
  }

  let result =
    "<div class= 'alert alert-success'tong tien la >" + tongLuong + "<div>";

  const inFoLuong = getEle("inFoLuong");
  inFoLuong.innerHTML = result;
};

function tinhLuongHon40Gio(luong, heSo, soGioLam) {
  const tongLuong = luong * 40 + (soGioLam - 40) * heSo * luong;
  return tongLuong;
}

function tinhLuongNhoHon40Gio(luong, soGioLam) {
  const tongLuong = luong * soGioLam;
  return tongLuong;
}
// bài tập về nhà
/**
 * bài tập shop bán hàng
 */

getEle("btnTinhTong").onclick = function () {
  const tenHang = document.getElementById("tenHang").value;
  const soLuong = document.getElementById("soLuong").value * 1;
  const donGia = document.getElementById("donGia").value * 1;
  let tongLuong = 0;
  if (0 < soLuong && soLuong < 50) {
    tongLuong = NhoHon50(donGia, soLuong);
  } else if (50 <= soLuong && soLuong <= 100) {
    tongLuong = Tu50Den100(donGia, soLuong);
  } else if (soLuong > 100) {
    tongLuong = Tu100(donGia, soLuong);
  } else {
    tongLuong = "so am kh hop le";
    alert("so am kh hop le");
  }

  let result =
    "<div class= 'alert alert-success'ten hang la >" +
    tenHang +
    "<br/>" +
    "tong la " +
    tongLuong +
    "<div>";

  const inFoTinhTong = document.getElementById("inFoTinhTong");
  inFoTinhTong.innerHTML = result;
};

function NhoHon50(donGia, soLuong) {
  const tongTien = donGia * soLuong;
  return tongTien;
}
function Tu50Den100(donGia, soLuong) {
  const tongTien = 49 * donGia + ((soLuong - 49) * donGia * (100 - 8)) / 100;
  return tongTien;
}
function Tu100(donGia, soLuong) {
  const tongTien =
    49 * donGia +
    (51 * donGia * (100 - 8)) / 100 +
    ((soLuong - 100) * (100 - 12)) / 100;
  return tongTien;
}

/**
 * tính tiền nợ, lãi
 */

getEle("thanhToan").onclick = function () {
  const tienMuon = document.getElementById("tienMuon").value * 1;
  const tienTra = document.getElementById("tienTra").value * 1;
  let tienLai = 0;
  const phanTram = 1.5;
  const tienNo = tienMuon - tienTra;
  if (tienNo > 0) {
    tienLai = laiLonHon0(tienNo, phanTram);
  }
  let result = "<div class= 'alert alert-success'so tien lai la >" + tienLai;
  const inFoTienLai = document.getElementById("inFoTienLai");
  inFoTienLai.innerHTML = result;
};
function laiLonHon0(tienNo, phanTram) {
  const tongTien = (tienNo * phanTram) / 100;
  return tongTien;
}
