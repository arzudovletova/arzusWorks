class Kisi{
    constructor(ad,soyad,dogumyili){
        this.ad=ad
        this.soyad= soyad;
        this.dogumyili=dogumyili;
    }
    yashesapla(){
        let now = new Date().getFullYear();
        return now - this.dogumyili;
    }

    get ad(){

    }

    set ad(value){
        if(value.length<3){
            console.log("ad icin cok az karakter");
            return
        }
        this._ad = value;
    }
}

class Ogrenci extends Kisi{
    constructor(ad,soyad,dogumyili, okulnumarasi){
        super(ad,soyad,dogumyili);
        this.okulnumarasi= okulnumarasi
    }
}

