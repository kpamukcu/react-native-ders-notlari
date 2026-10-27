/* 

Ders 6 - map, filter, find, some, every ve reduce

-   .map()      -> Her elemanı dönüştürmek için kullanılır. Yani dizideki her eleman üzerinde işlem yapar ve sonuçlardan yeni bir dizi oluşturur.
-   .filter()   -> Koşula uyan elemanları seçmek. Belirlenen koşulu sağlayan elemanları yeni bir diziye alır.
-   .find()     -> İlk eşleşeni bulmak. Bir dizi döndürmez koşulu sağlayan ilk elemanı döndürür.

*/

const siparisler = [
    { id: 1, urun: "Laptop", fiyat: 25000, durum: "Tamamlandı" },
    { id: 2, urun: "Mouse", fiyat: 750, durum: "Bekliyor" },
    { id: 3, urun: "Klavye", fiyat: 1500, durum: "Tamamlandı" },
    { id: 4, urun: "Monitör", fiyat: 8000, durum: "İptal" },
    { id: 5, urun: "Kulaklık", fiyat: 2200, durum: "Bekliyor" }
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


// Örnek 6 filter -> JSON data'dan kategorisi beauty olan ürünlerin isimlerini yazdır.

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



