function soruUret(){
    let sayilar = [];
    for(let i=0;i<2;i++){
    let sayi = Math.floor(Math.random() * 15);
    sayilar.push(sayi)
    }
    let islemler = ["+","-","*","/"];
    let rstİslem = islemler[Math.floor(Math.random() * islemler.length)]

    totalSayi = sayilar[0] + rstİslem +sayilar[1]

    totalSayiNumber = parseInt(eval(totalSayi));

    document.querySelector(".soru").innerHTML=totalSayi;
    console.log(parseInt(totalSayiNumber))
}
soruUret();