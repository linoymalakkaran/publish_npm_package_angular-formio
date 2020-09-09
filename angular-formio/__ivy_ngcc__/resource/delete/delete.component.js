/**
 * @fileoverview added by tsickle
 * Generated from: resource/delete/delete.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService } from '../resource.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
var FormioResourceDeleteComponent = /** @class */ (function () {
    function FormioResourceDeleteComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    /**
     * @return {?}
     */
    FormioResourceDeleteComponent.prototype.onDelete = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.remove().then((/**
         * @return {?}
         */
        function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        }));
    };
    /**
     * @return {?}
     */
    FormioResourceDeleteComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['../', 'view'], { relativeTo: this.route });
    };
    /** @nocollapse */
    FormioResourceDeleteComponent.ctorParameters = function () { return [
        { type: FormioResourceService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
FormioResourceDeleteComponent.ɵfac = function FormioResourceDeleteComponent_Factory(t) { return new (t || FormioResourceDeleteComponent)(ɵngcc0.ɵɵdirectiveInject(FormioResourceService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ActivatedRoute), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router)); };
FormioResourceDeleteComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormioResourceDeleteComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [[1, "btn-toolbar"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-right", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function FormioResourceDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h3");
        ɵngcc0.ɵɵtext(1, "Are you sure you wish to delete this record?");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 0);
        ɵngcc0.ɵɵelementStart(3, "button", 1);
        ɵngcc0.ɵɵlistener("click", function FormioResourceDeleteComponent_Template_button_click_3_listener() { return ctx.onDelete(); });
        ɵngcc0.ɵɵtext(4, "Yes");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "button", 2);
        ɵngcc0.ɵɵlistener("click", function FormioResourceDeleteComponent_Template_button_click_5_listener() { return ctx.onCancel(); });
        ɵngcc0.ɵɵtext(6, "No");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioResourceDeleteComponent, [{
        type: Component,
        args: [{
                template: "<h3>Are you sure you wish to delete this record?</h3> <div class=\"btn-toolbar\"> <button type=\"button\" (click)=\"onDelete()\" class=\"btn btn-danger\" style=\"margin-right: 10px;\">Yes</button> <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-danger\">No</button> </div> "
            }]
    }], function () { return [{ type: FormioResourceService }, { type: ɵngcc1.ActivatedRoute }, { type: ɵngcc1.Router }]; }, null); })();
    return FormioResourceDeleteComponent;
}());
export { FormioResourceDeleteComponent };
if (false) {
    /** @type {?} */
    FormioResourceDeleteComponent.prototype.service;
    /** @type {?} */
    FormioResourceDeleteComponent.prototype.route;
    /** @type {?} */
    FormioResourceDeleteComponent.prototype.router;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiZGVsZXRlLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFLTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5SUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogR2VuZXJhdGVkIGZyb206IHJlc291cmNlL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LnRzXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9yZXNvdXJjZS5zZXJ2aWNlJztcbnZhciBGb3JtaW9SZXNvdXJjZURlbGV0ZUNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb3JtaW9SZXNvdXJjZURlbGV0ZUNvbXBvbmVudChzZXJ2aWNlLCByb3V0ZSwgcm91dGVyKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvUmVzb3VyY2VEZWxldGVDb21wb25lbnQucHJvdG90eXBlLm9uRGVsZXRlID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2VydmljZS5yZW1vdmUoKS50aGVuKCgvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLy4uLyddLCB7IHJlbGF0aXZlVG86IF90aGlzLnJvdXRlIH0pO1xuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb1Jlc291cmNlRGVsZXRlQ29tcG9uZW50LnByb3RvdHlwZS5vbkNhbmNlbCA9IC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLycsICd2aWV3J10sIHsgcmVsYXRpdmVUbzogdGhpcy5yb3V0ZSB9KTtcbiAgICB9O1xuICAgIEZvcm1pb1Jlc291cmNlRGVsZXRlQ29tcG9uZW50LmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCI8aDM+QXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGRlbGV0ZSB0aGlzIHJlY29yZD88L2gzPiA8ZGl2IGNsYXNzPVxcXCJidG4tdG9vbGJhclxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJvbkRlbGV0ZSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIHN0eWxlPVxcXCJtYXJnaW4tcmlnaHQ6IDEwcHg7XFxcIj5ZZXM8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcIm9uQ2FuY2VsKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCI+Tm88L2J1dHRvbj4gPC9kaXY+IFwiXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBGb3JtaW9SZXNvdXJjZURlbGV0ZUNvbXBvbmVudC5jdG9yUGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtcbiAgICAgICAgeyB0eXBlOiBGb3JtaW9SZXNvdXJjZVNlcnZpY2UgfSxcbiAgICAgICAgeyB0eXBlOiBBY3RpdmF0ZWRSb3V0ZSB9LFxuICAgICAgICB7IHR5cGU6IFJvdXRlciB9XG4gICAgXTsgfTtcbiAgICByZXR1cm4gRm9ybWlvUmVzb3VyY2VEZWxldGVDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgRm9ybWlvUmVzb3VyY2VEZWxldGVDb21wb25lbnQgfTtcbmlmIChmYWxzZSkge1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZURlbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUuc2VydmljZTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VEZWxldGVDb21wb25lbnQucHJvdG90eXBlLnJvdXRlO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZURlbGV0ZUNvbXBvbmVudC5wcm90b3R5cGUucm91dGVyO1xufVxuIl19