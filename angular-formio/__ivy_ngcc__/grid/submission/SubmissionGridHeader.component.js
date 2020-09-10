import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

var _c0 = function (a0, a1) { return { "glyphicon-triangle-top": a0, "glyphicon-triangle-bottom": a1 }; };
function SubmissionGridHeaderComponent_ng_template_0_th_2_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 3);
} if (rf & 2) {
    var header_r2 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(1, _c0, header_r2.sort === "asc", header_r2.sort === "desc"));
} }
function SubmissionGridHeaderComponent_ng_template_0_th_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "th");
    ɵngcc0.ɵɵelementStart(1, "a", 1);
    ɵngcc0.ɵɵlistener("click", function SubmissionGridHeaderComponent_ng_template_0_th_2_Template_a_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r6); var header_r2 = ctx.$implicit; var ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.sort.emit(header_r2); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵtemplate(3, SubmissionGridHeaderComponent_ng_template_0_th_2_span_3_Template, 1, 4, "span", 2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var header_r2 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", header_r2.label, "\u00A0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", header_r2.sort);
} }
function SubmissionGridHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "thead");
    ɵngcc0.ɵɵelementStart(1, "tr");
    ɵngcc0.ɵɵtemplate(2, SubmissionGridHeaderComponent_ng_template_0_th_2_Template, 4, 2, "th", 0);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.headers);
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
 * Generated from: grid/submission/SubmissionGridHeader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Utils, Components } from 'formio-custom/formiojs';
