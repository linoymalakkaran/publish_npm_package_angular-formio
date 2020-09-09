/**
 * @fileoverview added by tsickle
 * Generated from: grid/GridHeaderComponent.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Output, EventEmitter, ViewChild, TemplateRef, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var GridHeaderComponent = /** @class */ (function () {
    function GridHeaderComponent() {
        this.headers = [];
        this.sort = new EventEmitter();
    }
    Object.defineProperty(GridHeaderComponent.prototype, "numHeaders", {
        get: /**
         * @return {?}
         */
        function () {
            return this.headers.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} formio
     * @param {?=} query
     * @param {?=} columns
     * @return {?}
     */
    GridHeaderComponent.prototype.load = /**
     * @param {?} formio
     * @param {?=} query
     * @param {?=} columns
     * @return {?}
     */
    function (formio, query, columns) {
        return Promise.resolve([]);
    };
    GridHeaderComponent.propDecorators = {
        actionAllowed: [{ type: Input }],
        sort: [{ type: Output }],
        template: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
GridHeaderComponent.ɵfac = function GridHeaderComponent_Factory(t) { return new (t || GridHeaderComponent)(); };
GridHeaderComponent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: GridHeaderComponent, viewQuery: function GridHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { actionAllowed: "actionAllowed" }, outputs: { sort: "sort" } });

    return GridHeaderComponent;
}());
export { GridHeaderComponent };
if (false) {
    /** @type {?} */
    GridHeaderComponent.prototype.actionAllowed;
    /** @type {?} */
    GridHeaderComponent.prototype.sort;
    /** @type {?} */
    GridHeaderComponent.prototype.template;
    /** @type {?} */
    GridHeaderComponent.prototype.headers;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZEhlYWRlckNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiR3JpZEhlYWRlckNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IGFkZGVkIGJ5IHRzaWNrbGVcbiAqIEdlbmVyYXRlZCBmcm9tOiBncmlkL0dyaWRIZWFkZXJDb21wb25lbnQudHNcbiAqIEBzdXBwcmVzcyB7Y2hlY2tUeXBlcyxjb25zdGFudFByb3BlcnR5LGV4dHJhUmVxdWlyZSxtaXNzaW5nT3ZlcnJpZGUsbWlzc2luZ1JldHVybix1bnVzZWRQcml2YXRlTWVtYmVycyx1c2VsZXNzQ29kZX0gY2hlY2tlZCBieSB0c2NcbiAqL1xuaW1wb3J0IHsgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG52YXIgR3JpZEhlYWRlckNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHcmlkSGVhZGVyQ29tcG9uZW50KCkge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5zb3J0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR3JpZEhlYWRlckNvbXBvbmVudC5wcm90b3R5cGUsIFwibnVtSGVhZGVyc1wiLCB7XG4gICAgICAgIGdldDogLyoqXG4gICAgICAgICAqIEByZXR1cm4gez99XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJzLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHs/fSBmb3JtaW9cbiAgICAgKiBAcGFyYW0gez89fSBxdWVyeVxuICAgICAqIEBwYXJhbSB7Pz19IGNvbHVtbnNcbiAgICAgKiBAcmV0dXJuIHs/fVxuICAgICAqL1xuICAgIEdyaWRIZWFkZXJDb21wb25lbnQucHJvdG90eXBlLmxvYWQgPSAvKipcbiAgICAgKiBAcGFyYW0gez99IGZvcm1pb1xuICAgICAqIEBwYXJhbSB7Pz19IHF1ZXJ5XG4gICAgICogQHBhcmFtIHs/PX0gY29sdW1uc1xuICAgICAqIEByZXR1cm4gez99XG4gICAgICovXG4gICAgZnVuY3Rpb24gKGZvcm1pbywgcXVlcnksIGNvbHVtbnMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgfTtcbiAgICBHcmlkSGVhZGVyQ29tcG9uZW50LnByb3BEZWNvcmF0b3JzID0ge1xuICAgICAgICBhY3Rpb25BbGxvd2VkOiBbeyB0eXBlOiBJbnB1dCB9XSxcbiAgICAgICAgc29ydDogW3sgdHlwZTogT3V0cHV0IH1dLFxuICAgICAgICB0ZW1wbGF0ZTogW3sgdHlwZTogVmlld0NoaWxkLCBhcmdzOiBbVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0sXSB9XVxuICAgIH07XG4gICAgcmV0dXJuIEdyaWRIZWFkZXJDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgR3JpZEhlYWRlckNvbXBvbmVudCB9O1xuaWYgKGZhbHNlKSB7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEdyaWRIZWFkZXJDb21wb25lbnQucHJvdG90eXBlLmFjdGlvbkFsbG93ZWQ7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEdyaWRIZWFkZXJDb21wb25lbnQucHJvdG90eXBlLnNvcnQ7XG4gICAgLyoqIEB0eXBlIHs/fSAqL1xuICAgIEdyaWRIZWFkZXJDb21wb25lbnQucHJvdG90eXBlLnRlbXBsYXRlO1xuICAgIC8qKiBAdHlwZSB7P30gKi9cbiAgICBHcmlkSGVhZGVyQ29tcG9uZW50LnByb3RvdHlwZS5oZWFkZXJzO1xufVxuIl19