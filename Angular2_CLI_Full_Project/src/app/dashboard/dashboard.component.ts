import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor( private router: Router ) { }

    public brandPrimary:string =  '#20a8d8';
    public brandSuccess:string =  '#4dbd74';
    public brandInfo:string =     '#63c2de';
    public brandWarning:string =  '#f8cb00';
    public brandDanger:string =   '#f86c6b';

    //convert Hex to RGBA
    public convertHex(hex:string,opacity:number){
        hex = hex.replace('#','');
        let r = parseInt(hex.substring(0,2), 16);
        let g = parseInt(hex.substring(2,4), 16);
        let b = parseInt(hex.substring(4,6), 16);

        let rgba = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return rgba;
    }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

    // mainChart
    public random(min:number, max:number) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    public mainChartElements:number = 27;
    public mainChartData1:Array<number> = [0.5, 1, 1.5, 2, 2.5, 2, 1.5, 1.5, 2, 2.5, 2.5, 3, 3, 2.5, 2.5, 2, 3, 2.5, 2, 1.5, 1, 0.5, 1, 1, 1.5, 2, 2.5, 3, 2.5, 2, 1.5, 1];;
    public mainChartData2:Array<number> = [1, 2, 3, 4, 5, 4, 3, 3, 4, 5, 5, 6, 6, 5, 5, 4, 6, 5, 4, 3, 2, 1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 2];

    public mainChartData:Array<any> = [
        {
            data: this.mainChartData1,
            label: 'Current'
        },
        {
            data: this.mainChartData2,
            label: 'Previous'
        },
        {
            data: this.mainChartData2,
            label: 'BEP'
        }
    ];
    public mainChartLabels:Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    public mainChartOptions:any = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function(value:any) {
                        return value.charAt(0);
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5
                }
            }]
        },
        elements: {
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            },
            line: {
                tension: 0.00001,
            }
        },
        legend: {
            display: false
        }
    };
    public mainChartColours:Array<any> = [
        {
            type: 'line',
            backgroundColor: 'transparent',
            borderColor: 'rgba(190,190,190,0.3)',
            pointBackgroundColor: '#fff',
            pointBorderColor: 'rgba(190,190,190,0.3)',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1

        }, {
            type: 'line',
            backgroundColor: 'transparent',
            borderColor: '#B2B8BD',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#B2B8BD',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
        }, {
            type: 'bar',
            backgroundColor: '#ECECEC',
            borderColor: '#ECECEC',
            pointHoverBackgroundColor: '#fff'
        }
    ];
    public mainChartLegend:boolean = false;
    public mainChartType:string = 'bar';

    // social box charts

    public socialChartData1:Array<any> = [
        {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Facebook'
        }
    ];
    public socialChartData2:Array<any> = [
        {
            data: [1, 13, 9, 17, 34, 41, 38],
            label: 'Twitter'
        }
    ];
    public socialChartData3:Array<any> = [
        {
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'LinkedIn'
        }
    ];
    public socialChartData4:Array<any> = [
        {
            data: [35, 23, 56, 22, 97, 23, 64],
            label: 'Google+'
        }
    ];

    public socialChartLabels:Array<any> = ['January','February','March','April','May','June','July'];
    public socialChartOptions:any = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display:false,
            }],
            yAxes: [{
                display:false,
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
        legend: {
            display: false
        }
    };
    public socialChartColours:Array<any> = [
        {
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff'
        }
    ];
    public socialChartLegend:boolean = false;
    public socialChartType:string = 'line';

    // sparkline charts

    public sparklineChartData1:Array<any> = [
        {
            data: [35, 23, 56, 22, 97, 23, 64],
            label: 'Clients'
        }
    ];
    public sparklineChartData2:Array<any> = [
        {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Clients'
        }
    ];

    public sparklineChartLabels:Array<any> = ['January','February','March','April','May','June','July'];
    public sparklineChartOptions:any = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display:false,
            }],
            yAxes: [{
                display:false,
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
        legend: {
            display: false
        }
    };
    public sparklineChartDefault:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: '#d1d4d7',
        }
    ];
    public sparklineChartPrimary:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: this.brandPrimary,
        }
    ];
    public sparklineChartInfo:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: this.brandInfo,
        }
    ];
    public sparklineChartDanger:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: this.brandDanger,
        }
    ];
    public sparklineChartWarning:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: this.brandWarning,
        }
    ];
    public sparklineChartSuccess:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: this.brandSuccess,
        }
    ];


    public sparklineChartLegend:boolean = false;
    public sparklineChartType:string = 'line';


    ngOnInit(): void { }
}
