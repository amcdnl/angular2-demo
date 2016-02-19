import { ElementRef } from 'angular2/core';
export declare class HeaderComponent {
    names: any;
    links: any;
    private headerClass;
    private sections;
    private rect;
    private active;
    private element;
    constructor(element: ElementRef);
    ngOnInit(): void;
    scroll(ev: any): void;
    isActive(i: any): string;
    scrollTo(ev: any, i: any): void;
}
