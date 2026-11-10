/* 

Ders 6 - map, filter, find, some, every ve reduce

-   .map()      -> Her elemanı dönüştürmek için kullanılır. Yani dizideki her eleman üzerinde işlem yapar ve sonuçlardan yeni bir dizi oluşturur.
-   .filter()   -> Koşula uyan elemanları seçmek. Belirlenen koşulu sağlayan elemanları yeni bir diziye alır.
-   .find()     -> İlk eşleşeni bulmak. Bir dizi döndürmez koşulu sağlayan ilk elemanı döndürür.
-   .some()     -> Dizide koşulu sağlayan en az bir eleman olup olmadığını kontrol eder. True ya da false sonucu döner.
-   .every()    -> Bütün elemanların koşulu sağlayıp sağlamadığını kontrol eder. True ya da false sonucu döner.
-   .reduce()   -> Bir dizinin elemanlarını işleyerek tek bir sonuç üretmek için kullanılır. Bu sonuç bir sayı, metin, nesne veya başka bir veri yapısı olabilir.

*/

const siparisler = [
    { id: 1, urun: "Laptop", fiyat: 25000, durum: "Tamamlandı" },
    { id: 2, urun: "Mouse", fiyat: 750, durum: "Bekliyor" },
    { id: 3, urun: "Klavye", fiyat: 1500, durum: "Tamamlandı" },
    { id: 4, urun: "Monitör", fiyat: 8000, durum: "İptal" },
    { id: 5, urun: "Kulaklık", fiyat: 2200, durum: "Bekliyor" },
    { id: 6, urun: "Kulaklık", fiyat: 1200, durum: "Tamamlandı" }
];

// Örnek 1 map() -> Siparisler datasındaki yalnızca ürün adlarını listeleme

const urunAdlari = siparisler.map(siparis => siparis.urun)
console.log(urunAdlari)


// Örnek 2 map() -> Fiyatlara %10 indirim yap
const indirimliFiyat = siparisler.map(ucret => {
    return ucret.fiyat - (ucret.fiyat * 0.10)
})

console.log(indirimliFiyat)


// Örnek 3 map()    -> Fiyatlar %20 kdv ekle

const kdvliFiyat = siparisler.map(yeniFiyat => {
    return yeniFiyat.fiyat + (yeniFiyat.fiyat * 0.20)
})

console.log(kdvliFiyat)

/* ------------------------------------------------ */

// Örnek 4 filter() ->  Durumu Tamamlandı olan siparişleri getir.

const tamamlananlar = siparisler.filter(siparis => siparis.durum === 'Tamamlandı')
console.log(tamamlananlar)

// Örnek 5 filter() -> Fiyatı 2000'den büyük olanlar
const fiyatListele = siparisler.filter(siparis => siparis.fiyat > 2000)
console.log(fiyatListele)


// Örnek 5 filter -> JSON data'dan kategorisi beauty olan ürünlerin isimlerini yazdır.

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(urunler => {
        const data = urunler.products
        const urunListesi = data.filter(urun => urun.category === 'beauty')
        for (urunAdi of urunListesi) {
            document.writeln(urunAdi.title)
        }
    })


/* ------------------------------------------------ */

// Örnek 6 find()   -> Id'ye göre siparişi ya da ürünü bul

const urunBul = siparisler.find(siparis => siparis.id === 3)
console.log(urunBul)

const urunAdiBul = siparisler.find(siparis => siparis.urun == 'Kulaklık')
console.log(urunAdiBul)

/* ------------------------------------------------ */

//Örnek 7 some()   -> 20.000₺'nin üstünde sipariş olup olmadığını kontrol et

const siparisVarmi = siparisler.some(siparis => siparis.fiyat > 20000)
console.log(siparisVarmi)

//Örnek8 some()     -> 100₺'nin altında sipariş olup olmadığını kontrol et
const siparisDurumu = siparisler.some(siparis => siparis.fiyat < 100)
console.log(siparisDurumu)

/* ------------------------------------------------ */

//Örnek 9 every()   -> Tüm siparişlerinin durumu tamamlandı mı?
const durum = siparisler.every(siparis => siparis.durum == 'Tamamlandı')
console.log(durum)

/* ------------------------------------------------ */

//Örnek10 reduce()  -> Bütün siparişlerin toplan tutarını hesapla.
/* 
toplam: Önceki adımdan biriken değer.
siparis: O anda işlenen sipariş.
0: Toplamın başlangıç değeri.
*/

const toplamSiparis = siparisler.reduce((toplam, siparis) => toplam + siparis.fiyat, 0)
console.log(toplamSiparis)


/* 

Destructuring, Spread/Rest ve Template Literals
Bu üç özellik, modern JavaScript'te daha az kodla daha okunabilir ve yönetilebilir uygulamalar yazmayı sağlar. React Native geliştirirken özellikle API'den gelen verileri kullanırken, component'lere veri gönderirken ve nesneleri güncellerken sık sık kullanılır.


1. Destructuring — Verileri parçalayarak alma : Bir diz veya nesnenin içindeki değerleri ayrı değişkenlere aktarmaya sağlar.
2. Spread - Verileri yayma. Spread operatörü ... ile yazılır. Bir dizinin veya nesnenin içindeki değerleri başka bir diziye ya da nesneye yaymamızı sağlar.

*/

// 1. Destructuring

// Obje Data Destructing
const siparis = {
    urun: 'Klavye',
    fiyat: 850,
    adet: 3,
    durumu: 'Bekliyor'
}

const { urun, fiyat, adet, durumu } = siparis
console.log(fiyat)      //console.log(siparis.fiyat) ile aynı response döner
console.log(adet)       //console.log(siparis.adet) ile aynı response döner

//Not: Özellikle react'ta props olarak veri gelirken siparis.adet yerine adet değişkeni olarak kullanmak daha pratik ve okunaklıdır.

const { urun: urunIsim, fiyat: birimFiyat } = siparis   //Değişken isimleri değiştirildi. Not: orjinal key isimleri değişmez.
console.log(urunIsim)

// Varsayılan değer atama
const { stok = 0 } = siparis        //Siparis obje datasında stok özelliği olmadığı için varsayılan değeri 0 olarak belirlemiş oldu.


// Array data destructuring
// Dizilerde değerler isimlerine göre değil, sıralarına göre alınır.

const renkler = ['Lacivert', 'Turkuaz', 'Beyaz']
const [birinci, ikinci, ucuncu] = renkler

console.log(birinci)    //Ekrana Lacivert yazar.

// Array Destructing'te bir değeri atlamak da mümkündür.
const [a, , c] = renkler    //ikinci parametre ataması yapılmadı.


/* Spread Operatörü */
// A. Dizileri Birleştirme
const elektronik = ['Laptop', 'Klavye']
const aksesuar = ['Mouse', 'Kulaklık']

const tumUrunler = [...elektronik, ...aksesuar]
console.log(tumUrunler)     // ['Laptop', 'Klavye', 'Mouse', 'Kulaklık']


// B. Diziye yeni eleman ekleme
const urunler = ['Laptop', 'Klavye']
const yeniUrunler = [...urunler, 'Mouse']
console.log(yeniUrunler)


// C. Nesneleri birleştirme ve güncelleme
const product = {
    ad: 'Klavye',
    fiyat: 850,
    stok: 10
}

const productUpdate = {
    ...product,
    fiyat: 765              //Ürünün fiyatını 765 olarak güncelledi
}

console.log(productUpdate)