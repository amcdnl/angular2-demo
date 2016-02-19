import { ElementRef } from 'angular2/core';
export declare class ParallaxComponent {
    private element;
    private position;
    private static speed;
    constructor(element: ElementRef);
    scroll(ev: any): void;
}
