import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function SubmissionGridBodyComponent_ng_template_0_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "td", 3);
} if (rf & 2) {
    var rowHeader_r4 = ctx.$implicit;
    var row_r2 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r3.view(row_r2, rowHeader_r4), ɵngcc0.ɵɵsanitizeHtml);
} }
function SubmissionGridBodyComponent_ng_template_0_tr_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "tr", 1);
    ɵngcc0.ɵɵlistener("click", function SubmissionGridBodyComponent_ng_template_0_tr_1_Template_tr_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); var row_r2 = ctx.$implicit; var ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.onRowSelect($event, row_r2); });
    ɵngcc0.ɵɵtemplate(1, SubmissionGridBodyComponent_ng_template_0_tr_1_td_1_Template, 1, 1, "td", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.header.headers);
} }
function SubmissionGridBodyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "tbody");
    ɵngcc0.ɵɵtemplate(1, SubmissionGridBodyComponent_ng_template_0_tr_1_Template, 2, 1, "tr", 0);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.rows);
} }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * Generated from: grid/submission/SubmissionGridBody.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { get } from 'lodash';
import { GridBodyComponent } from '../GridBodyComponent';
var SubmissionGridBodyComponent = /** @class */ (function (_super) {
    __extends(SubmissionGridBodyComponent, _super);
    function SubmissionGridBodyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    SubmissionGridBodyComponent.prototype.load = /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    function (formio, query) {
        var _this = this;
        query = query || {};
        return formio.loadSubmissions({ params: query })
            .then((/**
         * @param {?} submissions
         * @return {?}
         */
        function (submissions) { return _this.setRows(query, submissions); }));
    };
    /**
     * Render the cell data.
     *
     * @param submission
     * @param header
     * @return any
     */
    /**
     * Render the cell data.
     *
     * @param {?} submission
     * @param {?} header
     * @return {?} any
     */
    SubmissionGridBodyComponent.prototype.view = /**
     * Render the cell data.
     *
     * @param {?} submission
     * @param {?} header
     * @return {?} any
     */
    function (submission, header) {
        /** @type {?} */
        var cellValue = get(submission, header.key);
        if (header.renderCell) {
            return header.renderCell(cellValue, header.component);
        }
        else {
            if (header.component) {
                if (header.component.getView) {
                    return header.component.getView(cellValue);
                }
                return header.component.asString(cellValue);
            }
            else {
                return cellValue.toString();
            }
        }
    };
SubmissionGridBodyComponent.ɵfac = function SubmissionGridBodyComponent_Factory(t) { return ɵSubmissionGridBodyComponent_BaseFactory(t || SubmissionGridBodyComponent); };
SubmissionGridBodyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SubmissionGridBodyComponent, selectors: [["ng-component"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function SubmissionGridBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SubmissionGridBodyComponent_ng_template_0_Template, 2, 1, "ng-template");
    } }, directives: [ɵngcc1.NgForOf], encapsulation: 2 });
