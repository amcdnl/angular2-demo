System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ParallaxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ParallaxComponent = (function () {
                function ParallaxComponent(element) {
                    this.position = '50% 0';
                    this.element = element.nativeElement;
                    window.addEventListener('scroll', this.scroll.bind(this));
                }
                ParallaxComponent.prototype.scroll = function (ev) {
                    var windowYOffset = window.pageYOffset;
                    var elmTopOffset = this.element.offsetTop;
                    this.position = "50% " + (windowYOffset - elmTopOffset) * ParallaxComponent.speed + "px";
                };
                ParallaxComponent.speed = 0.5;
                ParallaxComponent = __decorate([
                    core_1.Component({
                        selector: 'parallax',
                        template: "\n    <div \n      class=\"bg fadeIn fadeIn-3s fadeIn-Delay-3s\" \n      [style.backgroundPosition]=\"position\">\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ParallaxComponent);
                return ParallaxComponent;
            }());
            exports_1("ParallaxComponent", ParallaxComponent);
        }
    }
});
//# sourceMappingURL=ParallaxComponent.js.map