import { Component, AfterViewInit, ViewChild, ElementRef , OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements AfterViewInit, OnInit {
  @ViewChild('canvas') canvas!: ElementRef
 
  chart!: Highcharts.Chart;
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    const options: Highcharts.Options | any = {
      chart: {
        plotBackgroundColor: '#333',
        plotBorderWidth: 2,
        plotShadow: true,
        type: 'pie',
        backgroundColor: "#fff",
        className: 'w-full'
      },
      title: {
        text: 'Biểu đồ đơn giản'
      },
      subtitle: {
        text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    tooltip: {
      enabled: true,
      pointFormat: '{series.name}: {point.y} :  {point.percentage} '
    },
    accessibility: {
      enabled: true,
      announceNewData: {
          enabled: true
      },
      
      point: {
        
          valueSuffix: '%'
      }
  },
      series: [
        {
            name: "Browsers",
            colorByPoint: true,
            data: [
                {
                    name: "Chrome",
                    y: 61.04,
                    drilldown: "Chrome"
                },
                {
                    name: "Safari",
                    y: 9.47,
                    drilldown: "Safari"
                },
                {
                    name: "Edge",
                    y: 9.32,
                    drilldown: "Edge"
                },
                {
                    name: "Firefox",
                    y: 8.15,
                    drilldown: "Firefox"
                },
                {
                    name: "Other",
                    y: 11.02,
                    drilldown: null
                }
            ]
        }
    ],
  };
  this.chart = Highcharts.chart('container', options);
}
}
