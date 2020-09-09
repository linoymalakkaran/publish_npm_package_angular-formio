/**
 * @fileoverview added by tsickle
 * Generated from: resource/create/create.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService } from '../resource.service';
import { FormioResourceConfig } from '../resource.config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../../components/formio/formio.component';

function FormioResourceCreateComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h3", 2);
    ɵngcc0.ɵɵelementStart(1, "a", 3);
    ɵngcc0.ɵɵelement(2, "i", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" | New ", ctx_r0.service.form.title, " ");
} }
var FormioResourceCreateComponent = /** @class */ (function () {
    function FormioResourceCreateComponent(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.onError = new EventEmitter();
        this.onSuccess = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FormioResourceCreateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.service.setContext(this.route);
    };
    /**
     * @param {?} submission
     * @return {?}
     */
    FormioResourceCreateComponent.prototype.onSubmit = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        var _this = this;
        this.service
            .save(submission)
            .then((/**
         * @return {?}
         */
        function () {
            _this.router.navigate(['../', _this.service.resource._id, 'view'], {
                relativeTo: _this.route
            });
        }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.onError.emit(err); }));
    };
    /** @nocollapse */
    FormioResourceCreateComponent.ctorParameters = function () { return [
        { type: FormioResourceService },
        { type: ActivatedRoute },
        { type: Router },
        { type: FormioResourceConfig }
    ]; };
