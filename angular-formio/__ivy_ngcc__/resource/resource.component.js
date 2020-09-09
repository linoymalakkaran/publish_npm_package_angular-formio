/**
 * @fileoverview added by tsickle
 * Generated from: resource/resource.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioAuthService } from '../auth/auth.service';
import { FormioResourceService } from './resource.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common';

function FormioResourceComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵelementStart(1, "a", 7);
    ɵngcc0.ɵɵtext(2, "Edit");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function FormioResourceComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 4);
    ɵngcc0.ɵɵelementStart(1, "a", 8);
    ɵngcc0.ɵɵelement(2, "span", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
var FormioResourceComponent = /** @class */ (function () {
    function FormioResourceComponent(service, route, auth) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.auth = auth;
        this.perms = { delete: false, edit: false };
        // subscribe to the route param changes, so that we could re-load the submission if navigation happens from one submission to another
        this.paramsSubscription = this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.init();
        }));
    }
    /**
     * @return {?}
     */
    FormioResourceComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @return {?}
     */
    FormioResourceComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.loadResource(this.route);
        this.service.formLoaded.then((/**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            _this.auth.ready.then((/**
             * @return {?}
             */
            function () {
                _this.service.resourceLoaded.then((/**
                 * @param {?} resource
                 * @return {?}
                 */
                function (resource) {
                    _this.service.formFormio.userPermissions(_this.auth.user, form, resource).then((/**
                     * @param {?} perms
                     * @return {?}
                     */
                    function (perms) {
                        _this.perms.delete = perms.delete;
                        _this.perms.edit = perms.edit;
                    }));
                }));
            }));
        }));
    };
    /**
     * @return {?}
     */
    FormioResourceComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    };
    /** @nocollapse */
    FormioResourceComponent.ctorParameters = function () { return [
        { type: FormioResourceService },
        { type: ActivatedRoute },
        { type: FormioAuthService }
    ]; };
