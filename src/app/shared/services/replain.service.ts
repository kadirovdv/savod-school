import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReplainService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public loadReplain(): void {
    // const script = this.renderer.createElement('script');
    // script.src = 'https://widget.replain.cc/dist/index.js';
    // script.id = 'replain-jssdk';
    // script.async = true;
    // this.renderer.appendChild(document.body, script);

    // const settings = this.renderer.createElement('script');
    // settings.text = `
    //    window.replainSettings = { id: 'cff789da-40f5-4621-99f4-f270d0f6dcde' };
    //     (function(u){var s=document.createElement('script');s.async=true;s.src=u;
    //     var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
    //     })('https://widget.replain.cc/dist/client.js');
    // `;
    // this.renderer.appendChild(document.body, settings);
  }
}
