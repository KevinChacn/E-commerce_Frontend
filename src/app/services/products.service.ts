import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    selectedOrder: Order;
    orders: Order[];

    constructor(private http: HttpClient) {
        this.orders = [];
        this.selectedOrder = new Order();
    }

    getOrders() {
        const URL_API = 'http://localhost:3000/api/orders/getOrders';
        return this.http.get<Order[]>(URL_API);
    }

    addOrder(order: Order) {
        const URL_API = 'http://localhost:3000/api/orders/addOne';
        return this.http.post<Order>(URL_API, order);
    }

    updateOrderById(id: string, order: Order) {
        const URL_API = `http://localhost:3000/api/orders/${id}`;
        return this.http.put<Order>(URL_API, order);
    }

    deleteOrderById(id: string) {
        const URL_API = `http://localhost:3000/api/orders/${id}`;
        return this.http.delete(URL_API);
    }
}
