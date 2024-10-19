import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  loadBootstrapJs(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN';
    script.crossOrigin = 'anonymous';
    script.defer = true; // Optional: Use defer to load it asynchronously without blocking the DOM

    // Append the script to the document head
    this.renderer.appendChild(document.head, script);

    script.onload = () => {
      console.log('Bootstrap JS loaded successfully.');
    };

    script.onerror = () => {
      console.error('Error loading Bootstrap JS.');
    };
  }
}