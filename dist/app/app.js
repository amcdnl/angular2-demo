System.register(['angular2/core', '../common/parallax/ParallaxComponent', './header/HeaderComponent', './rsvp/RsvpComponent'], function(exports_1, context_1) {
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
    var core_1, ParallaxComponent_1, HeaderComponent_1, RsvpComponent_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ParallaxComponent_1_1) {
                ParallaxComponent_1 = ParallaxComponent_1_1;
            },
            function (HeaderComponent_1_1) {
                HeaderComponent_1 = HeaderComponent_1_1;
            },
            function (RsvpComponent_1_1) {
                RsvpComponent_1 = RsvpComponent_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    this.links = [
                        'Our Story',
                        'When & Where',
                        'Travel & Accommodations',
                        'Registry',
                        'RSVP'
                    ];
                    this.names = 'Austin and Heather';
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [HeaderComponent_1.HeaderComponent, ParallaxComponent_1.ParallaxComponent, RsvpComponent_1.RsvpComponent],
                        templateUrl: 'src/app/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map