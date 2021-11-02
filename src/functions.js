function addToCart(productName, quantity) { //(productName = "Elma") default değer alabilir
    console.log("Sepete eklendi: " + productName + " Adet: " + quantity)
}

addToCart()
addToCart("Yumurta", 10) 
addToCart(15)//fonksiyonda default değer varsa bile onu burada vereceğimiz değer ile ezebiliriz.
            //default değer varsa; function addToCart(quantity, productName="Elma") yazarak
            //yerlerini değiştiririz ve ilk gönderdiğimiz değerin başa geçmesini sağlarız

let sayHello = () => { //değişkene sen bir fonksiyonsun diyoruz
    console.log("Hello World!") //ve seni çağıran olursa çalıştıracağın kod burada diyoruz
}

sayHello()

let sayHello2 = function() {
    console.log("Hello World 2!")
}

sayHello2()

//---------------------- 1. MOLA ----------------------

let product1 = {productName:"Elma", quantity:10, unitPrice:15} //obje tanimi süslü parantez
                //product burada oluşturuyoruz.
function addToCart2(product) {
    console.log("Ürün: " + product.productName + " Adet: " + product.quantity + " Fiyat: " + product.unitPrice)
}

addToCart2(product1)

////////////////////////////////////////////////////
let product2 = {productName:"Elma", quantity:10, unitPrice:15}
let product3 = {productName:"Elma", quantity:10, unitPrice:15}
product2 = product3 //product2'nin Referans numarası artik product3 (stack ve heap) (yani aynı şeyi tutuyorlar, ikiside product 3'ü)
product2.productName = "Karpuz" //burada product2 artik zaten product3 e gittiği için yani 36. satirda product 2'nin 101 nolu referans no'su artık 102 olmuştur. 102'nin productName'i gibi okunabilir.
console.log(product3.productName) //product3 yani 102 referans nolu yeri istiyoruz ve sonuç karpuz dönüyor çünkü 37. satirda 102 referans numarası ile değiştirdik (p2 ile aynı şeyi tutuyorlardi)

//Sayisal veriler değer tiptir.
//değişkenlerimizi ikiye ayırıyoruz, verinin türüne göre
//eğer veri sayi1 örneği gibi sayisalsa değer
//veri yukaridaki product örneği gibi obje/array ise referans tip

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2 //sayi1'in değeri eşittir sayi2'nin değeri yani sayi1'in değeri artik 20
sayi2 = 100 //sayi2'nin değeri 100
console.log(sayi1) //ama sayi1'i soruyoruz ve o zaten 20 olarak atanmıştı: cevap:20


function addToCart3(x) {  //addToCart3(x) ile aşağıdaki addToCart3(products)'ın parantezler içindeki değerlerin isimsel bir ilişkisi yok.
    console.log(x)
}

let products =  [ 
    {productName:"Elma", quantity:10, unitPrice:15},       //array içinde
    {productName:"Armut", quantity:10, unitPrice:15},       //3 tane obje
    {productName:"Karpuz", quantity:10, unitPrice:15}
]

addToCart3(products)

//---------------------- 2. MOLA ----------------------
//rest
function add(...numbers) { //başka bir değer atanmasi gerektiğinde en başa (bisey, ...numbers)
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}

add(5,7)
add(5,7,40,108)

//spread - ayrıştırmak (örn. api'den veriler array olarak gelebilir bunu çozmeliyiz)
let numbers = [40,34,1345,23,24] //api'den array gelirse ayirmamiz gerekli
console.log(Math.max(...numbers))

//Destructure (elimizdeki array'in değerlerini değişkenlere atamak istediğimiz zaman.)
//let regions = ["Ic Anadolu", "Marmara", "Karadeniz"]
//let [region1, region2, region3]
//console.log(region1)...

let [region1, region2, region3, [icAnadoluSehirleri]] = [
    {name: "Ic Anadolu", population : "20M"},
    {name: "Marmara", population : "30M"},
    {name: "Karadeniz", population : "10M"},
    [
        ["Ankara", "Konya"],
        ["Istanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]

console.log(region1)
console.log(region2)
console.log(region3)
console.log(region3.population) //spesific resultta alabiliriz.

//console.log(icAnadoluSehirleri[0]) böyle de destruct yapabilirim.
console.log(icAnadoluSehirleri)

//objelerinde elemanlarini değişkenlere atamak istiyoruz.
let newProductName, newQuantity, newUnitPrice
({productName:newProductName, quantity:newQuantity, unitPrice:newUnitPrice} = {productName:"Elma", quantity:10, unitPrice:15})
//productName'i newProductName'a, quantity'i newQuantity'e değişkenine ata diyoruz. vs vs.

console.log(newProductName)
console.log(newQuantity)
console.log(newUnitPrice)