import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMask]',
})
export class MaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const rawValue = input.value.replace(/\D/g, '');
    const trimmed = rawValue.slice(0, 9);
    const formatted = this.formatValue(trimmed);
    input.value = formatted;
  }

  private formatValue(raw: string): string {
    const parts = [];
    let index = 0;

    if (raw.length >= 2) {
      parts.push(raw.slice(0, 2));
      index += 2;
    } else {
      parts.push(raw);
      return parts.join('-');
    }

    if (raw.length >= 5) {
      parts.push(raw.slice(2, 5));
      index += 3;
    } else if (raw.length > 2) {
      parts.push(raw.slice(2));
      return parts.join('-');
    }

    if (raw.length >= 7) {
      parts.push(raw.slice(5, 7));
      index += 2;
    } else if (raw.length > 5) {
      parts.push(raw.slice(5));
      return parts.join('-');
    }

    if (raw.length >= 9) {
      parts.push(raw.slice(7, 9));
    } else if (raw.length > 7) {
      parts.push(raw.slice(7));
    }

    return parts.join('-');
  }
}
