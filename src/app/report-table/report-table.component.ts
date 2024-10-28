import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

interface Report {
  reporte_id: number;
  sucursal_id: number;
  fecha_reporte: string;
  total_ventas: number;
}

@Component({
  selector: 'app-report-table',
  standalone: true,
  imports: [NgFor, CommonModule, HttpClientModule],
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {
  reports: Report[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Report[]>('/assets/reportes.json').subscribe(data => {
      this.reports = data;
      console.log(111)
    });
  }
}
