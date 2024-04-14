export class Order {

    constructor(_id = '', customerName = '', customerAddress = '', quantity = 0, totalPrice = 0) {
        this._id = _id;
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }

    _id: string;
    customerName: string;
    customerAddress: string;
    quantity: number;
    totalPrice: number;
}

