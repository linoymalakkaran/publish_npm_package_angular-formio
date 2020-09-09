/**
 * @fileoverview added by tsickle
 * Generated from: auth/login/login.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormioAuthService } from '../auth.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../components/formio/formio.component';
var FormioAuthLoginComponent = /** @class */ (function () {
    function FormioAuthLoginComponent(service) {
        this.service = service;
    }
    /** @nocollapse */
    FormioAuthLoginComponent.ctorParameters = function () { return [
        { type: FormioAuthService }
    ]; };
FormioAuthLoginComponent.ɵfac = function FormioAuthLoginComponent_Factory(t) { return new (t || FormioAuthLoginComponent)(ɵngcc0.ɵɵdirectiveInject(FormioAuthService)); };
FormioAuthLoginComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormioAuthLoginComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "src", "submit"]], template: function FormioAuthLoginComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "formio", 0);
        ɵngcc0.ɵɵlistener("submit", function FormioAuthLoginComponent_Template_formio_submit_0_listener($event) { return ctx.service.onLoginSubmit($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("src", ctx.service.loginForm);
    } }, directives: [ɵngcc1.FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioAuthLoginComponent, [{
        type: Component,
        args: [{
                template: "<formio [src]=\"service.loginForm\" (submit)=\"service.onLoginSubmit($event)\"></formio> "
            }]
    }], function () { return [{ type: FormioAuthService }]; }, null); })();
    return FormioAuthLoginComponent;
}());
export { FormioAuthLoginComponent };
if (false) {
    /** @type {?} */
    FormioAuthLoginComponent.prototype.service;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJsb2dpbi5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBS007QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7MkVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBHZW5lcmF0ZWQgZnJvbTogYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtaW9BdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG52YXIgRm9ybWlvQXV0aExvZ2luQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcm1pb0F1dGhMb2dpbkNvbXBvbmVudChzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgfVxuICAgIEZvcm1pb0F1dGhMb2dpbkNvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiPGZvcm1pbyBbc3JjXT1cXFwic2VydmljZS5sb2dpbkZvcm1cXFwiIChzdWJtaXQpPVxcXCJzZXJ2aWNlLm9uTG9naW5TdWJtaXQoJGV2ZW50KVxcXCI+PC9mb3JtaW8+IFwiXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBGb3JtaW9BdXRoTG9naW5Db21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogRm9ybWlvQXV0aFNlcnZpY2UgfVxuICAgIF07IH07XG4gICAgcmV0dXJuIEZvcm1pb0F1dGhMb2dpbkNvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBGb3JtaW9BdXRoTG9naW5Db21wb25lbnQgfTtcbmlmIChmYWxzZSkge1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9BdXRoTG9naW5Db21wb25lbnQucHJvdG90eXBlLnNlcnZpY2U7XG59XG4iXX0=