FormioResourceCreateComponent.ɵfac = function FormioResourceCreateComponent_Factory(t) { return new (t || FormioResourceCreateComponent)(ɵngcc0.ɵɵdirectiveInject(FormioResourceService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ActivatedRoute), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router), ɵngcc0.ɵɵdirectiveInject(FormioResourceConfig)); };
FormioResourceCreateComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormioResourceCreateComponent, selectors: [["ng-component"]], decls: 2, vars: 6, consts: [["style", "margin-top:0;", 4, "ngIf"], [3, "form", "submission", "refresh", "error", "success", "submit"], [2, "margin-top", "0"], ["routerLink", "../", 1, "back-button"], [1, "fa", "fa-chevron-left", "glyphicon", "glyphicon-chevron-left"]], template: function FormioResourceCreateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, FormioResourceCreateComponent_h3_0_Template, 4, 1, "h3", 0);
        ɵngcc0.ɵɵelementStart(1, "formio", 1);
        ɵngcc0.ɵɵlistener("submit", function FormioResourceCreateComponent_Template_formio_submit_1_listener($event) { return ctx.onSubmit($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.service.form);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("refresh", ctx.service.refresh)("error", ctx.onError)("success", ctx.onSuccess);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.FormioComponent, ɵngcc1.RouterLinkWithHref], styles: [".back-button[_ngcontent-%COMP%] { font-size: 0.8em; }"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioResourceCreateComponent, [{
        type: Component,
        args: [{
                styles: [".back-button { font-size: 0.8em; } "],
                template: "<h3 *ngIf=\"service.form\" style=\"margin-top:0;\"> <a routerLink=\"../\" class=\"back-button\"> <i class=\"fa fa-chevron-left glyphicon glyphicon-chevron-left\"></i> </a> | New {{ service.form.title }} </h3> <formio [form]=\"service.form\" [submission]=\"service.resource\" [refresh]=\"service.refresh\" [error]=\"onError\" [success]=\"onSuccess\" (submit)=\"onSubmit($event)\" ></formio> "
            }]
    }], function () { return [{ type: FormioResourceService }, { type: ɵngcc1.ActivatedRoute }, { type: ɵngcc1.Router }, { type: FormioResourceConfig }]; }, null); })();
    return FormioResourceCreateComponent;
}());
export { FormioResourceCreateComponent };
if (false) {
    /** @type {?} */
    FormioResourceCreateComponent.prototype.onError;
    /** @type {?} */
    FormioResourceCreateComponent.prototype.onSuccess;
    /** @type {?} */
    FormioResourceCreateComponent.prototype.service;
    /** @type {?} */
    FormioResourceCreateComponent.prototype.route;
    /** @type {?} */
    FormioResourceCreateComponent.prototype.router;
    /** @type {?} */
    FormioResourceCreateComponent.prototype.config;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiY3JlYXRlLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFNTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7eUtBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEdlbmVyYXRlZCBmcm9tOiByZXNvdXJjZS9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC50c1xuICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGNvbnN0YW50UHJvcGVydHksZXh0cmFSZXF1aXJlLG1pc3NpbmdPdmVycmlkZSxtaXNzaW5nUmV0dXJuLHVudXNlZFByaXZhdGVNZW1iZXJzLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlQ29uZmlnIH0gZnJvbSAnLi4vcmVzb3VyY2UuY29uZmlnJztcbnZhciBGb3JtaW9SZXNvdXJjZUNyZWF0ZUNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb3JtaW9SZXNvdXJjZUNyZWF0ZUNvbXBvbmVudChzZXJ2aWNlLCByb3V0ZSwgcm91dGVyLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMub25FcnJvciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvUmVzb3VyY2VDcmVhdGVDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gLyoqXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRDb250ZXh0KHRoaXMucm91dGUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBzdWJtaXNzaW9uXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBGb3JtaW9SZXNvdXJjZUNyZWF0ZUNvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHN1Ym1pc3Npb25cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChzdWJtaXNzaW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2VydmljZVxuICAgICAgICAgICAgLnNhdmUoc3VibWlzc2lvbilcbiAgICAgICAgICAgIC50aGVuKCgvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLycsIF90aGlzLnNlcnZpY2UucmVzb3VyY2UuX2lkLCAndmlldyddLCB7XG4gICAgICAgICAgICAgICAgcmVsYXRpdmVUbzogX3RoaXMucm91dGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSlcbiAgICAgICAgICAgIC5jYXRjaCgoLyoqXG4gICAgICAgICAqIEBwYXJhbSB7P30gZXJyXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBfdGhpcy5vbkVycm9yLmVtaXQoZXJyKTsgfSkpO1xuICAgIH07XG4gICAgRm9ybWlvUmVzb3VyY2VDcmVhdGVDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogW1wiLmJhY2stYnV0dG9uIHsgZm9udC1zaXplOiAwLjhlbTsgfSBcIl0sXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIjxoMyAqbmdJZj1cXFwic2VydmljZS5mb3JtXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDowO1xcXCI+IDxhIHJvdXRlckxpbms9XFxcIi4uL1xcXCIgY2xhc3M9XFxcImJhY2stYnV0dG9uXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tbGVmdCBnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFxcXCI+PC9pPiA8L2E+IHwgTmV3IHt7IHNlcnZpY2UuZm9ybS50aXRsZSB9fSA8L2gzPiA8Zm9ybWlvIFtmb3JtXT1cXFwic2VydmljZS5mb3JtXFxcIiBbc3VibWlzc2lvbl09XFxcInNlcnZpY2UucmVzb3VyY2VcXFwiIFtyZWZyZXNoXT1cXFwic2VydmljZS5yZWZyZXNoXFxcIiBbZXJyb3JdPVxcXCJvbkVycm9yXFxcIiBbc3VjY2Vzc109XFxcIm9uU3VjY2Vzc1xcXCIgKHN1Ym1pdCk9XFxcIm9uU3VibWl0KCRldmVudClcXFwiID48L2Zvcm1pbz4gXCJcbiAgICAgICAgICAgICAgICB9LF0gfSxcbiAgICBdO1xuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIEZvcm1pb1Jlc291cmNlQ3JlYXRlQ29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IEZvcm1pb1Jlc291cmNlU2VydmljZSB9LFxuICAgICAgICB7IHR5cGU6IEFjdGl2YXRlZFJvdXRlIH0sXG4gICAgICAgIHsgdHlwZTogUm91dGVyIH0sXG4gICAgICAgIHsgdHlwZTogRm9ybWlvUmVzb3VyY2VDb25maWcgfVxuICAgIF07IH07XG4gICAgcmV0dXJuIEZvcm1pb1Jlc291cmNlQ3JlYXRlQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IEZvcm1pb1Jlc291cmNlQ3JlYXRlQ29tcG9uZW50IH07XG5pZiAoZmFsc2UpIHtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VDcmVhdGVDb21wb25lbnQucHJvdG90eXBlLm9uRXJyb3I7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlQ3JlYXRlQ29tcG9uZW50LnByb3RvdHlwZS5vblN1Y2Nlc3M7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlQ3JlYXRlQ29tcG9uZW50LnByb3RvdHlwZS5zZXJ2aWNlO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZUNyZWF0ZUNvbXBvbmVudC5wcm90b3R5cGUucm91dGU7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlQ3JlYXRlQ29tcG9uZW50LnByb3RvdHlwZS5yb3V0ZXI7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlQ3JlYXRlQ29tcG9uZW50LnByb3RvdHlwZS5jb25maWc7XG59XG4iXX0=