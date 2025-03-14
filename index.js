function tutarHesapla(isimler) {
  const ahmetHarfler = ['A', 'H', 'M', 'E', 'T'];
  let toplamHarfSayisi = 0;

  for (let i = 0; i < isimler.length; i++) {
    const isimBüyük = isimler[i].toUpperCase();

    for (let j = 0; j < isimBüyük.length; j++) {
      if (ahmetHarfler.includes(isimBüyük[j])) {
        toplamHarfSayisi++;
      }
    }
  }

  return toplamHarfSayisi * 1000;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tutarHesapla;
