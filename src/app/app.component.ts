import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'rating'];
  dataSource: any[] = [];
  filteredData: any[] = [];
  searchQuery: string = '';
  sortField: string = 'title';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const apiUrl = 'https://dummyjson.com/products';
    this.http.get<any>(apiUrl).subscribe((response) => {
      this.dataSource = response.products;
      this.filteredData = [...this.dataSource];
    });
  }

  filterData(): void {
    this.filteredData = this.dataSource.filter((item) =>
      item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.sortData();
  }

  sortData(): void {
    this.filteredData.sort((a, b) => {
      const fieldA = a[this.sortField];
      const fieldB = b[this.sortField];
      const comparison = fieldA > fieldB ? 1 : fieldA < fieldB ? -1 : 0;
      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
  }
}