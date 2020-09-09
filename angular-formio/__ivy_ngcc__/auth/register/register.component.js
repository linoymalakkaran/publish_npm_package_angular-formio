/**
 * @fileoverview added by tsickle
 * Generated from: auth/register/register.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormioAuthService } from '../auth.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../components/formio/formio.component';
var FormioAuthRegisterComponent = /** @class */ (function () {
    function FormioAuthRegisterComponent(service) {
        this.service = service;
    }
    /** @nocollapse */
    FormioAuthRegisterComponent.ctorParameters = function () { return [
        { type: FormioAuthService }
    ]; };
FormioAuthRegisterComponent.ɵfac = function FormioAuthRegisterComponent_Factory(t) { return new (t || FormioAuthRegisterComponent)(ɵngcc0.ɵɵdirectiveInject(FormioAuthService)); };
FormioAuthRegisterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormioAuthRegisterComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "src", "submit"]], template: function FormioAuthRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "formio", 0);
        ɵngcc0.ɵɵlistener("submit", function FormioAuthRegisterComponent_Template_formio_submit_0_listener($event) { return ctx.service.onRegisterSubmit($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("src", ctx.service.registerForm);
    } }, directives: [ɵngcc1.FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioAuthRegisterComponent, [{
        type: Component,
        args: [{
                template: "<formio [src]=\"service.registerForm\" (submit)=\"service.onRegisterSubmit($event)\"></formio> "
            }]
    }], function () { return [{ type: FormioAuthService }]; }, null); })();
    return FormioAuthRegisterComponent;
}());
export { FormioAuthRegisterComponent };
if (false) {
    /** @type {?} */
    FormioAuthRegisterComponent.prototype.service;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJyZWdpc3Rlci5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBS007QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7MkVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBHZW5lcmF0ZWQgZnJvbTogYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtaW9BdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG52YXIgRm9ybWlvQXV0aFJlZ2lzdGVyQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcm1pb0F1dGhSZWdpc3RlckNvbXBvbmVudChzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgfVxuICAgIEZvcm1pb0F1dGhSZWdpc3RlckNvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiPGZvcm1pbyBbc3JjXT1cXFwic2VydmljZS5yZWdpc3RlckZvcm1cXFwiIChzdWJtaXQpPVxcXCJzZXJ2aWNlLm9uUmVnaXN0ZXJTdWJtaXQoJGV2ZW50KVxcXCI+PC9mb3JtaW8+IFwiXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBGb3JtaW9BdXRoUmVnaXN0ZXJDb21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogRm9ybWlvQXV0aFNlcnZpY2UgfVxuICAgIF07IH07XG4gICAgcmV0dXJuIEZvcm1pb0F1dGhSZWdpc3RlckNvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBGb3JtaW9BdXRoUmVnaXN0ZXJDb21wb25lbnQgfTtcbmlmIChmYWxzZSkge1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9BdXRoUmVnaXN0ZXJDb21wb25lbnQucHJvdG90eXBlLnNlcnZpY2U7XG59XG4iXX0=