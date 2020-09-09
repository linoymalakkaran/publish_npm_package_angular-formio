/**
 * @fileoverview added by tsickle
 * Generated from: resource/view/view.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormioResourceService } from '../resource.service';
import { FormioResourceConfig } from '../resource.config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../components/formio/formio.component';
var FormioResourceViewComponent = /** @class */ (function () {
    function FormioResourceViewComponent(service, config) {
        this.service = service;
        this.config = config;
    }
    /** @nocollapse */
    FormioResourceViewComponent.ctorParameters = function () { return [
        { type: FormioResourceService },
        { type: FormioResourceConfig }
    ]; };
FormioResourceViewComponent.ɵfac = function FormioResourceViewComponent_Factory(t) { return new (t || FormioResourceViewComponent)(ɵngcc0.ɵɵdirectiveInject(FormioResourceService), ɵngcc0.ɵɵdirectiveInject(FormioResourceConfig)); };
FormioResourceViewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: FormioResourceViewComponent, selectors: [["ng-component"]], decls: 1, vars: 5, consts: [[3, "form", "submission", "refresh", "hideComponents", "readOnly"]], template: function FormioResourceViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "formio", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("form", ctx.service.form)("submission", ctx.service.resource)("refresh", ctx.service.refresh)("hideComponents", ctx.config.parents)("readOnly", true);
    } }, directives: [ɵngcc1.FormioComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioResourceViewComponent, [{
        type: Component,
        args: [{
                template: "<formio [form]=\"service.form\" [submission]=\"service.resource\" [refresh]=\"service.refresh\" [hideComponents]=\"config.parents\" [readOnly]=\"true\" ></formio> "
            }]
    }], function () { return [{ type: FormioResourceService }, { type: FormioResourceConfig }]; }, null); })();
    return FormioResourceViewComponent;
}());
export { FormioResourceViewComponent };
if (false) {
    /** @type {?} */
    FormioResourceViewComponent.prototype.service;
    /** @type {?} */
    FormioResourceViewComponent.prototype.config;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbInZpZXcuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FLTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OzsrR0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBhZGRlZCBieSB0c2lja2xlXG4gKiBHZW5lcmF0ZWQgZnJvbTogcmVzb3VyY2Uvdmlldy92aWV3LmNvbXBvbmVudC50c1xuICogQHN1cHByZXNzIHtjaGVja1R5cGVzLGNvbnN0YW50UHJvcGVydHksZXh0cmFSZXF1aXJlLG1pc3NpbmdPdmVycmlkZSxtaXNzaW5nUmV0dXJuLHVudXNlZFByaXZhdGVNZW1iZXJzLHVzZWxlc3NDb2RlfSBjaGVja2VkIGJ5IHRzY1xuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlU2VydmljZSB9IGZyb20gJy4uL3Jlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VDb25maWcgfSBmcm9tICcuLi9yZXNvdXJjZS5jb25maWcnO1xudmFyIEZvcm1pb1Jlc291cmNlVmlld0NvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb3JtaW9SZXNvdXJjZVZpZXdDb21wb25lbnQoc2VydmljZSwgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cbiAgICBGb3JtaW9SZXNvdXJjZVZpZXdDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIjxmb3JtaW8gW2Zvcm1dPVxcXCJzZXJ2aWNlLmZvcm1cXFwiIFtzdWJtaXNzaW9uXT1cXFwic2VydmljZS5yZXNvdXJjZVxcXCIgW3JlZnJlc2hdPVxcXCJzZXJ2aWNlLnJlZnJlc2hcXFwiIFtoaWRlQ29tcG9uZW50c109XFxcImNvbmZpZy5wYXJlbnRzXFxcIiBbcmVhZE9ubHldPVxcXCJ0cnVlXFxcIiA+PC9mb3JtaW8+IFwiXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBGb3JtaW9SZXNvdXJjZVZpZXdDb21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXG4gICAgICAgIHsgdHlwZTogRm9ybWlvUmVzb3VyY2VTZXJ2aWNlIH0sXG4gICAgICAgIHsgdHlwZTogRm9ybWlvUmVzb3VyY2VDb25maWcgfVxuICAgIF07IH07XG4gICAgcmV0dXJuIEZvcm1pb1Jlc291cmNlVmlld0NvbXBvbmVudDtcbn0oKSk7XG5leHBvcnQgeyBGb3JtaW9SZXNvdXJjZVZpZXdDb21wb25lbnQgfTtcbmlmIChmYWxzZSkge1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBGb3JtaW9SZXNvdXJjZVZpZXdDb21wb25lbnQucHJvdG90eXBlLnNlcnZpY2U7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEZvcm1pb1Jlc291cmNlVmlld0NvbXBvbmVudC5wcm90b3R5cGUuY29uZmlnO1xufVxuIl19