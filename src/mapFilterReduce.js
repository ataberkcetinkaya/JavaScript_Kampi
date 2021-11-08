let cart = [
    {id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000},
    {id: 2, productName: "Bardak", quantity: 4, unitPrice: 30},
    {id: 3, productName: "Kalem", quantity: 2, unitPrice: 20},
    {id: 4, productName: "Şarj Cihazi", quantity: 8, unitPrice: 100},
    {id: 5, productName: "Kitap", quantity: 11, unitPrice: 40},
    {id: 6, productName: "Kutu", quantity: 3, unitPrice: 150}
]

//cart.map(product => console.log(product.productName)) //Sepetteki ürünleri gezerken verdiğimiz takma isim "product"
                                                    // "=>" sonra gelecek bölüm ise her bir ürünü gezerken ne yapacağımızı belirtir.
                                                    //"console.log(product.productName)" 

console.log("<ul>")
cart.map(product => { //listeli eleman
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>") 
})
console.log("</ul>")

//filtering -- elimizdeki array'i filtreler, yeni array çıkartır.
let quantityOver2 = cart.filter(product => product.quantity > 2) 
                                //her bir ürün için sepeti filtrele, quantity'si 2'den büyükse yeni array'e at ve bana göster
                                //'and' operatörü ile başka sorgularda yazabiliriz devamina
console.log(quantityOver2)

//reduce                //acc: accumulator               //toplamaya sıfırdan başlayacak
let total = cart.reduce((acc, product) => acc + product.unitPrice, 0) //toplamlarını hesaplatacağımız için, hesaplarken başlangıç acc olur.
                                    //burada ayrıca logic kurabiliriz
                                    //acc + product.unitPrice * product.quantity, 0) gibi...

console.log(total)

//reference type
function addToCart(sepet) {
    sepet.push({id: 7, productName: "Metre", quantity: 12, unitPrice: 40})
}

addToCart(cart)
console.log(cart)

//value type
let sayi = 10

function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)
console.log(sayi)

//---------------------- 1. MOLA ----------------------