import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Warehouse } from "../models/Warehouse";

@Injectable({
    providedIn: 'root'
})
export class WarehouseDataService {
    constructor(private http: HttpClient) { }

    getWarehouses(facilityId: number) {
        return this.http.get<Warehouse[]>(`https://localhost:7079/api/warehouses/facility/${facilityId}`);
    }

    createWarehouse(warehouse: Warehouse) {
        return this.http.post(`https://localhost:7079/api/warehouses`, {
            name: warehouse.name,
            description: warehouse.description,
            facilityId: warehouse.facilityId,
        });
    }

    updateWarehouse(warehouse: Warehouse) {
        return this.http.put(`https://localhost:7079/api/warehouses`, {
            id: warehouse.id,
            name: warehouse.name,
            description: warehouse.description,
        });
    }

    deleteWarehouse(id: number) {
        return this.http.delete(`https://localhost:7079/api/warehouses/${id}`);
    }
}