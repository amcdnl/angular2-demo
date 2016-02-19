import { Component, Input, ElementRef } from 'angular2/core';
import { scrollTo, debounce } from '../../common/utils/utils';

@Component({
  selector: 'main-header',
  template: `
    <header [class]="headerClass">
      <div class="inner">
        <div class="row">
          <div class="col-md-4">
            <div class="box"><h1>{{names}}</h1></div>
          </div>
          <div class="col-md-8">
            <div class="box">
              <nav>
                <ul>
                  <li *ngFor="#link of links;#i = index">
                    <a 
                      (click)="scrollTo($event, i)" 
                      [class]="isActive(i)"
                      href="#">
                      {{link}}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  
  @Input() names;
  @Input() links;
  
  private headerClass: string = '';
  private sections: any;
  private rect: any;
  private active: string;
  private element: HTMLElement;

  constructor(element: ElementRef) {
    this.element = element.nativeElement;
  }

  ngOnInit(){
    this.rect = this.element.getBoundingClientRect();

    let sections = document.getElementsByClassName('content-section');
    this.sections = Array.from(sections).map(s => return { 
      id: s.id,
      rect: s.getBoundingClientRect()
    });

    window.addEventListener('scroll', this.scroll.bind(this));
  }
  
  @debounce(5)
  scroll(ev){
    const yOffset = window.window.pageYOffset;
    this.headerClass = yOffset > this.rect.height ? 'scrolled' : '';

    if(yOffset === 0) { 
      this.active = '';
      return;
    }
    
    for(let section of this.sections){
      if(yOffset >= section.rect.top && 
         yOffset <= (section.rect.top + section.rect.height)){
        this.active = section.id;
      }
    }
  }

  isActive(i){
    if(this.active === ('section-' + i)) return 'active';
    return '';
  }
  
  scrollTo(ev, i){
    ev.preventDefault();
    let dest = document.getElementById(`section-${i}`);
    scrollTo(dest.offsetTop, 500);
  }
  
}