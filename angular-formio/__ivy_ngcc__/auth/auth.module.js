/**
 * @fileoverview added by tsickle
 * Generated from: auth/auth.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from '../formio.module';
import { FormioAuthComponent } from './auth.component';
import { FormioAuthLoginComponent } from './login/login.component';
import { FormioAuthRegisterComponent } from './register/register.component';
import { FormioAuthRoutes } from './auth.routes';
import { extendRouter } from '../formio.utils';
import * as ɵngcc0 from '@angular/core';
var FormioAuth = /** @class */ (function () {
    function FormioAuth() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    FormioAuth.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return extendRouter(FormioAuth, config, FormioAuthRoutes);
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    FormioAuth.forChild = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return extendRouter(FormioAuth, config, FormioAuthRoutes);
    };
FormioAuth.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FormioAuth });
FormioAuth.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FormioAuth_Factory(t) { return new (t || FormioAuth)(); }, imports: [[
            CommonModule,
            FormioModule,
            RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FormioAuth, { declarations: function () { return [FormioAuthComponent,
        FormioAuthLoginComponent,
        FormioAuthRegisterComponent]; }, imports: function () { return [CommonModule,
        FormioModule,
        RouterModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioAuth, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormioModule,
                    RouterModule
                ],
                declarations: [
                    FormioAuthComponent,
                    FormioAuthLoginComponent,
                    FormioAuthRegisterComponent
                ]
            }]
    }], function () { return []; }, null); })();
    return FormioAuth;
}());
export { FormioAuth };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VzIjpbImF1dGgubW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQWNNO0FBQ047QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEdlbmVyYXRlZCBmcm9tOiBhdXRoL2F1dGgubW9kdWxlLnRzXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1pb01vZHVsZSB9IGZyb20gJy4uL2Zvcm1pby5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybWlvQXV0aENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWlvQXV0aExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWlvQXV0aFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWlvQXV0aFJvdXRlcyB9IGZyb20gJy4vYXV0aC5yb3V0ZXMnO1xuaW1wb3J0IHsgZXh0ZW5kUm91dGVyIH0gZnJvbSAnLi4vZm9ybWlvLnV0aWxzJztcbnZhciBGb3JtaW9BdXRoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcm1pb0F1dGgoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IGNvbmZpZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvQXV0aC5mb3JSb290ID0gLyoqXG4gICAgICogQHBhcmFtIHs/PX0gY29uZmlnXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBleHRlbmRSb3V0ZXIoRm9ybWlvQXV0aCwgY29uZmlnLCBGb3JtaW9BdXRoUm91dGVzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IGNvbmZpZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvQXV0aC5mb3JDaGlsZCA9IC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IGNvbmZpZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gZXh0ZW5kUm91dGVyKEZvcm1pb0F1dGgsIGNvbmZpZywgRm9ybWlvQXV0aFJvdXRlcyk7XG4gICAgfTtcbiAgICBGb3JtaW9BdXRoLmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvcm1pb01vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlck1vZHVsZVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvcm1pb0F1dGhDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtaW9BdXRoTG9naW5Db21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtaW9BdXRoUmVnaXN0ZXJDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgcmV0dXJuIEZvcm1pb0F1dGg7XG59KCkpO1xuZXhwb3J0IHsgRm9ybWlvQXV0aCB9O1xuIl19