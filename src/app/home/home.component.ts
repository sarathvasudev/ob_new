import { Component, OnInit,OnDestroy } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InformationModel, ThrusterDataModel } from './models/models';
import { WindowHandlingService } from './services/window-handling-service';
import { BridgeStoreService } from './services/bridge-store.service';
import { DemoComponent } from "../demo/demo.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [DemoComponent] 
})
export class HomeComponent implements OnInit, OnDestroy {
  currentDateTime: string = '';
  private intervalId: any;
  showBrilliance : boolean = false;
  showAppDemo : boolean = false;
  information : InformationModel | undefined;// Make enum accessible in template
  countries = [
  {value:'NA',label:'Select Country'},
  {value:'IN',label:'India'},
  {value:'USA',label:'United States Of America'},
  {value:'UK',label:'United Kingdom'}
  ];

  locations = [
    {value:'NY',label:'New York'},
    {value:'DL',label:'Delhi'},
    {value:'LDN',label:'London'}
  ];

  weathers = [
    {value:'SUN',label:'Sunny'},
    {value:'CLOUD',label:'Cloudy'},
    {value:'RAIN',label:'Rainy'}
  ];

  constructor(public windowService:WindowHandlingService,
    public bridgeStoreService: BridgeStoreService,
  ) {}
  ngOnInit(): void {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000); // update every second
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.windowService.clearData();
    this.bridgeStoreService.clearData();
  }

  onPaletteChange(event: any) {
    const newPalette = event.detail.value as 'day' | 'night' | 'dusk' | 'bright';
    this.bridgeStoreService.setPalette(newPalette);
  }

  onStart() {
    this.showAppDemo=true;
  }

  private updateTime() {
    this.currentDateTime = new Date().toISOString();
  }

  onBack(){
    this.showAppDemo=false;
  }
}


