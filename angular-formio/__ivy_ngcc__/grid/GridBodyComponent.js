/**
 * @fileoverview added by tsickle
 * Generated from: grid/GridBodyComponent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { each, clone } from 'lodash';
import { GridHeaderComponent } from './GridHeaderComponent';
import * as ɵngcc0 from '@angular/core';
var GridBodyComponent = /** @class */ (function () {
    function GridBodyComponent() {
        this.firstItem = 0;
        this.lastItem = 0;
        this.skip = 0;
        this.limit = 0;
        this.total = 0;
        this.rowSelect = new EventEmitter();
        this.rowAction = new EventEmitter();
        this.loading = true;
    }
    /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    GridBodyComponent.prototype.load = /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    function (formio, query) {
        return formio.loadForm(query);
    };
    /**
     * @param {?} event
     * @param {?} row
     * @return {?}
     */
    GridBodyComponent.prototype.onRowSelect = /**
     * @param {?} event
     * @param {?} row
     * @return {?}
     */
    function (event, row) {
        event.preventDefault();
        this.rowSelect.emit(row);
    };
    /**
     * @param {?} event
     * @param {?} row
     * @param {?} action
     * @return {?}
     */
    GridBodyComponent.prototype.onRowAction = /**
     * @param {?} event
     * @param {?} row
     * @param {?} action
     * @return {?}
     */
    function (event, row, action) {
        event.preventDefault();
        this.rowAction.emit({ row: row, action: action });
    };
    /**
     * Set the rows for this Grid body.
     *
     * @param query
     * @param items
     * @return any
     */
    /**
     * Set the rows for this Grid body.
     *
     * @param {?} query
     * @param {?} items
     * @return {?} any
     */
    GridBodyComponent.prototype.setRows = /**
     * Set the rows for this Grid body.
     *
     * @param {?} query
     * @param {?} items
     * @return {?} any
     */
    function (query, items) {
        var _this = this;
        this.rows = [];
        this.firstItem = query.skip + 1;
        this.lastItem = this.firstItem + items.length - 1;
        this.total = items.serverCount;
        this.limit = query.limit;
        this.skip = Math.floor(items.skip / query.limit) + 1;
        this.loading = false;
        each(items, (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this.rows.push(clone(item));
        }));
        return this.rows;
    };
    GridBodyComponent.propDecorators = {
        header: [{ type: Input }],
        actionAllowed: [{ type: Input }],
        rowSelect: [{ type: Output }],
        rowAction: [{ type: Output }],
        template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
GridBodyComponent.ɵfac = function GridBodyComponent_Factory(t) { return new (t || GridBodyComponent)(); };
GridBodyComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridBodyComponent, viewQuery: function GridBodyComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { header: "header", actionAllowed: "actionAllowed" }, outputs: { rowSelect: "rowSelect", rowAction: "rowAction" } });

    return GridBodyComponent;
}());
export { GridBodyComponent };
if (false) {
    /** @type {?} */
    GridBodyComponent.prototype.header;
    /** @type {?} */
    GridBodyComponent.prototype.actionAllowed;
    /** @type {?} */
    GridBodyComponent.prototype.rowSelect;
    /** @type {?} */
    GridBodyComponent.prototype.rowAction;
    /** @type {?} */
    GridBodyComponent.prototype.template;
    /** @type {?} */
    GridBodyComponent.prototype.rows;
    /** @type {?} */
    GridBodyComponent.prototype.loading;
    /** @type {?} */
    GridBodyComponent.prototype.firstItem;
    /** @type {?} */
    GridBodyComponent.prototype.lastItem;
    /** @type {?} */
    GridBodyComponent.prototype.skip;
    /** @type {?} */
    GridBodyComponent.prototype.limit;
    /** @type {?} */
    GridBodyComponent.prototype.total;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZEJvZHlDb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIkdyaWRCb2R5Q29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEdlbmVyYXRlZCBmcm9tOiBncmlkL0dyaWRCb2R5Q29tcG9uZW50LnRzXG4gKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXMsY29uc3RhbnRQcm9wZXJ0eSxleHRyYVJlcXVpcmUsbWlzc2luZ092ZXJyaWRlLG1pc3NpbmdSZXR1cm4sdW51c2VkUHJpdmF0ZU1lbWJlcnMsdXNlbGVzc0NvZGV9IGNoZWNrZWQgYnkgdHNjXG4gKi9cbmltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZWFjaCwgY2xvbmUgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgR3JpZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vR3JpZEhlYWRlckNvbXBvbmVudCc7XG52YXIgR3JpZEJvZHlDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR3JpZEJvZHlDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMuZmlyc3RJdGVtID0gMDtcbiAgICAgICAgdGhpcy5sYXN0SXRlbSA9IDA7XG4gICAgICAgIHRoaXMuc2tpcCA9IDA7XG4gICAgICAgIHRoaXMubGltaXQgPSAwO1xuICAgICAgICB0aGlzLnRvdGFsID0gMDtcbiAgICAgICAgdGhpcy5yb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMucm93QWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gez99IGZvcm1pb1xuICAgICAqIEBwYXJhbSB7Pz19IHF1ZXJ5XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBHcmlkQm9keUNvbXBvbmVudC5wcm90b3R5cGUubG9hZCA9IC8qKlxuICAgICAqIEBwYXJhbSB7P30gZm9ybWlvXG4gICAgICogQHBhcmFtIHs/PX0gcXVlcnlcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChmb3JtaW8sIHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBmb3JtaW8ubG9hZEZvcm0ocXVlcnkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBldmVudFxuICAgICAqIEBwYXJhbSB7P30gcm93XG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBHcmlkQm9keUNvbXBvbmVudC5wcm90b3R5cGUub25Sb3dTZWxlY3QgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGV2ZW50XG4gICAgICogQHBhcmFtIHs/fSByb3dcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIChldmVudCwgcm93KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucm93U2VsZWN0LmVtaXQocm93KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7P30gZXZlbnRcbiAgICAgKiBAcGFyYW0gez99IHJvd1xuICAgICAqIEBwYXJhbSB7P30gYWN0aW9uXG4gICAgICogQHJldHVybiB7P31cbiAgICAgKi9cbiAgICBHcmlkQm9keUNvbXBvbmVudC5wcm90b3R5cGUub25Sb3dBY3Rpb24gPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGV2ZW50XG4gICAgICogQHBhcmFtIHs/fSByb3dcbiAgICAgKiBAcGFyYW0gez99IGFjdGlvblxuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGV2ZW50LCByb3csIGFjdGlvbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJvd0FjdGlvbi5lbWl0KHsgcm93OiByb3csIGFjdGlvbjogYWN0aW9uIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSByb3dzIGZvciB0aGlzIEdyaWQgYm9keS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqIEBwYXJhbSBpdGVtc1xuICAgICAqIEByZXR1cm4gYW55XG4gICAgICovXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSByb3dzIGZvciB0aGlzIEdyaWQgYm9keS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7P30gcXVlcnlcbiAgICAgKiBAcGFyYW0gez99IGl0ZW1zXG4gICAgICogQHJldHVybiB7P30gYW55XG4gICAgICovXG4gICAgR3JpZEJvZHlDb21wb25lbnQucHJvdG90eXBlLnNldFJvd3MgPSAvKipcbiAgICAgKiBTZXQgdGhlIHJvd3MgZm9yIHRoaXMgR3JpZCBib2R5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHs/fSBxdWVyeVxuICAgICAqIEBwYXJhbSB7P30gaXRlbXNcbiAgICAgKiBAcmV0dXJuIHs/fSBhbnlcbiAgICAgKi9cbiAgICBmdW5jdGlvbiAocXVlcnksIGl0ZW1zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xuICAgICAgICB0aGlzLmZpcnN0SXRlbSA9IHF1ZXJ5LnNraXAgKyAxO1xuICAgICAgICB0aGlzLmxhc3RJdGVtID0gdGhpcy5maXJzdEl0ZW0gKyBpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLnRvdGFsID0gaXRlbXMuc2VydmVyQ291bnQ7XG4gICAgICAgIHRoaXMubGltaXQgPSBxdWVyeS5saW1pdDtcbiAgICAgICAgdGhpcy5za2lwID0gTWF0aC5mbG9vcihpdGVtcy5za2lwIC8gcXVlcnkubGltaXQpICsgMTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGVhY2goaXRlbXMsICgvKipcbiAgICAgICAgICogQHBhcmFtIHs/fSBpdGVtXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgX3RoaXMucm93cy5wdXNoKGNsb25lKGl0ZW0pKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3dzO1xuICAgIH07XG4gICAgR3JpZEJvZHlDb21wb25lbnQucHJvcERlY29yYXRvcnMgPSB7XG4gICAgICAgIGhlYWRlcjogW3sgdHlwZTogSW5wdXQgfV0sXG4gICAgICAgIGFjdGlvbkFsbG93ZWQ6IFt7IHR5cGU6IElucHV0IH1dLFxuICAgICAgICByb3dTZWxlY3Q6IFt7IHR5cGU6IE91dHB1dCB9XSxcbiAgICAgICAgcm93QWN0aW9uOiBbeyB0eXBlOiBPdXRwdXQgfV0sXG4gICAgICAgIHRlbXBsYXRlOiBbeyB0eXBlOiBWaWV3Q2hpbGQsIGFyZ3M6IFtUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSxdIH1dXG4gICAgfTtcbiAgICByZXR1cm4gR3JpZEJvZHlDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgR3JpZEJvZHlDb21wb25lbnQgfTtcbmlmIChmYWxzZSkge1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBHcmlkQm9keUNvbXBvbmVudC5wcm90b3R5cGUuaGVhZGVyO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBHcmlkQm9keUNvbXBvbmVudC5wcm90b3R5cGUuYWN0aW9uQWxsb3dlZDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgR3JpZEJvZHlDb21wb25lbnQucHJvdG90eXBlLnJvd1NlbGVjdDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgR3JpZEJvZHlDb21wb25lbnQucHJvdG90eXBlLnJvd0FjdGlvbjtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgR3JpZEJvZHlDb21wb25lbnQucHJvdG90eXBlLnRlbXBsYXRlO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBHcmlkQm9keUNvbXBvbmVudC5wcm90b3R5cGUucm93cztcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgR3JpZEJvZHlDb21wb25lbnQucHJvdG90eXBlLmxvYWRpbmc7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEdyaWRCb2R5Q29tcG9uZW50LnByb3RvdHlwZS5maXJzdEl0ZW07XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEdyaWRCb2R5Q29tcG9uZW50LnByb3RvdHlwZS5sYXN0SXRlbTtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgR3JpZEJvZHlDb21wb25lbnQucHJvdG90eXBlLnNraXA7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEdyaWRCb2R5Q29tcG9uZW50LnByb3RvdHlwZS5saW1pdDtcbiAgICAvKiogQHR5cGUgez99ICovXG4gICAgR3JpZEJvZHlDb21wb25lbnQucHJvdG90eXBlLnRvdGFsO1xufVxuIl19