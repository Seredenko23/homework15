import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDyslexia]'
})
export class DyslexiaDirective implements OnInit {
  timer: number;
  length: number;
  text: string;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.text = this.el.nativeElement.textContent;
    this.length = this.el.nativeElement.textContent.length;
  }

  getRandom(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.timer = setInterval(() => {
      const pos = this.getRandom(1, this.length);
      const arr = Array.from(this.el.nativeElement.textContent);
      [arr[pos], arr[pos - 1]] = [arr[pos - 1], arr[pos]];
      this.el.nativeElement.textContent = arr.join('');
    }, 200);
  }

  @HostListener('mouseleave') mouseLeave() {
    clearInterval(this.timer);
    this.el.nativeElement.textContent = this.text;
  }

}
