let bilangan = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
let hasil = "";
for (let i = 0; i < bilangan.length; i++) {
  let hasil = isFinite(bilangan[i]);
  if (hasil == true) {
    console.log("Angka", bilangan[i], "Not Infinity");
  }
}
