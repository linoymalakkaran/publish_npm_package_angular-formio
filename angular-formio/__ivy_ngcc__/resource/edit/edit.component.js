/**
 * @fileoverview added by tsickle
 * Generated from: resource/edit/edit.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioResourceService } from '../resource.service';
import { FormioResourceConfig } from '../resource.config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '../../components/formio/formio.component';
var FormioResourceEditComponent = /** @class */ (function () {
    function FormioResourceEditComponent(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.triggerError = new EventEmitter();
    }
    /**
     * @param {?} submission
     * @return {?}
     */
    FormioResourceEditComponent.prototype.onSubmit = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        var _this = this;
        /** @type {?} */
        var edit = this.service.resource;
        edit.data = submission.data;
        this.service.save(edit)
            .then((/**
         * @return {?}
         */
        function () {
            _this.router.navigate(['../', 'view'], { relativeTo: _this.route });
        }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this.triggerError.emit(err); }));
    };
    /** @nocollapse */
    FormioResourceEditComponent.ctorParameters = function () { return [
        { type: FormioResourceService },
        { type: ActivatedRoute },
        { type: Router },
        { type: FormioResourceConfig }
    ]; };
FormioResourceEditComponent.ɵfac = function FormioResourceEditComponent_Factory(t) { return new (t || FormioResourceEditComponent)(ɵngcc0.ɵɵdirectiveInject(FormioResourceService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ActivatedRoute), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router), ɵngcc0.ɵɵdirectiveInject(FormioResourceConfig)); };
FormioResourceEditComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormioResourceEditComponent, selectors: [["ng-component"]], decls: 1, vars: 4, consts: [[3, "form", "submission", "error", "refresh", "submit"]], template: function FormioResourceEditComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "formio", 0);
        ɵngcc0.ɵɵlistener("submit", function FormioResourceEditComponent_Template_formio_submit_0_listener($event) { return ctx.onSubmit($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("error", ctx.triggerError)("refresh", ctx.service.refresh);
    } }, directives: [ɵngcc2.FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioResourceEditComponent, [{
        type: Component,
        args: [{
                template: "<formio [form]=\"service.form\" [submission]=\"service.resource\" [error]=\"triggerError\" [refresh]=\"service.refresh\" (submit)=\"onSubmit($event)\" ></formio> "
            }]
    }], function () { return [{ type: FormioResourceService }, { type: ɵngcc1.ActivatedRoute }, { type: ɵngcc1.Router }, { type: FormioResourceConfig }]; }, null); })();
    return FormioResourceEditComponent;
}());
export { FormioResourceEditComponent };
if (false) {
    /** @type {?} */
    FormioResourceEditComponent.prototype.triggerError;
    /** @type {?} */
    FormioResourceEditComponent.prototype.service;
    /** @type {?} */
    FormioResourceEditComponent.prototype.route;
    /** @type {?} */
    FormioResourceEditComponent.prototype.router;
    /** @type {?} */
    FormioResourceEditComponent.prototype.config;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BS007QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7eUtBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogR2VuZXJhdGVkIGZyb206IHJlc291cmNlL2VkaXQvZWRpdC5jb21wb25lbnQudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZUNvbmZpZyB9IGZyb20gJy4uL3Jlc291cmNlLmNvbmZpZyc7XG52YXIgRm9ybWlvUmVzb3VyY2VFZGl0Q29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcm1pb1Jlc291cmNlRWRpdENvbXBvbmVudChzZXJ2aWNlLCByb3V0ZSwgcm91dGVyLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMudHJpZ2dlckVycm9yID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IHN1Ym1pc3Npb25cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb1Jlc291cmNlRWRpdENvbXBvbmVudC5wcm90b3R5cGUub25TdWJtaXQgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IHN1Ym1pc3Npb25cbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChzdWJtaXNzaW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICAgICAgdmFyIGVkaXQgPSB0aGlzLnNlcnZpY2UucmVzb3VyY2U7XG4gICAgICAgIGVkaXQuZGF0YSA9IHN1Ym1pc3Npb24uZGF0YTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNhdmUoZWRpdClcbiAgICAgICAgICAgIC50aGVuKCgvKipcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uLycsICd2aWV3J10sIHsgcmVsYXRpdmVUbzogX3RoaXMucm91dGUgfSk7XG4gICAgICAgIH0pKVxuICAgICAgICAgICAgLmNhdGNoKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBlcnJcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIF90aGlzLnRyaWdnZXJFcnJvci5lbWl0KGVycik7IH0pKTtcbiAgICB9O1xuICAgIEZvcm1pb1Jlc291cmNlRWRpdENvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiPGZvcm1pbyBbZm9ybV09XFxcInNlcnZpY2UuZm9ybVxcXCIgW3N1Ym1pc3Npb25dPVxcXCJzZXJ2aWNlLnJlc291cmNlXFxcIiBbZXJyb3JdPVxcXCJ0cmlnZ2VyRXJyb3JcXFwiIFtyZWZyZXNoXT1cXFwic2VydmljZS5yZWZyZXNoXFxcIiAoc3VibWl0KT1cXFwib25TdWJtaXQoJGV2ZW50KVxcXCIgPjwvZm9ybWlvPiBcIlxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgLyoqIEBub2NvbGxhcHNlICovXG4gICAgRm9ybWlvUmVzb3VyY2VFZGl0Q29tcG9uZW50LmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgICAgICB7IHR5cGU6IEZvcm1pb1Jlc291cmNlU2VydmljZSB9LFxuICAgICAgICB7IHR5cGU6IEFjdGl2YXRlZFJvdXRlIH0sXG4gICAgICAgIHsgdHlwZTogUm91dGVyIH0sXG4gICAgICAgIHsgdHlwZTogRm9ybWlvUmVzb3VyY2VDb25maWcgfVxuICAgIF07IH07XG4gICAgcmV0dXJuIEZvcm1pb1Jlc291cmNlRWRpdENvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBGb3JtaW9SZXNvdXJjZUVkaXRDb21wb25lbnQgfTtcbmlmIChmYWxzZSkge1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZUVkaXRDb21wb25lbnQucHJvdG90eXBlLnRyaWdnZXJFcnJvcjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5zZXJ2aWNlO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZUVkaXRDb21wb25lbnQucHJvdG90eXBlLnJvdXRlO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZUVkaXRDb21wb25lbnQucHJvdG90eXBlLnJvdXRlcjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgRm9ybWlvUmVzb3VyY2VFZGl0Q29tcG9uZW50LnByb3RvdHlwZS5jb25maWc7XG59XG4iXX0=