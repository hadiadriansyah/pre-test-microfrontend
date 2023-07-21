import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'micro-front-ends-dashboard-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class RemoteEntryComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
    this.renderChart();
  }
  renderChart(){
  
    const barChart  = new Chart("bar-chart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Aktif",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Pasif",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
