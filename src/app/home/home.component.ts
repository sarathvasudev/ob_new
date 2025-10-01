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
  private ws!: WebSocket;
  currentDateTime: string = '';
  private intervalId: any;
  private isAlive = true;
  showBrilliance : boolean = false;
  information : InformationModel | undefined;// Make enum accessible in template
  
  constructor(public windowService:WindowHandlingService,
    public bridgeStoreService: BridgeStoreService,
  ) {}
  ngOnInit(): void {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000); // update every second
    this.connectWebSocket();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
    if (this.ws) {
      this.ws.close();
    }
    clearInterval(this.intervalId);
    this.windowService.clearData();
    this.bridgeStoreService.clearData();
  }

  onPaletteChange(event: any) {
    const newPalette = event.detail.value as 'day' | 'night' | 'dusk' | 'bright';
    this.bridgeStoreService.setPalette(newPalette);
  }

  private updateTime() {
    this.currentDateTime = new Date().toISOString();
  }

  private connectWebSocket() {
    this.ws = new WebSocket(
      'ws://localhost:8756/World/Vehicle/Vessel/POWER_DRIVEN/bedc897f-512b-45a2-aea4-bcfc248d2a87'
    );

    this.ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    this.ws.onclose = () => {
      console.log('WebSocket disconnected. Reconnecting in 3s...');
      if (this.isAlive) { // only reconnect if component is still alive
        setTimeout(() => this.connectWebSocket(), 3000);
      }
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.ws.onmessage = (event) => {
      try {
        const responseData = JSON.parse(event.data).r;
        this.information = responseData as InformationModel;
      } catch (err) {
          console.error('Invalid JSON:', event.data);
      }
    };
  }
}