FormioResourceComponent.ɵfac = function FormioResourceComponent_Factory(t) { return new (t || FormioResourceComponent)(ɵngcc0.ɵɵdirectiveInject(FormioResourceService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ActivatedRoute), ɵngcc0.ɵɵdirectiveInject(FormioAuthService)); };
FormioResourceComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormioResourceComponent, selectors: [["ng-component"]], decls: 10, vars: 2, consts: [[1, "nav", "nav-tabs", 2, "margin-bottom", "10px"], [1, "nav-item"], ["routerLink", "../", 1, "nav-link"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "view", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "edit", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "delete", "routerLinkActive", "active", 1, "nav-link"], [1, "fa", "fa-trash", "glyphicon", "glyphicon-trash"]], template: function FormioResourceComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ul", 0);
        ɵngcc0.ɵɵelementStart(1, "li", 1);
        ɵngcc0.ɵɵelementStart(2, "a", 2);
        ɵngcc0.ɵɵelement(3, "i", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "li", 4);
        ɵngcc0.ɵɵelementStart(5, "a", 5);
        ɵngcc0.ɵɵtext(6, "View");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, FormioResourceComponent_li_7_Template, 3, 0, "li", 6);
        ɵngcc0.ɵɵtemplate(8, FormioResourceComponent_li_8_Template, 3, 0, "li", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(9, "router-outlet");
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngIf", ctx.perms.edit);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.perms.delete);
    } }, directives: [ɵngcc1.RouterLinkWithHref, ɵngcc1.RouterLinkActive, ɵngcc2.NgIf, ɵngcc1.RouterOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioResourceComponent, [{
        type: Component,
        args: [{
                template: "<ul class=\"nav nav-tabs\" style=\"margin-bottom: 10px\"> <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"../\"><i class=\"fa fa-chevron-left glyphicon glyphicon-chevron-left\"></i></a></li> <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\">View</a></li> <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"perms.edit\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\">Edit</a></li> <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"perms.delete\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><span class=\"fa fa-trash glyphicon glyphicon-trash\"></span></a></li> </ul> <router-outlet></router-outlet> "
            }]
    }], function () { return [{ type: FormioResourceService }, { type: ɵngcc1.ActivatedRoute }, { type: FormioAuthService }]; }, null); })();
    return FormioResourceComponent;
}());
export { FormioResourceComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormioResourceComponent.prototype.paramsSubscription;
    /** @type {?} */
    FormioResourceComponent.prototype.perms;
    /** @type {?} */
    FormioResourceComponent.prototype.service;
    /** @type {?} */
    FormioResourceComponent.prototype.route;
    /** @type {?} */
    FormioResourceComponent.prototype.auth;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJyZXNvdXJjZS5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUtNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2SUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBHZW5lcmF0ZWQgZnJvbTogcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LnRzXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybWlvQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuL3Jlc291cmNlLnNlcnZpY2UnO1xudmFyIEZvcm1pb1Jlc291cmNlQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcm1pb1Jlc291cmNlQ29tcG9uZW50KHNlcnZpY2UsIHJvdXRlLCBhdXRoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICAgICAgdGhpcy5wZXJtcyA9IHsgZGVsZXRlOiBmYWxzZSwgZWRpdDogZmFsc2UgfTtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSByb3V0ZSBwYXJhbSBjaGFuZ2VzLCBzbyB0aGF0IHdlIGNvdWxkIHJlLWxvYWQgdGhlIHN1Ym1pc3Npb24gaWYgbmF2aWdhdGlvbiBoYXBwZW5zIGZyb20gb25lIHN1Ym1pc3Npb24gdG8gYW5vdGhlclxuICAgICAgICB0aGlzLnBhcmFtc1N1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgoLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gcGFyYW1zXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBfdGhpcy5pbml0KCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9SZXNvdXJjZUNvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb1Jlc291cmNlQ29tcG9uZW50LnByb3RvdHlwZS5pbml0ID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2VydmljZS5sb2FkUmVzb3VyY2UodGhpcy5yb3V0ZSk7XG4gICAgICAgIHRoaXMuc2VydmljZS5mb3JtTG9hZGVkLnRoZW4oKC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGZvcm1cbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICBfdGhpcy5hdXRoLnJlYWR5LnRoZW4oKC8qKlxuICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNlcnZpY2UucmVzb3VyY2VMb2FkZWQudGhlbigoLyoqXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHs/fSByZXNvdXJjZVxuICAgICAgICAgICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlcnZpY2UuZm9ybUZvcm1pby51c2VyUGVybWlzc2lvbnMoX3RoaXMuYXV0aC51c2VyLCBmb3JtLCByZXNvdXJjZSkudGhlbigoLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7P30gcGVybXNcbiAgICAgICAgICAgICAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChwZXJtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGVybXMuZGVsZXRlID0gcGVybXMuZGVsZXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGVybXMuZWRpdCA9IHBlcm1zLmVkaXQ7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvUmVzb3VyY2VDb21wb25lbnQucHJvdG90eXBlLm5nT25EZXN0cm95ID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtc1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRm9ybWlvUmVzb3VyY2VDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIjx1bCBjbGFzcz1cXFwibmF2IG5hdi10YWJzXFxcIiBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbTogMTBweFxcXCI+IDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiPjxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiLi4vXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1sZWZ0IGdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XFxcIj48L2k+PC9hPjwvbGk+IDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+PGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCJ2aWV3XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPlZpZXc8L2E+PC9saT4gPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAqbmdJZj1cXFwicGVybXMuZWRpdFxcXCI+PGEgY2xhc3M9XFxcIm5hdi1saW5rXFxcIiByb3V0ZXJMaW5rPVxcXCJlZGl0XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPkVkaXQ8L2E+PC9saT4gPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAqbmdJZj1cXFwicGVybXMuZGVsZXRlXFxcIj48YSBjbGFzcz1cXFwibmF2LWxpbmtcXFwiIHJvdXRlckxpbms9XFxcImRlbGV0ZVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj48c3BhbiBjbGFzcz1cXFwiZmEgZmEtdHJhc2ggZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCI+PC9zcGFuPjwvYT48L2xpPiA8L3VsPiA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+IFwiXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBGb3JtaW9SZXNvdXJjZUNvbXBvbmVudC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBGb3JtaW9SZXNvdXJjZVNlcnZpY2UgfSxcbiAgICAgICAgeyB0eXBlOiBBY3RpdmF0ZWRSb3V0ZSB9LFxuICAgICAgICB7IHR5cGU6IEZvcm1pb0F1dGhTZXJ2aWNlIH1cbiAgICBdOyB9O1xuICAgIHJldHVybiBGb3JtaW9SZXNvdXJjZUNvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBGb3JtaW9SZXNvdXJjZUNvbXBvbmVudCB9O1xuaWYgKGZhbHNlKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUgez99XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBGb3JtaW9SZXNvdXJjZUNvbXBvbmVudC5wcm90b3R5cGUucGFyYW1zU3Vic2NyaXB0aW9uO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZUNvbXBvbmVudC5wcm90b3R5cGUucGVybXM7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXJ2aWNlO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZUNvbXBvbmVudC5wcm90b3R5cGUucm91dGU7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlQ29tcG9uZW50LnByb3RvdHlwZS5hdXRoO1xufVxuIl19