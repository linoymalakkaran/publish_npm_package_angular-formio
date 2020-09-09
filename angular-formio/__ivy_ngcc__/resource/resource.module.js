/**
 * @fileoverview added by tsickle
 * Generated from: resource/resource.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormioModule } from '../formio.module';
import { FormioAlerts } from '../components/alerts/formio.alerts';
import { FormioGrid } from '../grid/grid.module';
import { FormioResourceComponent } from './resource.component';
import { FormioResourceViewComponent } from './view/view.component';
import { FormioResourceEditComponent } from './edit/edit.component';
import { FormioResourceDeleteComponent } from './delete/delete.component';
import { FormioResourceCreateComponent } from './create/create.component';
import { FormioResourceIndexComponent } from './index/index.component';
import { FormioResourceRoutes } from './resource.routes';
import { extendRouter } from '../formio.utils';
import * as ɵngcc0 from '@angular/core';
var FormioResource = /** @class */ (function () {
    function FormioResource() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    FormioResource.forChild = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return extendRouter(FormioResource, config, FormioResourceRoutes);
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    FormioResource.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return extendRouter(FormioResource, config, FormioResourceRoutes);
    };
FormioResource.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FormioResource });
FormioResource.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FormioResource_Factory(t) { return new (t || FormioResource)(); }, providers: [
        FormioAlerts
    ], imports: [[
            CommonModule,
            FormioModule,
            FormioGrid,
            RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FormioResource, { declarations: function () { return [FormioResourceComponent,
        FormioResourceCreateComponent,
        FormioResourceIndexComponent,
        FormioResourceViewComponent,
        FormioResourceEditComponent,
        FormioResourceDeleteComponent]; }, imports: function () { return [CommonModule,
        FormioModule,
        FormioGrid,
        RouterModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioResource, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormioModule,
                    FormioGrid,
                    RouterModule
                ],
                declarations: [
                    FormioResourceComponent,
                    FormioResourceCreateComponent,
                    FormioResourceIndexComponent,
                    FormioResourceViewComponent,
                    FormioResourceEditComponent,
                    FormioResourceDeleteComponent
                ],
                providers: [
                    FormioAlerts
                ]
            }]
    }], function () { return []; }, null); })();
    return FormioResource;
}());
export { FormioResource };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UubW9kdWxlLmpzIiwic291cmNlcyI6WyJyZXNvdXJjZS5tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBcUJNO0FBQ047QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEdlbmVyYXRlZCBmcm9tOiByZXNvdXJjZS9yZXNvdXJjZS5tb2R1bGUudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybWlvTW9kdWxlIH0gZnJvbSAnLi4vZm9ybWlvLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtaW9BbGVydHMgfSBmcm9tICcuLi9jb21wb25lbnRzL2FsZXJ0cy9mb3JtaW8uYWxlcnRzJztcbmltcG9ydCB7IEZvcm1pb0dyaWQgfSBmcm9tICcuLi9ncmlkL2dyaWQubW9kdWxlJztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3ZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZURlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vZGVsZXRlL2RlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWlvUmVzb3VyY2VDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1pb1Jlc291cmNlSW5kZXhDb21wb25lbnQgfSBmcm9tICcuL2luZGV4L2luZGV4LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtaW9SZXNvdXJjZVJvdXRlcyB9IGZyb20gJy4vcmVzb3VyY2Uucm91dGVzJztcbmltcG9ydCB7IGV4dGVuZFJvdXRlciB9IGZyb20gJy4uL2Zvcm1pby51dGlscyc7XG52YXIgRm9ybWlvUmVzb3VyY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9ybWlvUmVzb3VyY2UoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Pz19IGNvbmZpZ1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgRm9ybWlvUmVzb3VyY2UuZm9yQ2hpbGQgPSAvKipcbiAgICAgKiBAcGFyYW0gez89fSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFJvdXRlcihGb3JtaW9SZXNvdXJjZSwgY29uZmlnLCBGb3JtaW9SZXNvdXJjZVJvdXRlcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez89fSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEZvcm1pb1Jlc291cmNlLmZvclJvb3QgPSAvKipcbiAgICAgKiBAcGFyYW0gez89fSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFJvdXRlcihGb3JtaW9SZXNvdXJjZSwgY29uZmlnLCBGb3JtaW9SZXNvdXJjZVJvdXRlcyk7XG4gICAgfTtcbiAgICBGb3JtaW9SZXNvdXJjZS5kZWNvcmF0b3JzID0gW1xuICAgICAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtaW9Nb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtaW9HcmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyTW9kdWxlXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgRm9ybWlvUmVzb3VyY2VDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtaW9SZXNvdXJjZUNyZWF0ZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvcm1pb1Jlc291cmNlSW5kZXhDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtaW9SZXNvdXJjZVZpZXdDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtaW9SZXNvdXJjZUVkaXRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtaW9SZXNvdXJjZURlbGV0ZUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvcm1pb0FsZXJ0c1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICByZXR1cm4gRm9ybWlvUmVzb3VyY2U7XG59KCkpO1xuZXhwb3J0IHsgRm9ybWlvUmVzb3VyY2UgfTtcbiJdfQ==