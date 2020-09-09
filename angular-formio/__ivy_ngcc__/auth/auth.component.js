/**
 * @fileoverview added by tsickle
 * Generated from: auth/auth.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
var FormioAuthComponent = /** @class */ (function () {
    function FormioAuthComponent() {
    }
FormioAuthComponent.ɵfac = function FormioAuthComponent_Factory(t) { return new (t || FormioAuthComponent)(); };
FormioAuthComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormioAuthComponent, selectors: [["ng-component"]], decls: 11, vars: 0, consts: [[1, "card", "card-primary", "panel", "panel-default"], [1, "card-header", "panel-heading"], [1, "nav", "nav-tabs", "card-header-tabs"], ["role", "presentation", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "register", "routerLinkActive", "active", 1, "nav-link"], [1, "card-body", "panel-body"]], template: function FormioAuthComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "ul", 2);
        ɵngcc0.ɵɵelementStart(3, "li", 3);
        ɵngcc0.ɵɵelementStart(4, "a", 4);
        ɵngcc0.ɵɵtext(5, "Login");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "li", 3);
        ɵngcc0.ɵɵelementStart(7, "a", 5);
        ɵngcc0.ɵɵtext(8, "Register");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 6);
        ɵngcc0.ɵɵelement(10, "router-outlet");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, directives: [ɵngcc1.RouterLinkActive, ɵngcc1.RouterLinkWithHref, ɵngcc1.RouterOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioAuthComponent, [{
        type: Component,
        args: [{
                template: "<div class=\"card card-primary panel panel-default\"> <div class=\"card-header panel-heading\"> <ul class=\"nav nav-tabs card-header-tabs\"> <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"login\" routerLinkActive=\"active\">Login</a></li> <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"register\" routerLinkActive=\"active\">Register</a></li> </ul> </div> <div class=\"card-body panel-body\"> <router-outlet></router-outlet> </div> </div> "
            }]
    }], function () { return []; }, null); })();
    return FormioAuthComponent;
}());
export { FormioAuthComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUtNO0FBQ047QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEdlbmVyYXRlZCBmcm9tOiBhdXRoL2F1dGguY29tcG9uZW50LnRzXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xudmFyIEZvcm1pb0F1dGhDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9ybWlvQXV0aENvbXBvbmVudCgpIHtcbiAgICB9XG4gICAgRm9ybWlvQXV0aENvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiPGRpdiBjbGFzcz1cXFwiY2FyZCBjYXJkLXByaW1hcnkgcGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQtaGVhZGVyIHBhbmVsLWhlYWRpbmdcXFwiPiA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFicyBjYXJkLWhlYWRlci10YWJzXFxcIj4gPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwibG9naW5cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+TG9naW48L2E+PC9saT4gPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPjxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwicmVnaXN0ZXJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+UmVnaXN0ZXI8L2E+PC9saT4gPC91bD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSBwYW5lbC1ib2R5XFxcIj4gPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PiA8L2Rpdj4gPC9kaXY+IFwiXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICByZXR1cm4gRm9ybWlvQXV0aENvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBGb3JtaW9BdXRoQ29tcG9uZW50IH07XG4iXX0=