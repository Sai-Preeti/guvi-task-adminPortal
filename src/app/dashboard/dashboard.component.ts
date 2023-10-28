
import { AfterViewInit,Component } from '@angular/core';
import * as feather from 'feather-icons';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards=[
    {
      title:"Sales",
      icon:"truck",
      price:"2.382",
      percentage:"-3.65%"
    },
    {
      title:"Visitors",
      icon:"users",
      price:"14.212",
      percentage:"5.25%"
    },
    {
      title:"Earnings",
      icon:"dollar-sign",
      price:"$21.300",
      percentage:"6..65%"
    },
    {
      title:"Orders",
      icon:"shopping-cart",
      price:"64",
      percentage:"-2.25%"
    }
  ]
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        data:[2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327],
        fill: true,
        tension: 0.5,
        borderColor: '#5d9afc',
        backgroundColor: '#f5fcff',
        pointBackgroundColor:'#a1c5ff',
        pointBorderColor:'#5d9afc'
      }
    ],
    
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false 
        },
        ticks: {
          stepSize: 1000
        }
      }
    }
    
    
  };
  public lineChartLegend = true;
  ngAfterViewInit() {
    feather.replace();
    
  }
}
