import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule],
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShipsComponent {
   @Output() backClicked = new  EventEmitter<boolean>();
  ships = [
    { name: 'True North', status: 'Running', speed: '12.5kn', type: 'cargo' },
    { name: 'MSC NICOLA MASTRO', status: '', type: 'cargo' },
    { name: 'BERGE DAISEN', status: '', type: 'fishing' },
    { name: 'ORANGE PHOENIX', status: 'Des : EdinBurg, Running', speed: '8.5kn', type: 'cargo' },
    { name: 'ARIADNE', status: '', type: 'cargo' },
    { name: 'BERGE ODEL', status: '', type: 'cargo' },
    { name: 'DAN MAY', status: '', type: 'cargo' },
    { name: 'MORANDI', status: '', type: 'fishing' },
    { name: 'CHINA PROSPERITY', status: '', type: 'cargo' },
    { name: 'X100', status: '', type: 'fishing' }
  ];

  onShipClick(ship: any) {
    window.open('/openbridge', '_blank');
  }

   onBackClick(){
    this.backClicked.emit(true);
  }
}