var ɵSubmissionGridBodyComponent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(SubmissionGridBodyComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SubmissionGridBodyComponent, [{
        type: Component,
        args: [{
                template: "<ng-template> <tbody> <tr *ngFor=\"let row of rows\" (click)=\"onRowSelect($event, row)\"> <td *ngFor=\"let rowHeader of header.headers\" [innerHTML]=\"view(row, rowHeader)\"></td> </tr> </tbody> </ng-template> "
            }]
    }], null, null); })();
    return SubmissionGridBodyComponent;
}(GridBodyComponent));
export { SubmissionGridBodyComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VibWlzc2lvbkdyaWRCb2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiU3VibWlzc2lvbkdyaWRCb2R5LmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OzBCQUtNO0FBQ047QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgYWRkZWQgYnkgdHNpY2tsZVxuICogR2VuZXJhdGVkIGZyb206IGdyaWQvc3VibWlzc2lvbi9TdWJtaXNzaW9uR3JpZEJvZHkuY29tcG9uZW50LnRzXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEdyaWRCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi4vR3JpZEJvZHlDb21wb25lbnQnO1xudmFyIFN1Ym1pc3Npb25HcmlkQm9keUNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3VibWlzc2lvbkdyaWRCb2R5Q29tcG9uZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1Ym1pc3Npb25HcmlkQm9keUNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGZvcm1pb1xuICAgICAqIEBwYXJhbSB7Pz19IHF1ZXJ5XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBTdWJtaXNzaW9uR3JpZEJvZHlDb21wb25lbnQucHJvdG90eXBlLmxvYWQgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGZvcm1pb1xuICAgICAqIEBwYXJhbSB7Pz19IHF1ZXJ5XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoZm9ybWlvLCBxdWVyeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBxdWVyeSA9IHF1ZXJ5IHx8IHt9O1xuICAgICAgICByZXR1cm4gZm9ybWlvLmxvYWRTdWJtaXNzaW9ucyh7IHBhcmFtczogcXVlcnkgfSlcbiAgICAgICAgICAgIC50aGVuKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBzdWJtaXNzaW9uc1xuICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gKHN1Ym1pc3Npb25zKSB7IHJldHVybiBfdGhpcy5zZXRSb3dzKHF1ZXJ5LCBzdWJtaXNzaW9ucyk7IH0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY2VsbCBkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN1Ym1pc3Npb25cbiAgICAgKiBAcGFyYW0gaGVhZGVyXG4gICAgICogQHJldHVybiBhbnlcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNlbGwgZGF0YS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7P30gc3VibWlzc2lvblxuICAgICAqIEBwYXJhbSB7P30gaGVhZGVyXG4gICAgICogQHJldHVybiB7P30gYW55XG4gICAgICovXG4gICAgU3VibWlzc2lvbkdyaWRCb2R5Q29tcG9uZW50LnByb3RvdHlwZS52aWV3ID0gLyoqXG4gICAgICogUmVuZGVyIHRoZSBjZWxsIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gez99IHN1Ym1pc3Npb25cbiAgICAgKiBAcGFyYW0gez99IGhlYWRlclxuICAgICAqIEByZXR1cm4gez99IGFueVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChzdWJtaXNzaW9uLCBoZWFkZXIpIHtcbiAgICAgICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgICAgICB2YXIgY2VsbFZhbHVlID0gZ2V0KHN1Ym1pc3Npb24sIGhlYWRlci5rZXkpO1xuICAgICAgICBpZiAoaGVhZGVyLnJlbmRlckNlbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXIucmVuZGVyQ2VsbChjZWxsVmFsdWUsIGhlYWRlci5jb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhlYWRlci5jb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVyLmNvbXBvbmVudC5nZXRWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoZWFkZXIuY29tcG9uZW50LmdldFZpZXcoY2VsbFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhlYWRlci5jb21wb25lbnQuYXNTdHJpbmcoY2VsbFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBjZWxsVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3VibWlzc2lvbkdyaWRCb2R5Q29tcG9uZW50LmRlY29yYXRvcnMgPSBbXG4gICAgICAgIHsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCI8bmctdGVtcGxhdGU+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IHJvdyBvZiByb3dzXFxcIiAoY2xpY2spPVxcXCJvblJvd1NlbGVjdCgkZXZlbnQsIHJvdylcXFwiPiA8dGQgKm5nRm9yPVxcXCJsZXQgcm93SGVhZGVyIG9mIGhlYWRlci5oZWFkZXJzXFxcIiBbaW5uZXJIVE1MXT1cXFwidmlldyhyb3csIHJvd0hlYWRlcilcXFwiPjwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvbmctdGVtcGxhdGU+IFwiXG4gICAgICAgICAgICAgICAgfSxdIH0sXG4gICAgXTtcbiAgICByZXR1cm4gU3VibWlzc2lvbkdyaWRCb2R5Q29tcG9uZW50O1xufShHcmlkQm9keUNvbXBvbmVudCkpO1xuZXhwb3J0IHsgU3VibWlzc2lvbkdyaWRCb2R5Q29tcG9uZW50IH07XG4iXX0=