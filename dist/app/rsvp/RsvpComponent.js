System.register(['angular2/core', 'angular2/common', './RsvpModel'], function(exports_1, context_1) {
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
    var core_1, common_1, RsvpModel_1;
    var RsvpComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (RsvpModel_1_1) {
                RsvpModel_1 = RsvpModel_1_1;
            }],
        execute: function() {
            RsvpComponent = (function () {
                function RsvpComponent() {
                    this.model = new RsvpModel_1.RsvpModel();
                    this.submitted = false;
                }
                RsvpComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                    alert('Thanks for letting us know!');
                    console.log('Form Model:', this.model);
                };
                RsvpComponent = __decorate([
                    core_1.Component({
                        selector: 'rsvp-form',
                        directives: [common_1.NgForm],
                        template: "\n    <div class=\"inner\">\n      <h3>\n        <img src=\"assets/date.png\" />\n        RSVP\n      </h3>\n      \n      <form \n        [hidden]=\"submitted\" \n        id=\"rsvp\" \n        (ngSubmit)=\"onSubmit()\"\n        #rsvp=\"ngForm\"\n        name=\"rsvp\">\n        \n        <input \n          type=\"text\" \n          [(ngModel)]=\"model.name\"\n          ngControl=\"name\"  \n          #name=\"ngForm\"\n          required \n          placeholder=\"Name of guest\" \n        />\n\n        <input \n          type=\"text\" \n          [hidden]=\"!model.attending\"\n          placeholder=\"Number of Seats\"\n          [(ngModel)]=\"model.seats\"\n          ngControl=\"seats\"  \n          #seats=\"ngForm\"\n        />\n        \n        <input \n          type=\"checkbox\" \n          id=\"attending\"\n          [(ngModel)]=\"model.attending\"\n          ngControl=\"attending\"  \n          #attending=\"ngForm\"\n        />\n        <label for=\"attending\">Attending</label>\n        \n        <button \n          type=\"submit\" \n          [disabled]=\"!rsvp.form.valid\">\n            Submit\n        </button>\n      </form>\n      \n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RsvpComponent);
                return RsvpComponent;
            }());
            exports_1("RsvpComponent", RsvpComponent);
        }
    }
});
//# sourceMappingURL=RsvpComponent.js.map