import { GridHeaderComponent } from '../GridHeaderComponent';
var SubmissionGridHeaderComponent = /** @class */ (function (_super) {
    __extends(SubmissionGridHeaderComponent, _super);
    function SubmissionGridHeaderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} formio
     * @param {?=} query
     * @param {?=} columns
     * @return {?}
     */
    SubmissionGridHeaderComponent.prototype.load = /**
     * @param {?} formio
     * @param {?=} query
     * @param {?=} columns
     * @return {?}
     */
    function (formio, query, columns) {
        var _this = this;
        query = query || {};
        return formio.loadForm({ params: query }).then((/**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            _this.headers = [];
            _this.formComponents = new Map();
            _this.setComponents(form.components);
            columns ? columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                _this.setHeader(_this.getHeaderForColumn(column, _this.formComponents.get(column.path)));
            })) : _this.setComponentsHeaders(_this.formComponents);
            return _this.headers;
        }));
    };
    /**
     * @param {?} header
     * @return {?}
     */
    SubmissionGridHeaderComponent.prototype.setHeader = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        this.headers.push(header);
    };
    /**
     * @param {?} column
     * @param {?=} component
     * @param {?=} sort
     * @return {?}
     */
    SubmissionGridHeaderComponent.prototype.getHeaderForColumn = /**
     * @param {?} column
     * @param {?=} component
     * @param {?=} sort
     * @return {?}
     */
    function (column, component, sort) {
        return {
            label: column.label,
            key: column.path,
            sort: sort,
            component: component ? (/** @type {?} */ (Components.create(component, null, null, true))) : undefined,
            renderCell: column ? column.renderCell : undefined
        };
    };
    /**
     * @param {?} component
     * @param {?} path
     * @param {?=} sort
     * @return {?}
     */
    SubmissionGridHeaderComponent.prototype.getHeaderForComponent = /**
     * @param {?} component
     * @param {?} path
     * @param {?=} sort
     * @return {?}
     */
    function (component, path, sort) {
        return {
            label: component.label,
            key: path,
            sort: sort,
            component: component ? (/** @type {?} */ (Components.create(component, null, null, true))) : undefined,
        };
    };
    // Set headers from components in case if columns are not provided
    // Set headers from components in case if columns are not provided
    /**
     * @param {?} components
     * @param {?=} sort
     * @return {?}
     */
    SubmissionGridHeaderComponent.prototype.setComponentsHeaders = 
    // Set headers from components in case if columns are not provided
    /**
     * @param {?} components
     * @param {?=} sort
     * @return {?}
     */
    function (components, sort) {
        var _this = this;
        components.forEach((/**
         * @param {?} component
         * @param {?} path
         * @return {?}
         */
        function (component, path) {
            if (component.input &&
                (!component.hasOwnProperty('tableView') || component.tableView)) {
                _this.setHeader(_this.getHeaderForComponent(component, path, sort));
            }
        }));
    };
    // Map components
    // Map components
    /**
     * @param {?} components
     * @return {?}
     */
    SubmissionGridHeaderComponent.prototype.setComponents = 
    // Map components
    /**
     * @param {?} components
     * @return {?}
     */
    function (components) {
        var _this = this;
        Utils.eachComponent(components, (/**
         * @param {?} component
         * @param {?} newPath
         * @return {?}
         */
        function (component, newPath) {
            _this.formComponents.set("data." + newPath, component);
        }));
    };
SubmissionGridHeaderComponent.ɵfac = function SubmissionGridHeaderComponent_Factory(t) { return ɵSubmissionGridHeaderComponent_BaseFactory(t || SubmissionGridHeaderComponent); };
SubmissionGridHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SubmissionGridHeaderComponent, selectors: [["ng-component"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[4, "ngFor", "ngForOf"], [3, "click"], ["class", "glyphicon", 3, "ngClass", 4, "ngIf"], [1, "glyphicon", 3, "ngClass"]], template: function SubmissionGridHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, SubmissionGridHeaderComponent_ng_template_0_Template, 3, 1, "ng-template");
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgClass], encapsulation: 2 });
var ɵSubmissionGridHeaderComponent_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(SubmissionGridHeaderComponent);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SubmissionGridHeaderComponent, [{
        type: Component,
        args: [{
                template: "<ng-template> <thead> <tr> <th *ngFor=\"let header of headers\"> <a (click)=\"sort.emit(header)\"> {{ header.label }}&nbsp;<span [ngClass]=\"{'glyphicon-triangle-top': (header.sort === 'asc'), 'glyphicon-triangle-bottom': (header.sort === 'desc')}\" class=\"glyphicon\" *ngIf=\"header.sort\"></span> </a> </th> </tr> </thead> </ng-template> "
            }]
    }], null, null); })();
    return SubmissionGridHeaderComponent;
}(GridHeaderComponent));
export { SubmissionGridHeaderComponent };
if (false) {
    /** @type {?} */
    SubmissionGridHeaderComponent.prototype.formComponents;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VibWlzc2lvbkdyaWRIZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJTdWJtaXNzaW9uR3JpZEhlYWRlci5jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7MEJBS007QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEdlbmVyYXRlZCBmcm9tOiBncmlkL3N1Ym1pc3Npb24vU3VibWlzc2lvbkdyaWRIZWFkZXIuY29tcG9uZW50LnRzXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXRpbHMsIENvbXBvbmVudHMgfSBmcm9tICdmb3JtaW9qcyc7XG5pbXBvcnQgeyBHcmlkSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vR3JpZEhlYWRlckNvbXBvbmVudCc7XG52YXIgU3VibWlzc2lvbkdyaWRIZWFkZXJDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1Ym1pc3Npb25HcmlkSGVhZGVyQ29tcG9uZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1Ym1pc3Npb25HcmlkSGVhZGVyQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm9ybWlvXG4gICAgICogQHBhcmFtIHs/PX0gcXVlcnlcbiAgICAgKiBAcGFyYW0gez89fSBjb2x1bW5zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBTdWJtaXNzaW9uR3JpZEhlYWRlckNvbXBvbmVudC5wcm90b3R5cGUubG9hZCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm9ybWlvXG4gICAgICogQHBhcmFtIHs/PX0gcXVlcnlcbiAgICAgKiBAcGFyYW0gez89fSBjb2x1bW5zXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoZm9ybWlvLCBxdWVyeSwgY29sdW1ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBxdWVyeSA9IHF1ZXJ5IHx8IHt9O1xuICAgICAgICByZXR1cm4gZm9ybWlvLmxvYWRGb3JtKHsgcGFyYW1zOiBxdWVyeSB9KS50aGVuKCgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBmb3JtXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICAgICAgX3RoaXMuaGVhZGVycyA9IFtdO1xuICAgICAgICAgICAgX3RoaXMuZm9ybUNvbXBvbmVudHMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBfdGhpcy5zZXRDb21wb25lbnRzKGZvcm0uY29tcG9uZW50cyk7XG4gICAgICAgICAgICBjb2x1bW5zID8gY29sdW1ucy5mb3JFYWNoKCgvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7P30gY29sdW1uXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0SGVhZGVyKF90aGlzLmdldEhlYWRlckZvckNvbHVtbihjb2x1bW4sIF90aGlzLmZvcm1Db21wb25lbnRzLmdldChjb2x1bW4ucGF0aCkpKTtcbiAgICAgICAgICAgIH0pKSA6IF90aGlzLnNldENvbXBvbmVudHNIZWFkZXJzKF90aGlzLmZvcm1Db21wb25lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5oZWFkZXJzO1xuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGhlYWRlclxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgU3VibWlzc2lvbkdyaWRIZWFkZXJDb21wb25lbnQucHJvdG90eXBlLnNldEhlYWRlciA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gaGVhZGVyXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5wdXNoKGhlYWRlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbHVtblxuICAgICAqIEBwYXJhbSB7Pz19IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7Pz19IHNvcnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIFN1Ym1pc3Npb25HcmlkSGVhZGVyQ29tcG9uZW50LnByb3RvdHlwZS5nZXRIZWFkZXJGb3JDb2x1bW4gPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbHVtblxuICAgICAqIEBwYXJhbSB7Pz19IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7Pz19IHNvcnRcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChjb2x1bW4sIGNvbXBvbmVudCwgc29ydCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IGNvbHVtbi5sYWJlbCxcbiAgICAgICAgICAgIGtleTogY29sdW1uLnBhdGgsXG4gICAgICAgICAgICBzb3J0OiBzb3J0LFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQgPyAoLyoqIEB0eXBlIHs/fSAqLyAoQ29tcG9uZW50cy5jcmVhdGUoY29tcG9uZW50LCBudWxsLCBudWxsLCB0cnVlKSkpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmVuZGVyQ2VsbDogY29sdW1uID8gY29sdW1uLnJlbmRlckNlbGwgOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHs/fSBwYXRoXG4gICAgICogQHBhcmFtIHs/PX0gc29ydFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgU3VibWlzc2lvbkdyaWRIZWFkZXJDb21wb25lbnQucHJvdG90eXBlLmdldEhlYWRlckZvckNvbXBvbmVudCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHs/fSBwYXRoXG4gICAgICogQHBhcmFtIHs/PX0gc29ydFxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGNvbXBvbmVudCwgcGF0aCwgc29ydCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IGNvbXBvbmVudC5sYWJlbCxcbiAgICAgICAgICAgIGtleTogcGF0aCxcbiAgICAgICAgICAgIHNvcnQ6IHNvcnQsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCA/ICgvKiogQHR5cGUgez99ICovIChDb21wb25lbnRzLmNyZWF0ZShjb21wb25lbnQsIG51bGwsIG51bGwsIHRydWUpKSkgOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvLyBTZXQgaGVhZGVycyBmcm9tIGNvbXBvbmVudHMgaW4gY2FzZSBpZiBjb2x1bW5zIGFyZSBub3QgcHJvdmlkZWRcbiAgICAvLyBTZXQgaGVhZGVycyBmcm9tIGNvbXBvbmVudHMgaW4gY2FzZSBpZiBjb2x1bW5zIGFyZSBub3QgcHJvdmlkZWRcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbXBvbmVudHNcbiAgICAgKiBAcGFyYW0gez89fSBzb3J0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBTdWJtaXNzaW9uR3JpZEhlYWRlckNvbXBvbmVudC5wcm90b3R5cGUuc2V0Q29tcG9uZW50c0hlYWRlcnMgPSBcbiAgICAvLyBTZXQgaGVhZGVycyBmcm9tIGNvbXBvbmVudHMgaW4gY2FzZSBpZiBjb2x1bW5zIGFyZSBub3QgcHJvdmlkZWRcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGNvbXBvbmVudHNcbiAgICAgKiBAcGFyYW0gez89fSBzb3J0XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoY29tcG9uZW50cywgc29ydCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goKC8qKlxuICAgICAgICAgKiBAcGFyYW0gez99IGNvbXBvbmVudFxuICAgICAgICAgKiBAcGFyYW0gez99IHBhdGhcbiAgICAgICAgICogQHJldHVybiB7P31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIChjb21wb25lbnQsIHBhdGgpIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuaW5wdXQgJiZcbiAgICAgICAgICAgICAgICAoIWNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eSgndGFibGVWaWV3JykgfHwgY29tcG9uZW50LnRhYmxlVmlldykpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRIZWFkZXIoX3RoaXMuZ2V0SGVhZGVyRm9yQ29tcG9uZW50KGNvbXBvbmVudCwgcGF0aCwgc29ydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICAvLyBNYXAgY29tcG9uZW50c1xuICAgIC8vIE1hcCBjb21wb25lbnRzXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb21wb25lbnRzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBTdWJtaXNzaW9uR3JpZEhlYWRlckNvbXBvbmVudC5wcm90b3R5cGUuc2V0Q29tcG9uZW50cyA9IFxuICAgIC8vIE1hcCBjb21wb25lbnRzXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBjb21wb25lbnRzXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoY29tcG9uZW50cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBVdGlscy5lYWNoQ29tcG9uZW50KGNvbXBvbmVudHMsICgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBjb21wb25lbnRcbiAgICAgICAgICogQHBhcmFtIHs/fSBuZXdQYXRoXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoY29tcG9uZW50LCBuZXdQYXRoKSB7XG4gICAgICAgICAgICBfdGhpcy5mb3JtQ29tcG9uZW50cy5zZXQoXCJkYXRhLlwiICsgbmV3UGF0aCwgY29tcG9uZW50KTtcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgU3VibWlzc2lvbkdyaWRIZWFkZXJDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICAgICAgeyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcIjxuZy10ZW1wbGF0ZT4gPHRoZWFkPiA8dHI+IDx0aCAqbmdGb3I9XFxcImxldCBoZWFkZXIgb2YgaGVhZGVyc1xcXCI+IDxhIChjbGljayk9XFxcInNvcnQuZW1pdChoZWFkZXIpXFxcIj4ge3sgaGVhZGVyLmxhYmVsIH19Jm5ic3A7PHNwYW4gW25nQ2xhc3NdPVxcXCJ7J2dseXBoaWNvbi10cmlhbmdsZS10b3AnOiAoaGVhZGVyLnNvcnQgPT09ICdhc2MnKSwgJ2dseXBoaWNvbi10cmlhbmdsZS1ib3R0b20nOiAoaGVhZGVyLnNvcnQgPT09ICdkZXNjJyl9XFxcIiBjbGFzcz1cXFwiZ2x5cGhpY29uXFxcIiAqbmdJZj1cXFwiaGVhZGVyLnNvcnRcXFwiPjwvc3Bhbj4gPC9hPiA8L3RoPiA8L3RyPiA8L3RoZWFkPiA8L25nLXRlbXBsYXRlPiBcIlxuICAgICAgICAgICAgICAgIH0sXSB9LFxuICAgIF07XG4gICAgcmV0dXJuIFN1Ym1pc3Npb25HcmlkSGVhZGVyQ29tcG9uZW50O1xufShHcmlkSGVhZGVyQ29tcG9uZW50KSk7XG5leHBvcnQgeyBTdWJtaXNzaW9uR3JpZEhlYWRlckNvbXBvbmVudCB9O1xuaWYgKGZhbHNlKSB7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIFN1Ym1pc3Npb25HcmlkSGVhZGVyQ29tcG9uZW50LnByb3RvdHlwZS5mb3JtQ29tcG9uZW50cztcbn1cbiJdfQ==