class Tyre {
    constructor(merk, qty){
        this.merk = merk;
        this.qty = qty;
    }
};

class Car {
    constructor(kursi, pintu,tyre, garansi, tahun, tipe) {
        this.kursi = kursi,
        this.pintu = pintu,
        this.tyre = tyre,
        this.garansi = garansi,
        this.tahun = tahun,
        this.tipe = tipe
        
    }
    expireGaransi(currentYear) {
        if (currentYear - this.garansi <= this.tahun) {
            console.log('Garansi masih berlaku');
        } else {
            console.log('Garansi sudah habis');
        }
    }
};

class Xpander extends Car {
    constructor(tahun) {
        super(7, 5, new Tyre('Bridgestone', 4), 3, tahun, 'Xpander');
    }
}
class Mirage extends Car {
    constructor(tahun) {
        super(5, 5, new Tyre('Dunlop', 4), 1, tahun, 'Mirage');
    }
}

class CarFactory {
    constructor(){
        this.XpanderList = [];
        this.MirageList = [];
    }

    XpanderProduced(tahun){
        let totalXpander = CarFactory.getRandomInt();
        for(let i = 0; i < totalXpander; i++){
            this.XpanderList.push(new Xpander(tahun))
        }
    }

    MirageProduced(tahun){
        let totalMirage = CarFactory.getRandomInt();
        for(let i = 0; i < totalMirage; i++){
            this.MirageList.push(new Mirage(tahun))
        }
    }

    productionResult(){
        console.log(`Xpander telah diproduksi sebanyak ${this.XpanderList.length}, yakni :`);
        for (let i = 0; i < this.XpanderList.length; i++){
            console.log('Xpander', this.XpanderList[i]);
        }  
        console.log(`Mirage telah diproduksi sebanyak ${this.MirageList.length}, yakni :`);
        for (let i = 0; i < this.MirageList.length; i++){
            console.log('Mirage', this.MirageList[i]);
        } 
    }

    simulasi(tahun){
        console.log('Hasil simulasi untuk Xpander, yakni :');
        for (let i = 0; i < this.XpanderList.length; i++){
            console.log(this.XpanderList[i]);
            this.XpanderList[i].expireGaransi(tahun);
        }

        console.log('Hasil simulasi untuk Mirage, yakni :');
        for (let i = 0; i < this.MirageList.length; i++){
            console.log(this.MirageList[i]);
            this.MirageList[i].expireGaransi(tahun);
        }
    }

    static getRandomInt(){
        let min = 1;
        let max = 5;
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

let Mitsubishi = new CarFactory();
Mitsubishi.XpanderProduced(2016);
//Mitsubishi.MirageProduced(2014);
Mitsubishi.productionResult()
Mitsubishi.simulasi(2015)



