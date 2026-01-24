import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {Tag} from 'primeng/tag';

@Component({
    selector: 'team-list',
    imports: [
        FormsModule,
        TableModule,
        Tag
    ],
    templateUrl: './team-list.html',
    styleUrl: './team-list.css',
    standalone: true
})
export class TeamList {

    products: Product[] = [];
    cols: any[] = [];
    mapToStatus: Map<string, string> = new Map<string, string>();

    constructor() {
        this.products = [
            {id: 1, name: 'Product 1', category: 'Category 1', quantity: 10, status: 'Approved'},
            {id: 2, name: 'Product 2', category: 'Category 2', quantity: 20, status: 'Awaiting'},
            {id: 3, name: 'Product 3', category: 'Category 3', quantity: 30, status: 'No Status'},
            {id: 4, name: 'Product 4', category: 'Category 4', quantity: 40, status: 'Approved'},
            {id: 5, name: 'Product 5', category: 'Category 5', quantity: 50, status: 'Approved'},
            {id: 6, name: 'Product 6', category: 'Category 4', quantity: 60, status: 'Rejected'},
            {id: 7, name: 'Product 7', category: 'Category 3', quantity: 70, status: 'No Status'},
            {id: 8, name: 'Product 8', category: 'Category 2', quantity: 80, status: 'Pending'},
            {id: 9, name: 'Product 9', category: 'Category 1', quantity: 90, status: 'Pending'},
            {id: 10, name: 'Product 10', category: 'Category 4', quantity: 0, status: 'Rejected'},
            {id: 11, name: 'Product 11', category: 'Category 3', quantity: 10, status: 'Rejected'},
        ];

        this.mapToStatus = new Map<string, string>([
            ['Approved', 'success'],
            ['Awaiting', 'warn'],
            ['No Status', 'secondary'],
            ['Rejected', 'danger'],
            ['Pending', 'info']
        ]);
    }

    getSeverity(status: string): any {
        return this.mapToStatus.get(status) ?? 'secondary';
    }

}

interface Product {
    id?: number;
    name: string;
    category: string;
    quantity: number;
    status: string;
}
