//mendeklarasikan variabel const(tidak bisa dirubah variabel)/let(bisa dirubah variabel)

//yang dipakai sekarang variabel const
//const bahasa ="PHP";

//yang dipakai sekarang variabel let
//let bahasa ="php";

//bahasa = "javascript";


//untuk mencetak ke layar
//console.log("Saya sedang belajar"+bahasa);
//console.log(`saya sedang belajar ${bahasa}`);

let sisaPercobaan = 3;
while (sisaPercobaan > 0) {
  console.log(`Login gagal, sisa ${sisaPercobaan} kali`);
  sisaPercobaan--;
}

const daftarNilai = [3.45, 3.82, 3.2, 3.61, 2.95];
let total = 0;
for (const nilai of daftarNilai) {
  total = total + nilai;
}
console.log(`Total IPK: ${total}`); // Total IPK: 17.03

