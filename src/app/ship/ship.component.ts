import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShipComponent {
   @Output() backClicked = new  EventEmitter<boolean>();
  ships = [
    { name: 'True NICOLA', status: 'Running', speed: '12.5kn', type: 'cargo' },
    { name: 'True North II', status: 'Des : EdinBurg, Running', type: 'cargo' },
    { name: 'True North MSC', status: '', type: 'cargo' },
    { name: 'MSC NICOLA', status: '', type: 'cargo' },
    { name: 'MASTRO', status: '', type: 'cargo' },
    { name: 'MSC NICMASTRO', status: '', type: 'cargo' },
    { name: 'BER ZUGSPITZE', status: '', type: 'fishing' },
    { name: 'ZUGSPITZE', status: '', type: 'cargo' },
    { name: 'BERGE ZUG', status: '', type: 'fishing' },
    { name: 'BERGE ZUG', status: '', type: 'fishing' }
  ];

  onShipClick(ship: any) {
    window.open('/openbridge', '_blank');
  }

   onBackClick(){
    this.backClicked.emit(true);
  }
}
