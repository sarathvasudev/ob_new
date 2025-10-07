import { Component,   OnInit,Input } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CompassDataModel, InformationModel, ThrusterDataModel, WeatherDataModel } from '../openbridge-home/models/models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class DemoComponent implements OnInit{
  @Input() information:InformationModel | undefined;
  ngOnInit(): void {
  }

  get weatherInfo(): WeatherDataModel | undefined {
    return this.information?.weatherInfo;
  }

  get compassInfo(): CompassDataModel | undefined {
    return this.information?.compassInfo;
  }

  get thrusterInfo(): ThrusterDataModel | undefined {
    return this.information?.thrusterInfo;
  }

}