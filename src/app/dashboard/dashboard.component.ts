
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ShipsComponent } from '../ships/ships.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    ShipsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent {
  @Input() country!: string;
  @Input() port!: string;
  @Input() weather!: string;
  @Output() backClicked = new  EventEmitter<boolean>();

  shipsRunning = 12;
  anchoredShips = 4;
  expectedArrivals = 5;
  draftWarnings = 1;
  shipsTotal = 20;
  fishingVessels = 3;
  departures = 7;
  draftZero = 0;

  wind = 'ESE 18 km';
  humidity = 'Humidity';
  showShips : boolean = false;

  onStatClick(stat: string) {
    this.showShips = true;
  }

  onBackClick(){
    this.backClicked.emit(true);
  }
  backClickedEventHandler(){
    this.showShips =false;
  }

}
