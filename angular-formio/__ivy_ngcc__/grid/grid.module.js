/**
 * @fileoverview added by tsickle
 * Generated from: grid/grid.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormioModule } from '../formio.module';
import { FormioAlerts } from '../components/alerts/formio.alerts';
import { FormioGridComponent } from './grid.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormGridHeaderComponent } from './form/FormGridHeader.component';
import { FormGridBodyComponent } from './form/FormGridBody.component';
import { FormGridFooterComponent } from './form/FormGridFooter.component';
import { SubmissionGridHeaderComponent } from './submission/SubmissionGridHeader.component';
import { SubmissionGridBodyComponent } from './submission/SubmissionGridBody.component';
import { SubmissionGridFooterComponent } from './submission/SubmissionGridFooter.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ngx-bootstrap/pagination';
var FormioGrid = /** @class */ (function () {
    function FormioGrid() {
    }
FormioGrid.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: FormioGrid });
FormioGrid.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function FormioGrid_Factory(t) { return new (t || FormioGrid)(); }, providers: [
        FormioAlerts
    ], imports: [[
            CommonModule,
            FormsModule,
            FormioModule,
            RouterModule,
            PaginationModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FormioGrid, { declarations: function () { return [FormioGridComponent,
        FormGridHeaderComponent,
        FormGridBodyComponent,
        FormGridFooterComponent,
        SubmissionGridHeaderComponent,
        SubmissionGridBodyComponent,
        SubmissionGridFooterComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        FormioModule,
        RouterModule, ɵngcc1.PaginationModule]; }, exports: function () { return [FormioGridComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(FormioGrid, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    FormioModule,
                    RouterModule,
                    PaginationModule.forRoot()
                ],
                declarations: [
                    FormioGridComponent,
                    FormGridHeaderComponent,
                    FormGridBodyComponent,
                    FormGridFooterComponent,
                    SubmissionGridHeaderComponent,
                    SubmissionGridBodyComponent,
                    SubmissionGridFooterComponent
                ],
                exports: [
                    FormioGridComponent
                ],
                entryComponents: [
                    FormGridHeaderComponent,
                    FormGridBodyComponent,
                    FormGridFooterComponent,
                    SubmissionGridHeaderComponent,
                    SubmissionGridBodyComponent,
                    SubmissionGridFooterComponent
                ],
                providers: [
                    FormioAlerts
                ]
            }]
    }], function () { return []; }, null); })();
    return FormioGrid;
}());
export { FormioGrid };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VzIjpbImdyaWQubW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBa0NNO0FBQ047QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEdlbmVyYXRlZCBmcm9tOiBncmlkL2dyaWQubW9kdWxlLnRzXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybWlvTW9kdWxlIH0gZnJvbSAnLi4vZm9ybWlvLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtaW9BbGVydHMgfSBmcm9tICcuLi9jb21wb25lbnRzL2FsZXJ0cy9mb3JtaW8uYWxlcnRzJztcbmltcG9ydCB7IEZvcm1pb0dyaWRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgRm9ybUdyaWRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0vRm9ybUdyaWRIZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1HcmlkQm9keUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS9Gb3JtR3JpZEJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1HcmlkRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtL0Zvcm1HcmlkRm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uR3JpZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3VibWlzc2lvbi9TdWJtaXNzaW9uR3JpZEhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VibWlzc2lvbkdyaWRCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9zdWJtaXNzaW9uL1N1Ym1pc3Npb25HcmlkQm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VibWlzc2lvbkdyaWRGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1pc3Npb24vU3VibWlzc2lvbkdyaWRGb290ZXIuY29tcG9uZW50JztcbnZhciBGb3JtaW9HcmlkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZvcm1pb0dyaWQoKSB7XG4gICAgfVxuICAgIEZvcm1pb0dyaWQuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtaW9Nb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBQYWdpbmF0aW9uTW9kdWxlLmZvclJvb3QoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvcm1pb0dyaWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtR3JpZEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvcm1HcmlkQm9keUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIEZvcm1HcmlkRm9vdGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgU3VibWlzc2lvbkdyaWRIZWFkZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXNzaW9uR3JpZEJvZHlDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXNzaW9uR3JpZEZvb3RlckNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtaW9HcmlkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgRm9ybUdyaWRIZWFkZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtR3JpZEJvZHlDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtR3JpZEZvb3RlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pc3Npb25HcmlkSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgU3VibWlzc2lvbkdyaWRCb2R5Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgU3VibWlzc2lvbkdyaWRGb290ZXJDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3JtaW9BbGVydHNcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgcmV0dXJuIEZvcm1pb0dyaWQ7XG59KCkpO1xuZXhwb3J0IHsgRm9ybWlvR3JpZCB9O1xuIl19