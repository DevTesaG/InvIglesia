export class Product {
    key?: string;
    name?: string;
    stock?: number;
    price?:  number;
    img_url?: string;
    description?: string | null;
    provider?:string | null;
    img_file?: File;
    
    constructor(file?: File){
        if(file){
            this.img_file = file;
        }
    }
}
