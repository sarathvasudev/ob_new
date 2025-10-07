import { Component,   OnInit,Input } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CompassDataModel, InformationModel, ThrusterDataModel, WeatherDataModel } from '../openbridge-home/models/models';

@Component({
  selector: 'app-openbridge-demo',
  templateUrl: './openbridge-demo.component.html',
  styleUrls: ['./openbridge-demo.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class OpenBridgeDemoComponent implements OnInit{
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