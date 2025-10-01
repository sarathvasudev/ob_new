import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WindowHandlingService {
 showBrilliance : boolean = false;

  hideAll() {
    this.showBrilliance = false;
  }
  showBackdrop(): boolean {
    return (
      this.showBrilliance
    );
    }
  toggleBrilliance() {
    this.showBrilliance = !this.showBrilliance;
  }
  clearData(){
    this.showBrilliance = false;
  }
}
