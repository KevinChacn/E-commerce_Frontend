export class Product {

    constructor(_id = '', name = '', category = '', price = 0) {
        this._id = _id;
        this.name = name;
        this.category = category;
        this.price = price;
    }

    _id: string;
    name: string;
    category: string;
    price: number;
}