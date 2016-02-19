import { Component, ElementRef } from 'angular2/core';

@Component({
  selector: 'parallax',
  template: `
    <div 
      class="bg fadeIn fadeIn-3s fadeIn-Delay-3s" 
      [style.backgroundPosition]="position">
    </div>
  `
})
export class ParallaxComponent {
  
  private element: HTMLElement;
  private position: string = '50% 0';
  private static speed: number = 0.5;
  
  constructor(element: ElementRef){
    this.element = element.nativeElement;
    window.addEventListener('scroll', this.scroll.bind(this));
  }
  
  scroll(ev){
    let windowYOffset = window.pageYOffset;
    let elmTopOffset = this.element.offsetTop;
    this.position = `50% ${(windowYOffset - elmTopOffset) * ParallaxComponent.speed}px`;
  }
  
}