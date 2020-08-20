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
  @ViewChild('horizontalBarChart') public horizontalBarChart;

  public bars: any;
  public lines: any;
  public horizontalbars: any;

  constructor() {}

  public ionViewDidEnter() {
    this.createBarChart(['Sayote', 'Cabbage', 'Pechay', 'Gabi', 'Sibuyas'], [60, 80, 50, 30, 120]);
    this.createLineChart(['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'], [60.9, 20.5, 60.9, 70.5, 30.8, 100, 50]);
    this.createHorizontalBarChart(['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'], [16, 20, 38, 5, 10, 12, 34]);
  }

  public selectOption(event: any) {
    if (event.detail.value === 'monthly') {
      const barLabels = ['Sayote', 'Singkamas', 'Cabbage', 'Pechay', 'Talong', 'Gabi', 'Sibuyas'];
      const lineLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      const barData = [660, 954.9, 250, 830, 120, 691, 878];
      const lineData = [605.9, 202.5, 954.9, 720.5, 310.8, 180, 520.9, 200.5, 866.9, 670.5, 230.8, 390];

      this.createBarChart(barLabels, barData);
      this.createLineChart(lineLabels, lineData);
      this.createHorizontalBarChart(lineLabels, lineData);
    } else {
      this.createBarChart(['Sayote', 'Cabbage', 'Pechay', 'Gabi', 'Sibuyas'], [60, 80, 50, 30, 120]);
      this.createLineChart(['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'], [60.9, 20.5, 60.9, 70.5, 30.8, 100, 50]);
      this.createHorizontalBarChart(['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'], [16, 20, 38, 5, 10, 12, 34]);
    }
  }

  private createHorizontalBarChart(labels: any[], data: any[]) {
    this.horizontalbars = new Chart(this.horizontalBarChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels,
        datasets: [
          {
            label: 'New Customers',
            data,
            backgroundColor: '#5AB4E5',
            borderColor: '#5c9dc0',
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

  private createBarChart(labels: any[], data: any[]) {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Products Sold (vegetables/kl)',
            data,
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

  private createLineChart(labels: any[], data: any[]) {
    this.lines = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Average Sales',
            data,
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
