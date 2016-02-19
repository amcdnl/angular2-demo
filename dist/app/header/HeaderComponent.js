System.register(['angular2/core', '../../common/utils/utils'], function(exports_1, context_1) {
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
    var core_1, utils_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(element) {
                    this.headerClass = '';
                    this.element = element.nativeElement;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    this.rect = this.element.getBoundingClientRect();
                    var sections = document.getElementsByClassName('content-section');
                    this.sections = Array.from(sections).map(function (s) {
                        return {
                            id: s.id,
                            rect: s.getBoundingClientRect()
                        };
                    });
                    window.addEventListener('scroll', this.scroll.bind(this));
                };
                HeaderComponent.prototype.scroll = function (ev) {
                    var yOffset = window.window.pageYOffset;
                    this.headerClass = yOffset > this.rect.height ? 'scrolled' : '';
                    if (yOffset === 0) {
                        this.active = '';
                        return;
                    }
                    for (var _i = 0, _a = this.sections; _i < _a.length; _i++) {
                        var section = _a[_i];
                        if (yOffset >= section.rect.top &&
                            yOffset <= (section.rect.top + section.rect.height)) {
                            this.active = section.id;
                        }
                    }
                };
                HeaderComponent.prototype.isActive = function (i) {
                    if (this.active === ('section-' + i))
                        return 'active';
                    return '';
                };
                HeaderComponent.prototype.scrollTo = function (ev, i) {
                    ev.preventDefault();
                    var dest = document.getElementById("section-" + i);
                    utils_1.scrollTo(dest.offsetTop, 500);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeaderComponent.prototype, "names", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeaderComponent.prototype, "links", void 0);
                __decorate([
                    utils_1.debounce(5), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], HeaderComponent.prototype, "scroll", null);
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'main-header',
                        template: "\n    <header [class]=\"headerClass\">\n      <div class=\"inner\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"box\"><h1>{{names}}</h1></div>\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"box\">\n              <nav>\n                <ul>\n                  <li *ngFor=\"#link of links;#i = index\">\n                    <a \n                      (click)=\"scrollTo($event, i)\" \n                      [class]=\"isActive(i)\"\n                      href=\"#\">\n                      {{link}}\n                    </a>\n                  </li>\n                </ul>\n              </nav>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=HeaderComponent.js.map