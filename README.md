# FSWeb-s1d4-yardim-tutari-hesaplama
Gün Projesi: Yardım Tutarı Hesaplama

Proje Tanımı
MediaTV'nin canlı yayın yardım kampanyası için, bağışçı isimlerindeki belirli harfleri sayarak bağış tutarını hesaplayan bir modül geliştireceğiz. Ahmet Bey, bağışçıların isimlerinde kendi adındaki harflerden (a, h, m, e, t) kaç tane geçiyorsa, bunun 1000 katı kadar TL bağışta bulunacak.

Teknik Gereksinimler
Bunu hesaplayacak fonksiyonun adı tutarHesapla olsun.
Bu fonksiyon yardım yapanların isimlerini içerin bir array'i parametre olarak alsın.
Çıktı olarak hesaplanan bağış tutarını dönecek
Büyük/küçük harf duyarlılığına dikkat edilmeli
Gelen listedeki isimlerde Ahmet' ismindeki harflerden toplam kaç tane olduğunu hesaplayıp, 1000 katını geri dönsün.

Örnek Kullanım
[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

İpuçları
İsimlerdeki harfler bazen büyük, bazen küçük harflerle yazılabilir. Bu yüzden, karşılaştırma yaparken tüm girdileri küçük harfe (lowercase) çevirmen çok önemli. Örneğin, "Aysel Hataylı" ismindeki "A" harfini çevirmediğinde kodun bunu kaçırabilir. Tüm karşılaştırmalar küçük harfe çevrilmiş şekilde yapılmalıdır.
JavaScript case-sensitive, yani büyük küçük harf duyarlı. "Ahmet" ile "ahmet" birbirine eşit değil. string'lerdeki toLowerCase() metodu ile isimleri küçük harf yapabilirsin.
İç içe 3 döngü yapabilirsin.
Argüman olarak gelen listedeki her bir isim için döngü yapabilirsin.
Ahmet'in harfleri belli: ["a","h","m","e","t"]. Önceki döngü içinde bu harfler için ayrı bir döngü yapabilirsin.
Her harfi isimdeki her bir karakter ile karşılaştırmak için önceki döngü içinde bir tane daha yapabilirsin.
Peki, saydığın harfleri nerede toplayacaksın? Bir değişkene ihtiyaç var. Döngü içinde değişkeni tamamlarsan her döngüde sıfırlanır!
