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
dogruCevapSayisi = 0;
sayac = 60;
   function oyunaBasla() 
    document.querySelector(".basla").remove();
    document.querySelector(".cevapla").addEventListener("click",function(){
      let girilenDeger = document.querySelector(".girilenDeger").value; 
      if(girilenDeger==totalSayiNumber){ 
        document.querySelector(".cevapKontrol").innerHTML="DOĞRU BİLDİNİZ!"
        sayac+=2; 
        dogruCevapSayisi++; 
        soruUret(); 
      }
      else{
        document.querySelector(".cevapKontrol").innerHTML="HATALI CEVAP!"
        sayac-=5; 
      }
    })