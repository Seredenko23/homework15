import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appWave]'
})
export class WaveDirective implements OnInit {
  timer: number;
  index: number;
  length: number;
  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.index = 0;
    this.length = this.el.nativeElement.textContent.length;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.timer = setInterval(() => {
      if (this.index > this.length) { this.index = 0; }
      const arr = Array.from( this.el.nativeElement.textContent);
      this.el.nativeElement.textContent = arr.map((el, index) => {
        return this.index === index ? el.toUpperCase() : el.toLowerCase();
      }).join('');
      this.index++;
    }, 200);
  }

  @HostListener('mouseleave') mouseLeave() {
    clearInterval(this.timer);
  }

}
