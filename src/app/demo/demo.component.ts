import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CompassDataModel, InformationModel, ThrusterDataModel, WeatherDataModel } from '../home/models/models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoComponent implements OnInit, OnDestroy {
  private ws: WebSocket | null = null;
  private reconnectTimeout: any = null;
  selectedShipId: string | undefined = undefined;
  private wsToken: number = 0;
  information: InformationModel | undefined;
  @Output() backClicked = new EventEmitter<boolean>();
  showDashboard = false;

  ships = [
    { value: 'bedc897f-512b-45a2-aea4-bcfc248d2a87', label: 'Ship 1' },
    { value: 'SHIP2', label: 'Ship 2' },
    { value: 'bedc897f-512b-45a2-aea4-bcfc248d2a87', label: 'Ship 3' },
  ];

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.clearWebSocket();
    this.selectedShipId = undefined;
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

  onBack() {
    this.backClicked.emit(true);
  }

  onShipChange(event: any) {
  this.showDashboard = false;
  this.information = undefined;
  this.selectedShipId = event.target.value;
  this.clearWebSocket();
  this.connectWebSocket();
  }

  private connectWebSocket() {
    if (!this.selectedShipId) return;
    this.wsToken++;
    const currentToken = this.wsToken;
    if (this.selectedShipId === "SHIP2"){
      this.ws = new WebSocket(
      `ws://localhost:8750/World/Vehicle/Vessel/POWER_DRIVEN/${this.selectedShipId}`
    );
    }
    else{
      this.ws = new WebSocket(
      `ws://localhost:8756/World/Vehicle/Vessel/POWER_DRIVEN/${this.selectedShipId}`
    );
    }

    this.ws.onopen = () => {
      this.showDashboard = true;
      console.log('Connected to WebSocket server');
    };

    this.ws.onclose = () => {
      console.log('WebSocket disconnected. Reconnecting in 5s...');
      if (this.selectedShipId && currentToken === this.wsToken) {
        this.reconnectTimeout = setTimeout(() => this.connectWebSocket(), 5000);
      }
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.ws.onmessage = (event) => {
      if (currentToken !== this.wsToken) return;
      try {
        const responseData = JSON.parse(event.data).r;
        this.information = responseData as InformationModel;
      } catch (err) {
        console.error('Invalid JSON:', event.data);
      }
    };
  }

  private clearWebSocket(pendingNewConnection = false) {
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }
    if (this.ws) {
      this.ws.onclose = null;
      if (
        this.ws.readyState === WebSocket.OPEN ||
        this.ws.readyState === WebSocket.CONNECTING
      ) {
        this.ws.close();
      }
      this.ws = null;
    }
  }
}
