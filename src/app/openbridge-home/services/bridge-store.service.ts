import { Injectable } from '@angular/core';

export type Palette = 'day' | 'night' | 'dusk' | 'bright';

@Injectable()
export class BridgeStoreService {
  public palette :Palette ="day";

  setPalette(palette: Palette) {
    this.palette = palette;
    document.documentElement.setAttribute('data-obc-theme', this.palette);
  }

  clearData(){
    this.palette = "day";
  }
}
