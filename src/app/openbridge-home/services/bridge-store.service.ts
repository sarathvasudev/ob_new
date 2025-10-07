import { Injectable } from '@angular/core';

export type Palette = 'day' | 'night' | 'dusk' | 'bright';

@Injectable({ providedIn: 'root' })
export class BridgeStoreService {
  public palette :Palette ="day";

  setPalette(p: Palette) {
    this.palette = p;
    document.documentElement.setAttribute('data-obc-theme', p);
  }

  clearData(){
    this.palette = "day";
  }
}
