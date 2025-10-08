import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-cospy',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    DashboardComponent,
  ],
  templateUrl: './cospy-home.component.html',
  styleUrl: './cospy-home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CospyHomeComponent {
  form: FormGroup;
  countries = ['Norway', 'Denmark', 'Sweden'];
  ports = ['Alisund', 'Oslo', 'Bergen'];
  weather = ['Calm', 'Windy', 'Stormy'];
  showDashboard = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      country: ['Norway'],
      port: ['Alisund'],
      weather: ['Calm']
    });
  }

  startSimulation() {
    this.showDashboard = true;
  }

  backClickedEventHandler(){
    this.showDashboard =false;
  }
}
