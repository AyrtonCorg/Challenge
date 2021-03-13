export class Inmueble {
    id: number;
    name: string;
    slug: string;
    description: string;
    adults: number;
    children: number;
    is_pets_allowed: boolean;
    base_price: number;
    cleaning_fee: number;
    image_url: string;

    constructor(id: number){
        this.id = id;
        this.name = "Casa-"+id;
        this.description = "Prueba-"+id;
        this.adults = 3;        
        this.children = 2;
        this.is_pets_allowed = true;
        this.base_price = Math.round(Math.random()*100);        
        this.cleaning_fee =  Math.round(Math.random()*100);
        this.image_url = "http://dummyimage.com/50x50.jpg/ff4444/ffffff";
    }
}
