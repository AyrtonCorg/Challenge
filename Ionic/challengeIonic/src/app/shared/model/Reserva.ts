export class Reserva{
    nights_count: number;
    nights_cost: number;
    discount: number;
    cleaning_fee: number;
    total: number;

    constructor(){
        this.cleaning_fee = Math.trunc(Math.random()*10);
        this.discount = Math.trunc(Math.random()*10);
        this.nights_cost = Math.trunc(Math.random()*100);
        this.nights_count = Math.trunc(Math.random()*10);
        this.total = Math.trunc(Math.random()*10);
    }

}