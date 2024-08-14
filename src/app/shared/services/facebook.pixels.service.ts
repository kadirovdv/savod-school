import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FacebookPixelService {
  constructor() {
    // Ensure fbq is available
    if (typeof fbq === 'undefined') {
      console.error('Facebook Pixel not loaded');
    }
  }

  track(event: string, params?: object) {
    if (typeof fbq !== 'undefined') {
      fbq('track', event, params);
    } else {
      console.error('Facebook Pixel not loaded');
    }
  }

  pageView() {
    this.track('testlash ucnun danniy yuborildi');
  }
}
