import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  @ViewChild('barChart') public barChart;
  @ViewChild('lineChart') public lineChart;

  public bars: any;
  public lines: any;

  constructor() {}

  ionViewDidEnter() {
    this.createBarChart();
    this.createLineChart();
  }

  private createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Sayote', 'Cabbage', 'Pechay', 'Gabi', 'Sebuyas'],
        datasets: [
          {
            label: 'Products Sold (vegetables/kl)',
            data: [60, 80, 50, 30, 120],
            backgroundColor: '#E0AA32',
            borderColor: '#b4851f',
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  private createLineChart() {
    this.lines = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Average Sales',
            data: [60.9, 20.5, 60.9, 70.5, 30.8, 100, 50],
            backgroundColor: '#6CBC3C',
            borderColor: '#46921a',
            borderWidth: 1,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
