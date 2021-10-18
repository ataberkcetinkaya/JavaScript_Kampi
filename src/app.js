console.log("berklinux")

let dolarBugun = 9.30

let dolarDun = 9.20

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2 //const'a bir değer atandığında sabit kalır, artık değişmez
//euroDun = 11 //Hatali olacaktir

console.log(euroDun)

//array - birden fazla veri ayni yerde
let konutKredileri =  ["Konut Kredisi", "Taşıt Kredisi", "Berk Kredisi", 12, "Özel Kredi"]

console.log("<ul>")
for(let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut Kredisi</li>
    <li>Taşıt Kredisi</li>
    <li>Berk Kredisi</li>
    </ul>
*/
}

console.log(konutKredileri)